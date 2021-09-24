export default class Provider {
  provideInstance(_this: any) {
    _this.addEventListener('request-instance', (event: any) => {
      const key = event.detail;
      console.log(key);
    });
  }
}
