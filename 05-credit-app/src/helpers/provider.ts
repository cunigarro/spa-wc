export const Provider = (Base) => class extends Base {
  _instances = new Map();

  constructor() {
    super();

    this.addEventListener('request-instance', (event: any) => {
      const key = event.detail.key;

      if(this._instances.has(key)) {
        event.detail.instance = this._instances.get(key);
        event.stopPropagation();
      }
    });
  }

  provideInstance(key: any, instance: any) {
    this._instances.set(key, instance);
  }
}
