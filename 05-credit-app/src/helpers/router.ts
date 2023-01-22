export function onNavigate(pathname: string, currentView: any): any {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  currentView = pathname;
}
