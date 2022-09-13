import { types } from './actions';

export const pokeReducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return { ...state, pokeList: action.payload };
    default:
      return state;
  }
};
