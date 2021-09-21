import template from './shared/utils/template.js';

const appNode = document.getElementById('app');

let time = 0;

setInterval(() => {
  time += 1;
  const myName = `
    <div>Hola mundo ${time}</div>
  `;
  render(myName, appNode);
}, 1000);



