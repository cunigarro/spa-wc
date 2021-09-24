import { LitElement, html, customElement } from 'lit-element'

@customElement('credit-login')
export class CreditLogin extends LitElement {

  // _dataTaks = new CachedTasks

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
