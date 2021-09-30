import { LitElement, html, customElement, property } from 'lit-element'
import './../components/modal';

@customElement('applications-list')
export class ApplicationsList extends LitElement {
  @property() applications;
  @property() showDetailModal = false;
  @property() userData: any;

  showDetail(detail: any) {
    this.showDetailModal = true;
    this.userData = detail;
  }

  render() {
    return this.applications.length ? html`
      ${this.applications.map((v: any) => html`
        <div .id=${v.id} class="debtor-box">
          <ul>
            <li>
              <strong>Nombre:</strong> ${v.name}
            </li>
            <li>
              <strong>Cantidad:</strong> ${v.amount}
            </li>
            <li>
              <strong>Estado:</strong> ${v.state}
            </li>
            <li>
              <strong>Pagado:</strong> ${v.payed ? 'Si' : 'No'}
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
      <credit-modal .show=${this.showDetailModal} .userData=${this.userData} @close-modal=${() => { this.showDetailModal =  false; }}></credit-modal>
    `: `
      Loading...
    `
  }

  // Clean shadow dom
  createRenderRoot() {
    return this;
  }
}
