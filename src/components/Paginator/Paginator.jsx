import { useContext } from "react";
import { PokeContext } from "../../state/context";


export const Paginator = () => {
  const { nextPage, previousPage, getPokemons } = useContext(PokeContext);

  return (
    <div>
      {previousPage && (
        <Button onClick={() => getPokemons(previousPage)}>Previous</Button>
      )}
      {nextPage && <Button onClick={() => getPokemons(nextPage)}>Next</Button>}
    </div>
  );
};
