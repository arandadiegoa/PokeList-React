import { useContext, useEffect } from "react";
import { PokeContext } from "../../state/context";
import { Card } from "../Card/Card";

const List = () => {
  const { getPokemons, pokeList, errorList, loadingList } =
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
          <Card key={poke.name} name={poke.name} url={poke.url} />
        ))}
    </div>
  );
};

export default List;
