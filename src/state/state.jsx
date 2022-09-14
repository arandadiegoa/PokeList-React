import { useReducer } from "react";
import { fetchPokemon } from "../services/pokemons.svc";
import { types } from "./actions";
import { PokeContext } from "./context";
import { pokeReducer } from "./reducer";

export const PokeState = ({ children }) => {
  const initialState = {
    pokeList: [],
    loadingList: false,
    errorList: false,
    nextPage: false,
  };

  const [state, dispatch] = useReducer(pokeReducer, initialState);

  const getPokemons = async (url) => {
    const res = await fetchPokemon(url);
    console.log(res);
    //TODO: revisar loading
    dispatch({ type: types.FETCH_LOADING, payload: { loadingList: true } });

    if (!res.results?.length) {
      dispatch({ type: types.FETCH_FAILED, payload: { errorList: true } });
    }
    //Si hay data, dispachamos el fetch success
    dispatch({
      type: types.FETCH_SUCCESS,
      payload: {
        pokeList: res.results,
        errorList: false,
        loading: false,
        nextPage: res.next,
      },
    });
  };

  return (
    <PokeContext.Provider
      value={{
        nextPage: state.nextPage,
        pokeList: state.pokeList,
        loadingList: state.loadingList,
        errorList: state.errorList,
        getPokemons,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
