import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { KmapJsxGraph } from '../src/KmapJsxGraph.js';
import '../src/kmap-jsxgraph.js';

describe('KmapJsxGraph', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<KmapJsxGraph>(html`<kmap-jsxgraph></kmap-jsxgraph>`);

    expect(el.title).to.equal('Hey there');
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<KmapJsxGraph>(html`<kmap-jsxgraph></kmap-jsxgraph>`);
    el.shadowRoot!.querySelector('button')!.click();

  });

  it('can override the title via attribute', async () => {
    const el = await fixture<KmapJsxGraph>(html`<kmap-jsxgraph title="attribute title"></kmap-jsxgraph>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<KmapJsxGraph>(html`<kmap-jsxgraph></kmap-jsxgraph>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
