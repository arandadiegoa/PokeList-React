import { Img, Li } from "../Styles/Styles.styled";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getInfoPokemon } from "../services/pokemons.svc";
import { useEffect, useState } from "react";

const Description = () => {
    // Si el usuario entro desde el listado
    // nos deberia traer el pokemon en location.state.pokemon
  const location = useLocation();
  const [pokemon, setPokemon] = useState(location?.state?.pokemon);

  // Obtener parametro de ruta :id (declarado en main.jsx)
  const { id } = useParams();

  useEffect(() => {
    // Si pokemon es null, entonces significa que el usuario entro directamente
    // a /description/{id}
    // por lo tanto cargamos la info desde el backend
    if (pokemon == null) {
      getInfoPokemon(id).then((res) => {
        setPokemon(res.data);
      });
    }
  }, []);

  return (
    <div>
      <Img
        src={pokemon?.sprites?.back_default}
        alt=""
        width="100"
        height="100"
      ></Img>
      <ul className="list-group list-group-flush">
        <Li className="list-group-item">ID {pokemon?.id}</Li>
        <Li className="list-group-item">Weight:{pokemon?.weight}</Li>
        <Li className="list-group-item">Height:{pokemon?.height}</Li>
        <Li className="list-group-item">
          Experience:{pokemon?.base_experience}
        </Li>
      </ul>
    </div>
  );
};

export default Description;
