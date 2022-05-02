import compose from 'lodash/fp/compose';

function applyMiddleware(...middlewares) {
  return (next) =>
    (reducer, initialState) => {
      const store = next(reducer, initialState);
      const chain = middlewares.map(middleware => middleware(store));
      const dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
}

export default applyMiddleware;
