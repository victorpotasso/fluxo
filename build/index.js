'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMiddleware = exports.combineReducers = exports.createStore = exports.connect = undefined;

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = require('./combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.applyMiddleware = _applyMiddleware2.default;