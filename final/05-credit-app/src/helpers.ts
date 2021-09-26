import { directive } from 'lit-html';

export const Helpers = (Base: any) => class extends Base {
  _resolved = new WeakSet();
  _instances = new Map();

  listenerInstance() {
    this.addEventListener('request-instance', (event: any) => {
      const key = event.detail.key;
      if (this._instances.has(key)) {
        event.detail.instance = this._instances.get(key);
        event.stopPropagation();
      }
    });
  }

  provideInstance(key: any, instance: any) {
    this._instances.set(key, instance);
  }

  requestInstance(key: any) {
    const event = new CustomEvent('request-instance', {
      detail: {key},
      bubbles: true,
      cancelable: true
    });

    this.dispatchEvent(event);

    return event.detail.instance;
  }

  lazyLoading = directive((importPromise: any, template: any) => {
    return (part: any) => {
      if(!this._resolved.has(part)) {
        importPromise.then(() => this._resolved.add(part));
      }
      part.setValue(template);
    }
  });
}
