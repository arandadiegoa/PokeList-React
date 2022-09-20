import { useEffect, useState } from "react";
import { Button, Img, Text, Title } from "../../Styles/Styles.styled";

export const Card = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(undefined);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((error) => alert("Hubo un error", error));
  }, [url]);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container">
      <Title>{name}</Title>
      <Img src={pokemon?.sprites?.front_default} alt=""></Img>
      <Text className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Text>
      {showImage && (
        <div>
          <Img
            src={pokemon?.sprites?.back_default}
            alt=""
            width="100"
            height="100"
          ></Img>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ID {pokemon.id}</li>
            <li className="list-group-item">Weight:{pokemon.weight}</li>
            <li className="list-group-item">Height:{pokemon.height}</li>
            <li className="list-group-item">
              Experience:{pokemon.base_experience}
            </li>
          </ul>
        </div>
      )}
      <Button onClick={() => handleClick(pokemon.id)}>Descripcion</Button>
    </div>
  );
};
