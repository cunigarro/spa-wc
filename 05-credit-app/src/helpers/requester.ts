export const Requester = (Base) => class extends Base {
  requestInstance(key) {
    const event = new CustomEvent('request-instance', {
      detail: {key},
      bubbles: true,
      cancelable: true
    });

    this.dispatchEvent(event);

    return event.detail.instance;
  }
}
