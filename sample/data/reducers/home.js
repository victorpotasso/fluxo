import * as types from './../types';

const initalState = {
  sample: 'initial'
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
    default: return state;
  }
}

export default homeReducer;
