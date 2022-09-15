import { useContext } from "react";
import { PokeContext } from "../../state/context";

export const Paginator = () => {
  const { nextPage, previousPage, getPokemons, pokeList } =
    useContext(PokeContext);
  console.log("Paginator", nextPage);
  return (
    <div>
      {previousPage && (
        <button onClick={() => getPokemons(previousPage)}>Previous</button>
      )}
      {nextPage && <button onClick={() => getPokemons(nextPage)}>Next</button>}
    </div>
  );
};
