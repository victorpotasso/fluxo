import store from './store';

function createStore(reducers, middlewares) {
  const s = store(reducers, middlewares);

  if (!window.__fluxo__) window.__fluxo__ = {};
  window.__fluxo__.store = s;

  return s;
}

export default createStore;
