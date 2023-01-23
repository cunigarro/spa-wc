export const Requester = (Base: any) => class extends Base {
  requestInstance(key: any) {
    const event = new CustomEvent('request-instance', {
      detail: { key },
      bubbles: true,
      cancelable: true
    });

    this.dispatchEvent(event);

    return (event.detail as { key: {}, instance?: {} }).instance;
  }
}
