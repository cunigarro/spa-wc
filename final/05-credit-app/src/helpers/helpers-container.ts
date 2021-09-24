import LazyLoading from "./lazy-loading";
import Provider from "./provider";
import Requester from "./requester";
import Routing from "./routing"

export const Helpers = (Base: any) => class extends Base {
  routing: Routing;
  lazyLoading: LazyLoading;
  requester: Requester;
  provider: Provider;

  constructor() {
    super();
    this.routing = new Routing();
    this.requester = new Requester;
    this.lazyLoading = new LazyLoading();
    this.provider = new Provider();
  }
}
