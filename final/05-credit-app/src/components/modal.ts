import { LitElement, html, customElement, property } from 'lit-element'

@customElement('credit-modal')
export class CreditModal extends LitElement {
  @property()
  userData: any;

  @property()
  show = false;

  closeModal() {
    const event = new CustomEvent('close-modal', {
      detail: {
        show: false
      },
      bubbles: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  render() {
    return this.show ? html`
      <div class="credit-modal">
        <div class="credit-modal__container">
          <button
            @click=${this.closeModal}}
            class="credit-modal__container__close"
          >
            X
          </button>
          <h1>
            ${this.userData.name}
          </h1>
          <p>
            <strong>Capacidad de pago:</strong>
            ${this.userData.payCapacity}
          </p>
          <p>
            <strong>Valor a pagar:</strong>
            ${this.userData.payCapacity}
          </p>
          <p>
            <strong>Métodos de pago:</strong>
            <ul>
              ${this.userData.paymentMethods.map((method: any) => (
                html`
                  <li>
                    ${method}
                  </li>
                `
              ))}
            </ul>
          </p>
          <button class="credit-btn">
            Pagar
          </button>
        </div>
      </div>
    ` : '';
  }

  createRenderRoot() {
    return this;
  }
}
