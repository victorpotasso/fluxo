'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(args) {
  const s = (0, _store2.default)(args);

  if (!window.__fluxo__) window.__fluxo__ = {};
  window.__fluxo__.store = s;

  return s;
} // import store from './old_store';
exports.default = createStore;