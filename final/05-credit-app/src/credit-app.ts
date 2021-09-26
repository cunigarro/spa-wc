import { LitElement, html, customElement, property } from 'lit-element'
import getApplicationsList from './apis/applications-list';
import { Helpers } from './helpers';

@customElement('credit-app')
export class CreditApp extends Helpers(LitElement) {
  @property() currentView: string = '/';
  @property() appsData: any = [];
  resolved = new WeakSet();

  constructor() {
    super();

    this.listenerInstance();
    this.provideInstance('user-api', getApplicationsList());

    this.creditDataEvent = new Event('credit-data');

    this.addEventListener('credit-data', (data: any) => {
      console.log(data.detail.userId);
      this.appsData = this.appsData.map((app: any) => {
        if(app.id == data.detail.userId) {
          return {
            ...app,
            payed: true
          };
        } else {
          return app;
        }
      });
    });

    getApplicationsList().then(data => {
      this.appsData = data;
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
      case '/' : return this.lazyLoading(import('./pages/do-applications'), html`<do-applications></do-applications>`);
      case '/applications' : return this.lazyLoading(import('./pages/applications-list'), html`
        <applications-list
          .applications=${this.appsData}
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
