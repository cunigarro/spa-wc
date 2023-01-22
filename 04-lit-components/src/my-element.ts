import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  name = 'Somebody';

  @property()
  hobby = '';

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

  @property()
  targetDate = '2021-09-24';

  @property()
  motive = 'vacaciones';

  onDateChanged(event: any) {
    this.targetDate = event.target.value;
  }

  onMotiveChanged(event: any) {
    this.motive = event.target.value;
  }

  render() {
    const days = Math.round(((new Date(this.targetDate) as any) - (new Date() as any)) / (1000 * 60 * 60 * 24)) + 1;

    const copy = days > 0 ? html`
      <p>
        ${days == 1 ? 'Falta' : 'Faltan'}
        <span class=${days < 15 ? 'highlight' : ''}>${days}</span>
        ${days == 1 ? 'día' : 'días'}
        para l@s ${this.motive}.
      </p>
    ` : days == 0 ? html`
      <p class="highlight">
        Hoy son mis ${this.motive}, eeeeh :)
      </p>
    ` : days < 0 ? html`
      <p>
        ${days == -1 ? 'Ayer' : 'Hace ' + Math.abs(days) + ' días' } fueron mis ${this.motive}, aaaah :(
      </p>
    ` : '';

    return html`
      <p>
          Hola soy ${this.name} me gusta la/los ${this.hobby} y...
      </p>
      <p>
        Mis
        <input type="text" value=${this.motive} @keyup=${this.onMotiveChanged} />
        ${days > 0 ? 'serán el' : days < 0 ? 'fueron el' : 'son hoy!'}
        <input type="date" value=${this.targetDate} @change=${this.onDateChanged} />
      </p>
      ${copy}
    `
  }
}
