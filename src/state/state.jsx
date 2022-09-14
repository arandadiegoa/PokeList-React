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
  };

  const [state, dispatch] = useReducer(pokeReducer, initialState);

  const getPokemons = async () => {
    const res = await fetchPokemon();
    
    //TODO: revisar loading
    dispatch({ type: types.FETCH_LOADING, payload: { loadingList: true } });

    if (!res.results?.length) {
      dispatch({ type: types.FETCH_FAILED, payload: { errorList: true } });
    }
    //Si hay data, dispachamos el fetch success
    dispatch({
      type: types.FETCH_SUCCESS,
      payload: { pokeList: res.results, errorList: false },
    });
  };

  return (
    <PokeContext.Provider
      value={{
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
