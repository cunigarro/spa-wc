import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('my-element')
export class MyElement extends LitElement {
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

    const copies = days > 0 ? html`
      <p>
        ${days == 1 ? 'Falta' : 'Faltan'}
        <span class=${days < 15 ? 'highlight' : ''}>${days}</span>
        ${days == 1 ? 'día' : 'días'}
        para que lleguen las ${this.motive}.
      </p>
    ` : days == 0 ? html`
      <p class="highlight">
        Hoy son mis ${this.motive} hi*#@#¢∞#ta!!!
      </p>
    ` : days < 0 ? html`
      <p>
        Ayer fueron mis ${this.motive} hi*#@#¢∞#ta.
      </p>
    ` : '';

    return html`
      ${copies}
      <p>
        Mis
        <input type="text" value=${this.motive} @keyup=${this.onMotiveChanged} />
        empiezan en
        <input type="date" value=${this.targetDate} @change=${this.onDateChanged} />
      </p>
    `
  }
}
