import { LitElement, html, customElement, property } from 'lit-element'
import getApplicationsList from './apis/applications-list';
import { Helpers } from './helpers/helpers-container';

@customElement('credit-app')
export class CreditApp extends Helpers(LitElement) {
  @property()
  currentView: string = '/';
  resolved = new WeakSet();

  constructor() {
    super();
    this.requester.requestInstanceKey({ name: 'fweg' }, this);

    this.creditDataEvent = new Event('credit-data');

    this.addEventListener('credit-data', (data: any) => {
      console.log(data.detail.userId);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._onNavigate(window.location.pathname);
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
      case '/' : return this.lazyLoading.load(import('./pages/do-applications'), html`<do-applications></do-applications>`);
      case '/applications' : return this.lazyLoading.load(import('./pages/applications-list'), html`
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
        <div
          @click="${(evt: any) => { evt.preventDefault(); this._onNavigate('/'); }}"
          class="logo"
          type="button"
        >
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
