export default class Provider {
  _instances = new Map();

  constructor() {
    if (this.addEventListener !== undefined) {
      this.addEventListener('request-instance', (event: Event) => {
        const key = event.detail.key;
        if(this._instances.has(key)) {
          event.detail.instance = this._instances.get(key);
          event.stopPropagation();
        }
      });
    }
  }

  provideInstance(key, instance) {
    this._instances.set(key, instance);
  }
}
