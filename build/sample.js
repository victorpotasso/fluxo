import store from './store.js';
// import Home from './containers/home.js';
import * as actions from './data/actions.js';

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
