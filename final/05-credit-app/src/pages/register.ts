import { LitElement, html, customElement } from 'lit-element'

@customElement('credit-register')
export class CreditRegister extends LitElement {
  render() {
    return html`
      Hola soy credit register
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-login': CreditRegister
  }
}
