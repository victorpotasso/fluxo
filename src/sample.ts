import store from './store';
// import Home from './containers/home';
import * as actions from './data/actions';

// fake loading
setTimeout(() => {
    console.log('>>>', store.getState().home.sample);
    store.dispatch(actions.update('first update'));
    store.subscribe(() => {
        console.log('<<<', store.getState().home.sample);
    });

    // const home = new Home('section#home-view');
    // console.log({ home });
}, 2000);
