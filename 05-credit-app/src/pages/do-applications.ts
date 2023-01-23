import { LitElement, html, customElement, css } from 'lit-element'

@customElement('do-applications')
export class DoApplications extends LitElement {

  render() {
    return html`
      <h1>
        Credit form
      </h1>

      <form class="form">
        <label class="field">
          Name
          <input name="name" required />
        </label>

        <label class="field">
          Amount
          <input amount="name" required />
        </label>

        <button
          class="credit-btn"
          type="submit"
        >
          Apply
        </button>
      </form>
    `
  }

  static styles = css`
    .form .field {
      display: block;
      margin-bottom: 20px;
    }

    .form .credit-btn {
      margin-top: 10px;
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
