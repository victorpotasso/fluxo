import _ from 'lodash';

function store(reducers, initialState = {}) {
  let state = Object.assign(
    initialState,
    reducers()
  );
  const listeners = [];

  return {
    subscribe,
    getState,
    dispatch,
  }

  /**
   * Public
   */

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducers(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    let unsubscribed = false;

    return function () {
      if (!unsubscribed) {
        subscribers.splice(subscribers.indexOf(listener), 1);
        unsubscribed = true;
        return true;
      }
      return false;
    };
  }
};

export default store;
