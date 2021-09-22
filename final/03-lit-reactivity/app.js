import { html, render } from './vendor/lit-html.js';

const state = {
  targetDate: '2021-09-23',
  motive: 'vacaciones'
}

const onDateChanged = (event) => {
  state.targetDate = event.target.value;
  rerender(state);
}

const onMotiveChanged = (event) => {
  state.motive = event.target.value;
  rerender(state);
}

function rerender({targetDate, motive}) {
  const days = Math.round((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24)) + 1;

  const copy = days > 0 ? html`
    <p>
      ${days == 1 ? 'Falta' : 'Faltan'}
      <span class=${days < 15 ? 'highlight' : ''}>${days}</span>
      ${days == 1 ? 'día' : 'días'}
      para que lleguen las ${motive}.
    </p>
  ` : days == 0 ? html`
    <p class="highlight">
      Hoy son mis ${motive} hi*#@#¢∞#ta!!!
    </p>
  ` : days < 0 ? html`
    <p>
      Ayer fueron mis ${motive} hi*#@#¢∞#ta.
    </p>
  ` : '';

  const template = html`
    ${copy}
    <p>
      Mis
      <input type="text" value=${motive} @keyup=${onMotiveChanged} />
      empiezan en
      <input type="date" value=${targetDate} @change=${onDateChanged} />
    </p>
  `;

  render(template, document.getElementById('app'));
}

rerender(state);
