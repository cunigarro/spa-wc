import { LitElement, html, customElement, property } from 'lit-element'
import { applicationPayed } from '../core/actions';
import store from '../core/store';

@customElement('credit-modal')
export class CreditModal extends LitElement {
  @property()
  appDetail: any;

  @property()
  show = false;

  @property() creditListAPI: any;

  payCredit(appId: any) {
    store.dispatch(applicationPayed(appId));
    this.closeModal();
  }

  closeModal() {
    const event = new CustomEvent('close-modal', {
      detail: {
        show: false
      },
      bubbles: true,
      cancelable: true
    });

    this.show = false;
    this.dispatchEvent(event);
  }

  render() {
    return this.show ? html`
      <div class="credit-modal">
        <div class="credit-modal__container">
          <button
            @click=${this.closeModal}
            class="credit-modal__container__close"
          >
            X
          </button>
          <h1>
            ${this.appDetail.name}
          </h1>
          <p>
            <strong>Capacidad de pago:</strong>
            ${this.appDetail.payCapacity}
          </p>
          <p>
            <strong>Valor a pagar:</strong>
            ${this.appDetail.payCapacity}
          </p>
          <p>
            <strong>Métodos de pago:</strong>
            <ul>
              ${this.appDetail.paymentMethods.map((method: any) => (
                html`
                  <li>
                    ${method}
                  </li>
                `
              ))}
            </ul>
          </p>
          <button
            @click=${() => this.payCredit(this.appDetail.id)}
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
