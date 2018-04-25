import createStore from './../lib/createStore';
import reducers from './data/reducers';
import middlewares from './data/middlewares';

const store = createStore({
  reducers,
  middlewares,
  initialState: {
    version: '1.0'
  },
});

export default store;