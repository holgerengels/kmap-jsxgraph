import {html, css, LitElement, PropertyValues, unsafeCSS} from 'lit';
import JXG from 'jsxgraph';
import {Board, BoardAttributes} from "jsxgraph";
import {jsxgraphStyles} from "./jsxgraph-css";
import {state} from "lit/decorators.js";
import katex from 'katex';
import {katexStyles} from "./katex-css";

export class KmapJsxGraph extends LitElement {
  private static _defaultAttributes: Partial<BoardAttributes> = {
    axis: true,
    keepAspectRatio: false,
    showNavigation: false,
    showScreenshot: false,
    showZoom: false,
    showCopyright: false,
  };

  declare shadowRoot: ShadowRoot;
  board!: Board;

  @state()
  private slotStyles?: string;

  protected firstUpdated(_changedProperties: PropertyValues) {
    let text = this.textFromSlot("attributes");
    const slotAttributes = text ? Function('"use strict";return (' + text + ')')() : {};
    const attributes: Partial<BoardAttributes> = {
      ...KmapJsxGraph._defaultAttributes,
      ...slotAttributes,
      document: this.shadowRoot
    };

    this.board = JXG.JSXGraph.initBoard('box', attributes);

    text = this.textFromSlot("script");
    if (text) {
      const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
      setTimeout(async () => {
        // @ts-ignore
        window.katex = katex;
        new AsyncFunction(text!).call(this)
        //eval(text!);
      });
    }
    this.slotStyles = this.textFromSlot("styles");
  }

  render() {
    return html`
      ${this.slotStyles ? html`<style>${unsafeCSS(this.slotStyles)}</style>`: ''}
      <div id="box" class="jxgbox"></div>
      <slot name="styles" style="display: none"></slot>
      <slot name="attributes" style="display: none"></slot>
      <slot name="script" style="display: none"></slot>
    `;
  }

  private textFromSlot(name: string): string | undefined {
    const slotElement = this.shadowRoot!.querySelector('slot[name=' + name + ']') as HTMLSlotElement;
    const childNodes = slotElement?.assignedNodes({flatten: true});
    const script = childNodes?.map((node: Node) => {
      return node.textContent ? node.textContent : ''
    }).join('');
    return script ? script : undefined;
  }

  static styles = [
    jsxgraphStyles,
    katexStyles,
    css`
    :host {
      display: block;
      width: 100%;
      aspect-ratio: 1;
    }
    #box {
      width: 100%;
      height: 100%;
    }
    .jxgbox {
      border: none;
    }
  `];

  public init() {
  }

  public bark() {
  }

  public showAnswer() {
  }

  public isValid(): boolean {
    return true;
  }
}
