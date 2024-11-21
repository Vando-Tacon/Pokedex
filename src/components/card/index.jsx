import React from 'react';
import * as styleCard from "./styleCard";
import { FlexBox } from '../flexbox';

const Card = ({ image, name, id, types }) => {
  return (
    <styleCard.Container $gap="xs" $align="flex-start" $justify="flex-start" direction="column">
      <FlexBox $align="center" $justify="center" direction="row">
        <styleCard.PokemonText type={types}>#{id}</styleCard.PokemonText>
      </FlexBox>
      <styleCard.PokemonSpot type={types}>
        <styleCard.PokemonSprites src={image} />
      </styleCard.PokemonSpot>
      <FlexBox $align="center" $justify="flex-start" direction="row">
        <styleCard.PokemonText type={types}>{name}</styleCard.PokemonText>
      </FlexBox>
    </styleCard.Container>
  );
};

export default Card;
