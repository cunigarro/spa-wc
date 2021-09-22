import { html, render } from './vendor/lit-html.js';

const appNode = document.getElementById('app');

let time = 100;
let template = '';

setInterval(() => {
  time -= 1;
  template = html`
    <div class="container">Hola mundo ${time > 0 ? time : 0}</div>
  `;
  render(template, appNode);
}, 1000);
