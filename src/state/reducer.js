import { types } from "./actions";

export const pokeReducer = (state, action) => {
  console.log("Reducer", action);
  switch (action.type) {
    case types.FETCH_LOADING:
      return {
        ...state,
        //loadingList: action.payload.loadingList,
        loadingList: true,
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        loadingList: false,
        pokeList: action.payload.pokeList,
        errorList: action.payload.errorList,
      };
    case types.FETCH_FAILED:
      return {
        ...state,
        errorList: action.payload.errorList,
        loadingList: false,
      };
    default:
      return state;
  }
};
