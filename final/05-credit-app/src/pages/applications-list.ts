import { LitElement, html, customElement, property } from 'lit-element'

@customElement('applications-list')
export class ApplicationsList extends LitElement {
  @property() applicationAPI;
  @property() threads;
  @property() _labels;

  async firstUpdated() {
    this._labels = await this.applicationAPI();
  }

  render() {
    return this._labels ? html`
      ${this._labels.map(v => html`
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
          </ul>
        </div>
      `)}
    `: `
      Loading...
    `
  }

  // Clean shadow dom
  createRenderRoot() {
    return this;
  }
}
