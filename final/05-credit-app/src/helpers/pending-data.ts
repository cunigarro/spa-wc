export const PendingContainer = (base: any) => class extends base {
  // @property()
  __hasPendingChildren = false;

  // @property()
  __pendingCount = 0;

  constructor() {
    super();
    this.addEventListener('pending-state', async (evt: any) => {
      this.__hasPendingChildren = true;
      this.__pendingCount++;
      await evt.detail.promise;
      this.__pendingCount--;
      this.__hasPendingChildren = this.__pendingCount !== 0;
    });
  }
}
