const appNode = document.getElementById('app');

let time = 100;
let template = '';

setInterval(() => {
  time -= 1;
  template = `
    <div class="container">Hola mundo ${time > 0 ? time : 0}</div>
  `;
  appNode.innerHTML = template;
}, 1000);
