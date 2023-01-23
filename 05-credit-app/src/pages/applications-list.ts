import { LitElement, html, customElement, property } from 'lit-element'
import store from '../core/store';
import './../components/modal';

@customElement('applications-list')
export class ApplicationsList extends LitElement {
  @property() applications: any = [];
  @property() showDetailModal = false;
  @property() appDetail: any;

  connectedCallback() {
    super.connectedCallback();

    this.applications = store.getState();

    store.subscribe(() => {
      this.applications = store.getState();
    });
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
              <button class="credit-btn" @click=${() => this.showDetail({ ...v.detail, name: v.name, id: v.id})}>
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

  // Clean shadow dom
  createRenderRoot() {
    return this;
  }
}
