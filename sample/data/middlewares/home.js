import * as types from './../types';

const homeMiddleware = ({ getState }) => next => (action) => {
  switch (action.type) {
    case types.ACTION_UPDATE:
      action.value = `VALUE FROM MIDDLEWARE => ${action.value}`;
      return next(action);

    case types.ACTION_INCREMENT:
      const returnValue = next(action);
      console.log('incrementing...', getState().home.counter.count)
      return returnValue;

    default: return next(action);
  }
};

export default homeMiddleware;
