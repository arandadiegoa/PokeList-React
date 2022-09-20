import { useContext } from "react";
import { PokeContext } from "../../state/context";
import { Button } from "../../Styles/Styles.styled";

export const Paginator = () => {
  const { nextPage, previousPage, getPokemons } = useContext(PokeContext);

  return (
    <div>
      {previousPage && 
        <Button onClick={() => getPokemons(previousPage)}>Previous</Button>
      }
      {nextPage && <Button onClick={() => getPokemons(nextPage)}>Next</Button>}
    </div>
  );
};
