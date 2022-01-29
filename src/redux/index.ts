import {bugAdded} from './actions';
import store from './store';
import {BUG_REMOVED} from './type';

const unsubscribe = store.subscribe(() => {
  console.log('Store Changed', store.getState());
});

store.dispatch(bugAdded('Bug 1'));

unsubscribe();

store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 3,
  },
});
console.log(store.getState());
