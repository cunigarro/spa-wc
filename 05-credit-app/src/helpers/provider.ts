export const Provider = (Base) => class extends Base{
  _instances = new Map();

  constructor() {
    super();

    this.addEventListener('request-instance', event => {
      const key = event.detail.key;
      if(this._instances.has(key)) {
        event.detail.instance = this._instances.get(key);
        event.stopPropagation();
      }
    });
  }

  provideInstance(key, instance) {
    this._instances.set(key, instance);
  }
}
