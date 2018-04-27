'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore({ reducers, middlewares, initialState }) {
  const s = middlewares(_store2.default)(reducers, initialState);

  window.__fluxo__ = s;
  return s;
} // import store from './old_store';
exports.default = createStore;