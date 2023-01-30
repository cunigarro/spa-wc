import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-header')
export class Header extends LitElement {
  @property() currentView: string = '/';

  navigateTo(route: string) {
    const event = new CustomEvent('navigate-to', {
      bubbles: true,
      cancelable: true,
      detail: { route }
    });

    this.dispatchEvent(event);
  }

  render() {
    return html`
      <header>
        <div
          @click="${(evt: any) => { evt.preventDefault(); this.navigateTo('/'); }}"
          class="logo"
          type="button"
        >
          Credits
        </div>

        <ul class="menu">
          <li>
            <a href="#" @click="${(evt: any) => { evt.preventDefault(); this.navigateTo('/'); }}">
              Do applications
            </a>
          </li>
          <li>
            <a href="#" @click="${(evt: any) => { evt.preventDefault(); this.navigateTo('/applications'); }}">
              Applications list
            </a>
          </li>
        </ul>
      </header>
    `;
  }

  static styles = css`
    header {
      display: flex;
      padding: 1rem;
      background-color: #3f3d96;
      color: #fff;
      align-items: center;
      justify-content: space-between;
    }

    header .logo {
      font-weight: bold;
      cursor: pointer;
    }

    header .menu {
      margin: 0;
      padding: 1rem;
    }

    header .menu li {
      display: inline-block;
      padding: 0;
      margin: 0 1rem;
    }

    header .menu li a {
      color: #fff;
    }
  `;
}
