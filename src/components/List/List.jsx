import { useContext, useEffect } from 'react';
import { PokeContext } from '../../state/context';

const List = () => {
  const { getPokemons, pokeList } = useContext(PokeContext);

  useEffect(() => {
    getPokemons();
  }, []);

  return <div>{JSON.stringify(pokeList)}</div>;
};

export default List;
