import { LitElement, html, customElement, property } from 'lit-element'
import './pages/login';
import './pages/register';

@customElement('credit-app')
export class CreditApp extends LitElement {
  login = html`<credit-login></credit-login>`;
  register = html`<register-login></register-login>`;

  @property()
  currentView: string = '/';

  routes = {
    '/' : this.login,
    '/register' : this.register
  }

  _renderCurrentView() {
    switch (this.currentView) {
      case '/' : return html`<credit-login></credit-login>`;
      case '/register' : return html`<credit-register></credit-register>`;
    }
  }

  _onNavigate(pathname: string): any {
    console.log(pathname);
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    );
    this.currentView = pathname;
  }

  render() {
    return html`
      <ul>
        <li>
          <button @click="${() => this._onNavigate('/')}">
            Login
          </button>
        </li>
        <li>
          <button @click="${() => this._onNavigate('/register')}">
            Register
          </button>
        </li>
      </ul>
      <div>
        ${this._renderCurrentView()}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-app': CreditApp
  }
}
