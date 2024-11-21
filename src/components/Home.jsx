import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "./card";

function Home({ isDarkTheme, toggleTheme }) {
  const [pokemons, setPokemons] = useState({});
  const [limit, setLimit] = useState(50);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    for (let id = 1; id <= limit; id++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((info) => {
          const pokemon = info.data;
          setPokemons((prevPokemons) => ({ ...prevPokemons, [id]: pokemon }));
        })
        .catch((error) => console.error("Erro ao buscar Pokémon:", error));
    }
  }, [limit]);

  const filteredPokemons = Object.values(pokemons).filter(
    ({ id, name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      id.toString().includes(searchTerm)
  );

  return (
    <Container>
      <ToggleThemeButton onClick={toggleTheme}>
        {isDarkTheme ? "🌞" : "🌜"}
      </ToggleThemeButton>
      <SearchInput
        type="text"
        placeholder="Buscar Pokémon por nome ou ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1800px",
          margin: "0 auto",
          padding: 0,
          listStyle: "none",
        }}
      >
        {filteredPokemons.map(({ id, name, types }) => (
          <CardContainer key={id} onClick={() => navigate(`/pokemon/${id}`)}>
            <Card
              id={id}
              name={name}
              types={types.map((type) => type.type.name)}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            />
          </CardContainer>
        ))}
      </ul>
      <button
        onClick={() => setLimit((prevLimit) => prevLimit + 50)}
        style={{
          margin: "20px auto",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Carregar Mais
      </button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

const CardContainer = styled.li`
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.11);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  margin: 30px;
  margin-bottom: 30px;
  width: 80%;
  max-width: 400px;
  border-radius: 25px;
  border: 1px solid ${(props) => props.theme.colors.neutral[2]};
  background-color: ${(props) => props.theme.colors.neutral[1]};
  color: ${(props) => props.theme.font.colors.pure};
  outline: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &::placeholder {
    color: ${(props) => props.theme.font.colors[2]};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0px 0px 5px ${(props) => props.theme.colors.primary};
  }
`;

const ToggleThemeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.font.colors.pure};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Home;

