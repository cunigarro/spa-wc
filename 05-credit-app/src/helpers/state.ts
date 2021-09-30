import { Requester } from "./requester";

export const Connect = (store) => (Base) => class extends Requester(Base) {
  props;
  _unsubscribeFromStore;

  connectedCallback() {
    super.connectedCallback();
    const store = this.requestInstance('store');
    this._unsubscribeFromStore = store.subscribe(() => {
      const newProps = this.mapStateToProps(store.getState());
      if(!shallowEqual(this.props, newProps)) {
        this.props = newProps;
        this.requestUpdate();
      }
    });
  }

  disconnectedCallback() {
    this._unsubscribeFromStore();
    super.disconnectedCallback();
  }
}
