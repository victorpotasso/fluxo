import * as types from './../types';

const initalState = {
  sample: 'initial',
  count: 0,
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
          count: state.count + 1,
        }
      );
    default: return state;
  }
}

export default homeReducer;
