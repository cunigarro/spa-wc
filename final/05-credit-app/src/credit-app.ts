import { LitElement, html, customElement, property } from 'lit-element'
import './pages/login';
import './pages/register';

@customElement('credit-app')
export class CreditApp extends LitElement {
  @property()
  currentView: string = '/';

  connectedCallback() {
    super.connectedCallback();

    window.onpopstate = () => {
      this._onNavigate(window.location.pathname);
    }

    this._onNavigate(window.location.pathname);
  }

  _renderCurrentView() {
    switch (this.currentView) {
      case '/' : return html`<credit-login></credit-login>`;
      case '/register' : return html`<credit-register></credit-register>`;
    }
  }

  _onNavigate(pathname: string): any {
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
          <a href="#" @click="${(evt: any) => { evt.preventDefault(); this._onNavigate('/'); }}">
            Login
          </a>
        </li>
        <li>
          <a href="#" @click="${(evt: any) => { evt.preventDefault(); this._onNavigate('/register'); }}">
            Register
          </a>
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
