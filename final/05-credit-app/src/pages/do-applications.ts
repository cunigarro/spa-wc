import { LitElement, html, customElement } from 'lit-element'

@customElement('do-applications')
export class DoApplications extends LitElement {

  // _dataTaks = new CachedTasks

  render() {
    return html`
      <h1>
        Credit form
      </h1>

      <form class="form">
        <label>
          Name
          <input name="name" required />
        </label>

        <label>
          Amount
          <input amount="name" required />
        </label>

        <button type="submit">
          Apply
        </button>
      </form>
    `
  }

  createRenderRoot() {
    return this;
  }
}
