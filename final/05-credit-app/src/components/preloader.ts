import { LitElement, html, customElement, property } from 'lit-element'

@customElement('credit-preloader')
export class Preloader extends LitElement {
  @property()
  show = false;

  render() {
    return this.show ? html`
      ...Loading
    ` : '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-login': Preloader
  }
}
