import { createStore, applyMiddleware } from './../lib';
import reducers from './data/reducers';
import middlewares from './data/middlewares';

const store = createStore({
  reducers,
  middlewares: applyMiddleware(...middlewares),
  initialState: {
    version: '1.0'
  },
});

export default store;