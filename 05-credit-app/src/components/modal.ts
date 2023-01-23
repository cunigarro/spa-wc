import { LitElement, html, customElement, property, css } from 'lit-element'
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
            <strong>Cantidad solicitada:</strong>
            ${this.appDetail.amount}
          </p>
          <p>
            <strong>Capacidad de pago:</strong>
            ${this.appDetail.payCapacity}
          </p>
          <p>
            <strong>Valor a pagar:</strong>
            ${this.appDetail.amountToPay}
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

  static styles = css`
    .credit-modal {
      background-color: rgba(000, 000, 000, .5);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      box-sizing: border-box;
    }

    .credit-modal__container {
      background-color: #fff;
      max-width: 992px;
      width: 100%;
      min-height: 400px;
      border-radius: 1rem;
      padding: 1rem;
      position: relative;
    }

    .credit-modal__container__close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      padding: 1rem;
      font-size: 1rem;
      border: 0;
    }

    [type="button"] {
      cursor: pointer;
    }

    .credit-btn {
      border: none;
      padding: 0;
      box-shadow: none;
      background-color: #3f3d96;
      color: #fff;
      padding: 10px 20px;
      cursor: pointer;
    }
  `;
}
