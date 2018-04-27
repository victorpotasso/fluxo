# fluxo

A Vanilla FLUX library.

## Install from npm
```npm install --save @victorpotasso/fluxo```

## Create store

```
import { createStore, applyMiddleware } from '@victorpotasso/fluxo';
import reducers from './data/reducers';
import middlewares from './data/middlewares';

const store = createStore({
  reducers,
  middlewares: applyMiddleware(...middlewares),
  initialState: {},
});

export default store;
```

## Create a container connecting the component to the store
```
import { connect } from '@victorpotasso/fluxo';
import * as selectors from './../data/selectors';
import * as actions from './../data/actions';

class SampleComponent {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.title = this.el.querySelector('.value-sample');
    this.count = this.el.querySelector('.value-count');
    this.button = this.el.querySelector('.btn-sample');

    this.button.addEventListener('click', this.onClick.bind(this));
    this.render();
  }

  onClick() {
    if (this.props.update) {
      const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10).toUpperCase();
      this.props.update(randomString);
      this.props.increment();
    }
  }

  render() {
    this.title.textContent = this.props.value1;
    this.count.textContent = this.props.value2;
  }
}

const mapStateToProps = state => ({
  value1: `Sample: ${selectors.sample(state)}`,
  value2: selectors.count(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: value =>
    dispatch(actions.update(value)),
  increment: () =>
    dispatch(actions.increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
```

## Middleware sample
```
const sampleMiddleware = store => next => action => {
  return next(action);
};

export default sampleMiddleware;
```

## Reducer sample
```
const initalState = {}
const homeReducer = (state = initalState, action) => {
  return state;
}

export default homeReducer;
```

## Selector sample
```
export const test = (state) => state.test;
export const foo = (state) => test(state).foo; // state.test.foo
export const bar = (state) => test(state).bar; // state.test.bar
```

-----
## Running the example

Install the dependences

```npm install```

Start the project

```npm start```

-----

Victor Potasso <victorpotasso@gmail.com>
