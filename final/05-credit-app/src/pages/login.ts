import { LitElement, html, customElement } from 'lit-element'

@customElement('credit-login')
export class CreditLogin extends LitElement {
  render() {
    return html`
      Hola soy credit login
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-login': CreditLogin
  }
}
