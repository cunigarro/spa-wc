import { property } from 'lit-element'

export const PendingContainer = (base: any) => class extends base {
  @property()
  __hasPendingChildren = false;

  @property()
  __pendingCount = 0;

  constructor() {
    super();
    this.addEventLister('pending-state', async (evt: Event) => {
      this.__hasPendingChildren = true;
      this.__pendingCount++;
      await evt.detail.promise;
      this.__pendingCount--;
      this.__hasPendingChildren = this.__pendingCount !== 0;
    });
  }
}
