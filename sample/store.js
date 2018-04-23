import createStore from './../lib/createStore';
import reducers from './data/reducers';
import middlewares from './data/middlewares';

const store = createStore(reducers, middlewares);

export default store;