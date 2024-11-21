import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function PokemonProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [abilitiesDetails, setAbilitiesDetails] = useState([]);

  useEffect(() => {
    
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        const data = response.data;
        setPokemon(data);

        
        const abilityPromises = data.abilities.map((ability) =>
          axios.get(ability.ability.url).then((res) => ({
            name: ability.ability.name,
            description: res.data.effect_entries.find(
              (entry) => entry.language.name === "en"
            )?.effect || "Descrição não disponível em português.",
          }))
        );

        Promise.all(abilityPromises)
          .then((abilities) => setAbilitiesDetails(abilities))
          .catch((error) => console.error("Erro ao buscar habilidades:", error));
      })
      .catch((error) => console.error("Erro ao buscar detalhes do Pokémon:", error));
  }, [id]);

  if (!pokemon) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>Voltar ao Início</BackButton>

      <Header>
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </Header>

      <Section>
        <h2>ID</h2>
        <p>{pokemon.id}</p>
      </Section>

      <Section>
        <h2>Tipos</h2>
        <p>{pokemon.types.map((type) => type.type.name).join(", ")}</p>
      </Section>

      <Section>
        <h2>Habilidades</h2>
        <ul>
          {abilitiesDetails.map((ability, index) => (
            <li key={index}>
              <strong>{ability.name}</strong>: {ability.description}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2>Movimentos</h2>
        <MovesList>
          {pokemon.moves.map((move, index) => (
            <MoveItem key={index}>{move.move.name}</MoveItem>
          ))}
        </MovesList>
      </Section>
    </Container>
  );
}


const Container = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: ${(props) => props.theme.font.colors.pure};
`;

const BackButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.font.colors.pure};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral[2]};
  }
`;

const Header = styled.div`
  margin-bottom: 20px;

  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    text-align: left;
  }
`;

const MovesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const MoveItem = styled.span`
  background-color: ${(props) => props.theme.colors.neutral[2]};
  color: ${(props) => props.theme.font.colors.pure};
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin: 5px;
`;

export default PokemonProfile;
