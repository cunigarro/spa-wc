import { LitElement, html, customElement, property } from 'lit-element';
import getApplicationsList from './apis/applications-list';
import { directive } from 'lit-html';
import './components/header';

@customElement('credit-app')
export class CreditApp extends LitElement {
  @property() currentView: string = '/';
  @property() appsData: any = [];
  _resolved = new WeakSet();

  lazyLoading = directive((importPromise: any, template: any) => {
    return (part: any) => {
      if(!this._resolved.has(part)) {
        importPromise.then(() => this._resolved.add(part));
      }
      part.setValue(template);
    }
  });

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    new Event('credit-data');

    this.addEventListener('credit-data', (data: any) => {
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
      case '/applications' :
        return this.lazyLoading(import('./pages/applications-list'), html`
          <applications-list
            .applications=${this.appsData}
          >
          </applications-list>
        `);

      default:
        return this.lazyLoading(import('./pages/do-applications'), html`<do-applications></do-applications>`);
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
