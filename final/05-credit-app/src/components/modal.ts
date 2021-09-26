import { LitElement, html, customElement, property } from 'lit-element'
import { Helpers } from '../helpers';
@customElement('credit-modal')
export class CreditModal extends Helpers(LitElement) {
  @property()
  userData: any;

  @property()
  show = false;

  @property()
  userAPI;

  connectedCallback() {
    super.connectedCallback();
    this.userAPI = this.requestInstance('user-api');
    console.log(this.userAPI);
  }

  payCredit(userId: any) {
    super.connectedCallback();
    const event = new CustomEvent('credit-data', {
      bubbles: true,
      cancelable: true,
      detail: { userId }
    });

    this.dispatchEvent(event);

    this.closeModal()
  }

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
          <button
            @click=${() => this.payCredit(this.userData.id)}
            class="credit-btn"
          >
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
