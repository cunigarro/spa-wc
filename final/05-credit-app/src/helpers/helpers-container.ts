import LazyLoading from "./lazy-loading";
import Requester from "./requester";
import Routing from "./routing"

export const Helpers = (Base: any) => class extends Base {
  routing: Routing;
  lazyLoading: LazyLoading;
  requester: Requester;

  constructor() {
    super();
    this.routing = new Routing();
    this.requester = new Requester;
    this.lazyLoading = new LazyLoading();
  }
}
