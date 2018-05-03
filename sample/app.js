import store from './store';
import Home from './containers/home';
import * as actions from './data/actions';

store.dispatch(actions.update('initial data'));

const home = new Home('section#home-view');
