import * as types from '../types.js';

const homeMiddleware = ({ getState }) => next => (action) => {
  switch (action.type) {
    case types.ACTION_UPDATE:
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then((response) => {
          action.value = `${response.data[0]['first_name']} => ${action.value}`;
          next(action);
        });
      break;

    case types.ACTION_INCREMENT:
      const returnValue = next(action);
      console.log('incrementing...', getState().home.counter.count)
      return returnValue;

    default: return next(action);
  }
};

export default homeMiddleware;
