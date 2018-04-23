import * as types from './types';

export const update = (value) => ({
  type: types.ACTION_UPDATE,
  value,
});