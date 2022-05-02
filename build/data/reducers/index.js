import { combineReducers } from '../../../lib/index.js';
import homeReducer from './home.js';
import testReducer from './test.js';

const reducers = [
  homeReducer,
  testReducer,
];

export default combineReducers({
  home: homeReducer,
  test: testReducer,
});;
