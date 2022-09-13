import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../../state/context";

const List = () => {
  const { getPokemons, pokeList } = useContext(PokeContext);

  useEffect(() => {
    getPokemons();
  }, []);

  console.log("List", pokeList);

  return <></>;
};

export default List;
