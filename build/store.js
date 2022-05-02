import { createStore, applyMiddleware } from '../lib/index.js';
import reducers from './data/reducers/index.js';
import middlewares from './data/middlewares/index.js';

const store = createStore({
  reducers,
  middlewares: applyMiddleware(...middlewares),
  initialState: {
    version: '1.0'
  },
});

export default store;