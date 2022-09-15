import { useEffect, useState } from 'react';
import { Img } from './Card.styled';

export const Card = ({ name, url }) => {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [url]);

  return (
    <div>
      <Img src={pokemon?.sprites?.front_default} alt=''></Img>
      <h1>{name}</h1>
    </div>
  );
};
