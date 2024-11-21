import React from "react";

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div
      onClick={() => onClick(pokemon)}
      style={{
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      className="pokemon-card"
    >
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon-details">
        <h3>#{pokemon.id}</h3>
        <h4>{pokemon.name}</h4>
      </div>
    </div>
  );
};

export default PokemonCard;
