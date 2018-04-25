import { combineReducers } from './../../../lib';
import homeReducer from './home';
import testReducer from './test';

const reducers = [
  homeReducer,
  testReducer,
];

export default combineReducers({
  home: homeReducer,
  test: testReducer,
});;
