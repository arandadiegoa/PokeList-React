import { useReducer } from 'react';
import { fetchPokemon } from '../services/pokemons.svc';
import { types } from './actions';
import { PokeContext } from './context';
import { pokeReducer } from './reducer';

export const PokeState = ({ children }) => {
  const initialState = {
    pokeList: [],
    loadingList: false,
    errorList: false,
  };

  const [state, dispatch] = useReducer(pokeReducer, initialState);

  const getPokemons = async () => {
    dispatch({ type: types.FETCH_LOADING, payload: { loadingList: true } });

    const { error, data } = await fetchPokemon();

    if (!error)
      dispatch({
        type: types.FETCH_SUCCESS,
        payload: { pokeList: data.results, errorList: false, loadingList: false },
      });

    if (error)
      dispatch({
        type: types.FETCH_FAILED,
        payload: { errorList: true, loadingList: false },
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
