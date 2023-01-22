import { LitElement, html, customElement, property, css } from 'lit-element'
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
      <credit-modal .show=${this.showDetailModal} .userData=${this.userData} @close-modal=${() => { this.showDetailModal =  false; }}></credit-modal>
    `: `
      Loading...
    `
  }

  static styles = css`
    [type="button"] {
      cursor: pointer;
    }

    .payed {
      background-color: seagreen;
      color: white;
      font-weight: bold;
      padding: 5px 16px 8px;
      border-radius: 16px;
    }

    .no-payed {
      background-color: brown;
      color: white;
      font-weight: bold;
      padding: 5px 16px 8px;
      border-radius: 16px;
    }

    .applications-list li {
      margin: 12px
    }
  `;
}
