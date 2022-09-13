import { useReducer } from 'react';
import { fetchPokemon } from '../services/pokemons.svc';
import { types } from './actions';
import { PokeContext } from './context';
import { pokeReducer } from './reducer';

export const PokeState = ({ children }) => {
  const initialState = {
    pokeList: [],
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(pokeReducer, initialState);

  const getPokemons = async () => {
    const res = await fetchPokemon();
    dispatch({ type: types.FETCH_SUCCESS, payload: res.results });
  };

  return (
    <PokeContext.Provider
      value={{
        pokeList: state.pokeList,
        loading: state.loading,
        error: state.error,
        getPokemons,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
