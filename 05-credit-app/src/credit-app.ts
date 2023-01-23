import { LitElement, html, customElement, property } from 'lit-element';
import getApplicationsList from './apis/applications-list';
import { lazyLoading } from './helpers/lazy-loader';
import { Provider } from './helpers/provider';

import './components/header';

// @ts-expect-error
@customElement('credit-app')
export class CreditApp extends Provider(LitElement) {
  @property() currentView: string = '/';
  @property() appsData: any = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    getApplicationsList().then(data => {
      this.provideInstance('credit-info', data);
    });

    this._onNavigate(window.location.pathname);

    this._hearRouting();
  }

  _hearRouting() {
    window.onpopstate = () => {
      this._onNavigate(window.location.pathname);
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

  _renderCurrentView() {
    switch (this.currentView) {
      case '/applications':
        return lazyLoading(import('./pages/applications-list'), html`
          <applications-list></applications-list>
        `);

      default:
        return lazyLoading(import('./pages/do-applications'), html`<do-applications></do-applications>`);
    }
  }

  render() {
    return html`
      <app-header
        @navigate-to=${(data: any) => this._onNavigate(data.detail.route)}
      >
      </app-header>

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
