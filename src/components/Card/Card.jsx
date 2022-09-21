import { useEffect, useState } from "react";
import { Button, Img, Text, Title } from "../../Styles/Styles.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Card = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(undefined);

  //Una funcion que retorna otra funcion
  const navigate = useNavigate();

  useEffect(() => {
    /* 
      fetch(url)
      .then((res) => res.json())
    */
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((error) => alert("Hubo un error", error));
  }, [url]);

  const handleClick = () => {
    // Navegar hacia /description pero pasarle como data pokemon

    // description/pokemon.id
    navigate("/description/" + pokemon.id, {
      state: {
        pokemon,
      },
    });
  };

  return (
    <div className="container mt-5">
      <Title>{name}</Title>
      <Img src={pokemon?.sprites?.front_default} alt=""></Img>
      <Text className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Text>
      <Button onClick={handleClick}>Descripcion</Button>
    </div>
  );
};
