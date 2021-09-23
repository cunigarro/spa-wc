import { LitElement, html, customElement, property } from 'lit-element'
import { directive } from 'lit-html';
import './components/preloader';
import { PendingContainer } from './helpers/pending-data';

@customElement('credit-app')
export class CreditApp extends PendingContainer(LitElement) {
  @property()
  currentView: string = '/';

  connectedCallback() {
    super.connectedCallback();

    window.onpopstate = () => {
      this._onNavigate(window.location.pathname);
    }

    this._onNavigate(window.location.pathname);
  }

  resolved = new WeakSet();

  lazyLoad = directive((importPromise: any, template: any) => {
    return (part: any) => {
      if(!this.resolved.has(part)) {
        importPromise.then(() => this.resolved.add(part));
        const event = new CustomEvent('pending-state', {
          composed: true,
          bubbles: true,
          detail: { promise: importPromise }
        });
        part.starNode.parentNode!.dispatchEvent(event);
      }
      part.setValue(template);
    }
  });

  _renderCurrentView() {
    console.log(this.currentView);
    switch (this.currentView) {
      case '/' : return this.lazyLoad(import('./pages/login'), html`<credit-login></credit-login>`);
      case '/register' : return this.lazyLoad(import('./pages/register'), html`<credit-register></credit-register>`);
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
      <credit-preloader .show=${this.__hasPendingChildren}></credit-preloader>
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
