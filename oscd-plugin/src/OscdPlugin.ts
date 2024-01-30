import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class OscdPlugin extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--oscd-plugin-text-color, #000);
    }
  `;

  @property({ type: Object }) 
  doc!: XMLDocument;

  @property({ type: Number })
  editCount = -1;

  @property({ type: String })
  locale!: string;

  render() {
    return html`
      <div>
        My plugin works!
      </div>
    `;
  }
}
