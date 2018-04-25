import _ from 'lodash';

function store({ reducers, middlewares, initialState = {} }) {
  const state = Object.assign(
    initialState,
    reducers()
  );
  const subscribers = {};

  return {
    subscribe,
    unsubscribe,
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
          if (_.has(subscribers, arrayKey)) {
            _.get(subscribers, arrayKey).call(this, v);
          }
        }
      });
    } else if (_.isObject(value)) {
      for (let key in value) {
        _deepUpdate(value[key], `${lastKey ? `${lastKey}.` : ''}${key}`);
      }
    } else if (_.get(state, lastKey) !== value) {
      _.set(state, lastKey, value);

      if (_.has(subscribers, lastKey)) {
        _.get(subscribers, lastKey).call(this, (_.get(state, lastKey)));
      }
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
  }

  function subscribe(key, callback) {
    subscribers[key] = callback;
    return this;
  }

  function unsubscribe(key) {
    delete subscribers[key];
  }
};

export default store;
