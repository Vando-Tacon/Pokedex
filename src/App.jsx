import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import PokemonProfile from "./components/PokemonProfile";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./themes";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={<Home isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />}
          />
          <Route path="/pokemon/:id" element={<PokemonProfile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.font.colors.pure};
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export default App;
