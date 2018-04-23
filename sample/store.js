import { createStore } from './../index';
import reducers from './data/reducers';
import middlewares from './data/middlewares';

const store = createStore(reducers, middlewares);

window.__fluxo__.store = store;
export default store;