'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function store({ reducers, middlewares, initialState = {} }) {
  const state = Object.assign(initialState, reducers());
  const listeners = [];

  return {
    subscribe,
    getState,
    dispatch

    /**
     * Private
     */

  };function _deepUpdate(value, lastKey = '') {
    if (_lodash2.default.isArray(value)) {
      value.forEach((v, i) => {
        if (v !== _lodash2.default.get(state, lastKey)[i]) {
          const arrayKey = `${lastKey}[${i}]`;
          _lodash2.default.set(state, arrayKey, v);
        }
      });
    } else if (_lodash2.default.isObject(value)) {
      for (let key in value) {
        _deepUpdate(value[key], `${lastKey ? `${lastKey}.` : ''}${key}`);
      }
    } else if (_lodash2.default.get(state, lastKey) !== value) {
      _lodash2.default.set(state, lastKey, value);
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

exports.default = store;