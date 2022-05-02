import * as types from './types';

export const update = (value) => ({
    type: types.ACTION_UPDATE,
    value,
});
export const increment = () => ({
    type: types.ACTION_INCREMENT,
});
