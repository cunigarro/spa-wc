export default class Requester {
  requestInstanceKey(key) {
    const event = new CustomEvent('request-instance', {
      detail: {key},
      bubbles: true,
      cancelable: true
    });

    this.dispatchEvent(event);

    return event.detail.instance;
  }
}
