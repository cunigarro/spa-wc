import { directive } from 'lit-html';

export default class LazyLoading {
  _resolved = new WeakSet();

  lazyLoading = directive((importPromise: any, template: any) => {
    return (part: any) => {
      if(!this._resolved.has(part)) {
        importPromise.then(() => this._resolved.add(part));
      }
      part.setValue(template);
    }
  });
}
