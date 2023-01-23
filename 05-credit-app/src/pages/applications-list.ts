import { LitElement, html, customElement, property, css } from 'lit-element'
import { loadApplications } from '../core/actions';
import store from '../core/store';
import './../components/modal';

@customElement('applications-list')
export class ApplicationsList extends LitElement {
  @property() applications: any = [];
  @property() showDetailModal = false;
  @property() appDetail: any;

  connectedCallback() {
    super.connectedCallback();

    store.subscribe(() => {
      this.applications = store.getState();
    });

    store.dispatch(loadApplications());
  }

  showDetail(detail: any) {
    this.showDetailModal = true;
    this.appDetail = detail;
  }

  closeModal() {
    this.showDetailModal =  false;
  }

  render() {
    return this.applications.length ? html`
      ${this.applications.map((v: any) => html`
        <div .id=${v.id} class="debtor-box">
          <ul class="applications-list">
            <li>
              <strong>Nombre:</strong> ${v.name}
            </li>
            <li>
              <strong>Cantidad:</strong> ${v.amount}
            </li>
            <li>
              <strong>Estado:</strong> <span class="${v.payed ? 'payed' : 'no-payed'}">${v.payed ? 'Pagado' : 'No pagado'}</span>
            </li>
            <li>
              <strong>Detalle:</strong>
              <button class="credit-btn" @click=${() => this.showDetail({ ...v.detail, name: v.name, id: v.id, amount: v.amount})}>
                Ver detalle
              </button>
            </li>
          </ul>
        </div>
      `)}
      <credit-modal .show=${this.showDetailModal} .appDetail=${this.appDetail} @close-modal=${this.closeModal}></credit-modal>
    `: `
      Loading...
    `
  }

  static styles = css`
    .applications-list li {
      margin: 12px
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

    .payed {
      background-color: green;
      color: white;
      font-weight: bold;
      padding: 5px 16px 8px;
      border-radius: 16px;
    }

    .no-payed {
      background-color: orange;
      color: white;
      font-weight: bold;
      padding: 5px 16px 8px;
      border-radius: 16px;
    }
  `;
}
