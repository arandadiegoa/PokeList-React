import { types } from "./actions";

export const pokeReducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_LOADING:
      return {
        ...state,
        loadingList: action.payload.loadingList,
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        loadingList: action.payload.loadingList,
        pokeList: action.payload.pokeList,
        errorList: action.payload.errorList,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage,
      };
    case types.FETCH_FAILED:
      return {
        ...state,
        errorList: action.payload.errorList,
        loadingList: action.payload.loadingList,
        pokeList: [],
      };
    default:
      return state;
  }
};
