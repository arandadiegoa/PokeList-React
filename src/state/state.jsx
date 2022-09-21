import { useReducer } from "react";
import { fetchPokemons } from "../services/pokemons.svc";
import { types } from "./actions";
import { PokeContext } from "./context";
import { pokeReducer } from "./reducer";

const setPokemons = (data) => {
  return {
    type: types.FETCH_SUCCESS,
    payload: {
      pokeList: data.results,
      errorList: false,
      loadingList: false,
      nextPage: data.next,
      previousPage: data.previous,
    },
  }
}

export const PokeState = ({ children }) => {
  const initialState = {
    pokeList: [],
    loadingList: false,
    errorList: false,
    nextPage: "",
    previousPage: "",
  };

  const [state, dispatch] = useReducer(pokeReducer, initialState);

  //llamando a la API, y le paso como parametro la nueva url
  const getPokemons = async (url) => {
    //poner el loding en true antes de que haga la llamada al await,
    //recién cuando se cumpla la promesa, loading va a ser false.
    dispatch({ type: types.FETCH_LOADING, payload: { loadingList: true } });

    //Hago el destructuring, de lo que necesito, data y error. Y tengo que pasarle a fetch, la nueva url
    const { error, data } = await fetchPokemons(url);

    if (!error)
      dispatch(setPokemons(data));

    if (error)
      dispatch({
        type: types.FETCH_FAILED,
        payload: { errorList: true, loadingList: false },
      });
  };

  return (
    <PokeContext.Provider
      value={{
        nextPage: state.nextPage,
        previousPage: state.previousPage,
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
