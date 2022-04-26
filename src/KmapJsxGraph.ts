import 'jsxgraph';
import {html, css, LitElement, PropertyValues} from 'lit';
import {jsxgraphStyles} from "./jsxgraph-css";
import {Board, BoardAttributes, def} from "jsxgraph";
import {property} from "lit/decorators.js";

export class KmapJsxGraph extends LitElement {
  declare shadowRoot: ShadowRoot;

  board!: Board;

  @property({ type: Array })
  private boundingBox?: number[];

  @property( { type: Boolean })
  private axis: boolean = true;

  @property( { type: Boolean })
  private grid: boolean = true;

  @property( { type: Boolean })
  private showScreenshot: boolean = false;

  @property( { type: Boolean })
  private showNavigation: boolean = false;

  @property( { type: Boolean })
  private showZoom: boolean = false;

  static styles = [
    jsxgraphStyles,
    css`
    :host {
      display: block;
    }
    #box {
      width: 400px;
      height: 200px;
    }
  `];

  protected firstUpdated(_changedProperties: PropertyValues) {
    const defaultAttributes: Partial<BoardAttributes> = {
      boundingBox: this.boundingBox ? this.boundingBox as [x1: number, y1: number, x2: number, y2: number] : [-10,10,10,-10],
      axis: this.axis,
      grid: this.grid,
      showNavigation: this.showNavigation,
      showScreenshot: this.showScreenshot,
      showZoom: this.showZoom,
      showCopyright: false,
    };
    let text = this.textFromSlot("attributes");
    const slotAttributes = text ? Function('"use strict";return (' + text + ')')() : {};
    const attributes: Partial<BoardAttributes> = {
      ...defaultAttributes,
      ...slotAttributes,
      document: this.shadowRoot as unknown as Document
    };

    // @ts-ignore
    this.shadowRoot.createElement = (...args: any[]) => this.shadowRoot.ownerDocument.createElement(args);
    // @ts-ignore
    this.shadowRoot.documentElement = this.shadowRoot.ownerDocument.documentElement;
    this.board = JXG.JSXGraph.initBoard('box', attributes);

    text = this.textFromSlot("script");
    if (text)
      new Function(text).call(this);
  }

  protected updated(_changedProperties: PropertyValues) {
    if (_changedProperties.has("boundingBox")) {
      this.board.setBoundingBox(this.boundingBox as [x1: number, y1: number, x2: number, y2: number])
    }
  }

  render() {
    return html`
      <div id="box" class="jxgbox"></div>
      <slot name="attributes" style="display: none"></slot>
      <slot name="script" style="display: none"></slot>
    `;
  }

  textFromSlot(name: string): string | undefined {
    const slotElement = this.shadowRoot!.querySelector('slot[name=' + name + ']') as HTMLSlotElement;
    const childNodes = slotElement?.assignedNodes({flatten: true});
    // ... do something with childNodes ...
    const script = childNodes?.map((node: Node) => {
      return node.textContent ? node.textContent : ''
    }).join('');
    return script ? script : undefined;
  }
}
