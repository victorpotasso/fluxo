import _ from 'lodash';

function store({ reducers, middlewares, initialState = {} }) {
  const state = Object.assign(
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
   * Private
   */

  function _deepUpdate(value, lastKey = '') {
    if (_.isArray(value)) {
      value.forEach((v, i) => {
        if (v !== _.get(state, lastKey)[i]) {
          const arrayKey = `${lastKey}[${i}]`;
          _.set(state, arrayKey, v);
        }
      });
    } else if (_.isObject(value)) {
      for (let key in value) {
        _deepUpdate(value[key], `${lastKey ? `${lastKey}.` : ''}${key}`);
      }
    } else if (_.get(state, lastKey) !== value) {
      _.set(state, lastKey, value);
    }
  }

  /**
   * Public
   */

  function getState() {
    return state;
  }

  function dispatch(action) {
    _deepUpdate(reducers(state, action));
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }
};

export default store;
