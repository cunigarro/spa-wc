export default class Routing {
  _hearRouting(currentView: string) {
    window.onpopstate = () => {
      this._onNavigate(window.location.pathname, currentView);
    }
    this._onNavigate(window.location.pathname, currentView);
  }

  _onNavigate(pathname: string, currentView: string): any {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    );
    currentView = pathname;
  }

  _renderCurrentView(currentView: string) {

  }
}
