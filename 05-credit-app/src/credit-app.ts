import { LitElement, html, customElement, property, css } from 'lit-element';
import getApplicationsList from './apis/applications-list.api';
import { lazyLoading } from './helpers/lazy-loader';
import store from './core/store';
import { applicationsAdded } from './core/actions';

import './components/header';

@customElement('credit-app')
export class CreditApp extends LitElement {
  @property() currentView: string = '/';
  @property() appsData: any = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    getApplicationsList().then(data => {
      store.dispatch(applicationsAdded(data));
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
        return lazyLoading(import('./pages/applications-list'), html`<applications-list></applications-list>`);

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

  static styles = css`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }

    .container .form label {
      display: block;
      margin: 20px 0;
    }
  `;
}
