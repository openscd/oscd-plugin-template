import { html, css, LitElement } from 'lit';

import { greet } from '@openscd/logic';

export class OscdPlugin extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--oscd-plugin-text-color, #000);
    }
  `;

  render() {
    return html` <h2>${greet()}</h2> `;
  }
}
