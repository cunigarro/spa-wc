import { html, render } from './vendor/lit-html.js';

const state = {
  targetDate: '2022-12-15',
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
      para ${motive}.
    </p>
  ` : days == 0 ? html`
    <p class="highlight">
      Hoy son mis ${motive}, eeeeh :)
    </p>
  ` : days < 0 ? html`
    <p>
      Ayer fueron mis ${motive}, aaaah :(
    </p>
  ` : '';

  const template = html`
    <p>
      Mis
      <input type="text" value=${motive} @keyup=${onMotiveChanged} />
      ${days > 0 ? 'serán el' : days < 0 ? 'fueron el' : 'son hoy!'}
      <input type="date" value=${targetDate} @change=${onDateChanged} />
    </p>
    ${copy}
  `;

  render(template, document.getElementById('app'));
}

rerender(state);
