import store from './store';
import { bugAdded, bugRemoved } from './actions';

const appContainer = document.querySelector('#appContainer');
const addBugsBtn = document.querySelector('#addBugsBtn');
const removeBugsBtn = document.querySelector('#removeBugsBtn');

store.subscribe(() => {
  appContainer.innerHTML = JSON.stringify(store.getState());
});

store.dispatch(bugAdded('Bug 1'));

addBugsBtn.addEventListener('click', () => {
  store.dispatch(bugAdded('Bug 2'));
});

removeBugsBtn.addEventListener('click', () => {
  const lastBug = store.getState()[store.getState().length - 1];
  store.dispatch(bugRemoved(lastBug.id));
})

console.log(store.getState());
