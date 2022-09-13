import { types } from "./actions";

export const pokeReducer = (state, action) => {
  console.log("Reducer", action.payload);
  switch (action) {
    case types.FETCH_SUCCESS:
      return { ...state, pokeList: action.payload };
      break;

    default:
      return state;
      break;
  }
};
