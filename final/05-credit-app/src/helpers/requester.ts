export default class Requester {
  requestInstanceKey(data: any, _this: any) {
    const event = new CustomEvent('request-instance', {
      detail: data,
      bubbles: true,
      cancelable: true
    });

    _this.dispatchEvent(event);
  }
}
