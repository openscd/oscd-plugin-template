import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { OscdPlugin } from '../src/OscdPlugin.js';
import '../src/oscd-plugin.js';

describe('OscdPlugin', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<OscdPlugin>(html`<oscd-plugin></oscd-plugin>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<OscdPlugin>(html`<oscd-plugin></oscd-plugin>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<OscdPlugin>(
      html`<oscd-plugin header="attribute header"></oscd-plugin>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OscdPlugin>(html`<oscd-plugin></oscd-plugin>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
