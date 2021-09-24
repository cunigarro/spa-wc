import { LitElement, html, customElement, property } from 'lit-element'
import getApplicationsList from './apis/applications-list';
import { Helpers } from './helpers/helpers-container';

@customElement('credit-app')
export class CreditApp extends Helpers(LitElement) {
  @property()
  currentView: string = '/';
  resolved = new WeakSet();

  connectedCallback() {
    super.connectedCallback();
  }

  _hearRouting() {
    window.onpopstate = () => {
      this._onNavigate(window.location.pathname);
    }

    this._onNavigate(window.location.pathname);
  }

  _onNavigate(pathname: string): any {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    );
    this.currentView = pathname;
  }

  _renderCurrentView() {
    switch (this.currentView) {
      case '/' : return this.lazyLoading(import('./pages/do-applications'), html`<do-applications></do-applications>`);
      case '/applications' : return this.lazyLoading(import('./pages/applications-list'), html`
        <applications-list
          .applicationAPI=${getApplicationsList}
        >
        </applications-list>
      `);
    }
  }

  render() {
    return html`
      <header>
        <div class="logo">
          Credits
        </div>

        <ul class="menu">
          <li>
            <a href="#" @click="${(evt: any) => { evt.preventDefault(); this._onNavigate('/'); }}">
              Do applications
            </a>
          </li>
          <li>
            <a href="#" @click="${(evt: any) => { evt.preventDefault(); this._onNavigate('/applications'); }}">
              Applications list
            </a>
          </li>
        </ul>
      </header>
      <div class="container">
        ${this._renderCurrentView()}
      </div>
    `
  }

  // Clean shadow dom
  createRenderRoot() {
    return this;
  }
}
