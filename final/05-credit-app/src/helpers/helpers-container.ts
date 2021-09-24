import LazyLoading from "./lazy-loading";
import Routing from "./routing"

export const Helpers = (Base: any) => class extends Base {
  routing: Routing;
  lazyLoading;

  constructor() {
    super();
    this.routing = new Routing();
    this.lazyLoading = new LazyLoading().lazyLoading;
  }
}
