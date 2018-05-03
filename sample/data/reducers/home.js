import * as types from './../types';

const initalState = {
  sample: null,
  counter: {
    count: 0,
  }
}

function homeReducer(state = initalState, action) {
  switch (action.type) {
    case types.ACTION_UPDATE:
      return Object.assign(
        {},
        state,
        {
          sample: action.value,
        }
      );
    case types.ACTION_INCREMENT:
      return Object.assign(
        {},
        state,
        {
          counter: {
            count: state.counter.count + 1,
          }
        }
      );
    default: return state;
  }
}

export default homeReducer;
