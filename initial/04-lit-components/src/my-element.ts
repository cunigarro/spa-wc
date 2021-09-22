import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      font-family: "Helvetica Neue", sans-serif;
      font-size: 16px;
    }

    .highlight {
      font-size: 30px;
      display: inline-block;
      animation: highlight .2s infinite;
      font-weight: bold;
    }

    @keyframes highlight {
      0% {
        color: orange;
      }
      50% {
        color: yellow;
      }
      100% {
        color: orange;
      }
    }
  `;

  render() {
    return html`
      <p>Aquí va el contenido</p>
    `
  }
}
