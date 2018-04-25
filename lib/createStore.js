// import store from './old_store';
import store from './store';

function createStore(args) {
  const s = store(args);

  if (!window.__fluxo__) window.__fluxo__ = {};
  window.__fluxo__.store = s;

  return s;
}

export default createStore;
