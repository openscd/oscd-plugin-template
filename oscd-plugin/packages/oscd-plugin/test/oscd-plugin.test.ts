import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { OscdPlugin } from '../src/OscdPlugin.js';
import '../src/oscd-plugin.js';

describe('OscdPlugin', () => {
  it('renders', async () => {
    const el = await fixture<OscdPlugin>(html`<oscd-plugin></oscd-plugin>`);

    await expect(el).not.to.be.undefined;
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OscdPlugin>(html`<oscd-plugin></oscd-plugin>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
