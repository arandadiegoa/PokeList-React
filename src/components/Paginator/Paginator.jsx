import { useContext } from 'react';
import { PokeContext } from '../../state/context';

export const Paginator = () => {
  const { nextPage, previousPage, getPokemons, pokeList } = useContext(PokeContext);

  return (
    <div>
      {previousPage && (
        <button
          onClick={() =>
            getPokemons(previousPage /* esto es una url que pasa como arg */)
          }
        >
          Previous
        </button>
      )}
      {nextPage && (
        <button
          onClick={() => getPokemons(nextPage /* esto es una url que pasa como arg */)}
        >
          Next
        </button>
      )}
    </div>
  );
};
