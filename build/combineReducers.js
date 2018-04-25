"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function combineReducers(reducers) {
  return (state = {}, action = {}) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}

exports.default = combineReducers;