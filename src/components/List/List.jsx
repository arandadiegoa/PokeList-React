import { useContext, useEffect } from "react";
import { PokeContext } from "../../state/context";

const List = () => {
  const { getPokemons, pokeList, errorList, loadingList, nextPage } =
    useContext(PokeContext);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      {loadingList && <div>Loading</div>}
      {errorList && <div>Hubo un error</div>}
      {pokeList?.length > 0 &&
        pokeList.map((poke) => (
          <div key={poke.name}>
            {poke.name}-{poke.url}
          </div>
        ))}
      {nextPage && <button onClick={() => getPokemons(nextPage)}>Next</button>}
    </div>
  );
};

export default List;
