// import store from './old_store';
import store from './store';

function createStore({ reducers, middlewares, initialState }) {
  const s = middlewares(store)(reducers, initialState);

  window.__fluxo__ = s;
  return s;
}

export default createStore;
