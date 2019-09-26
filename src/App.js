import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// *Components
import Container from "react-bootstrap/Container";
import NavbarComponent from "./components/nav/nav";
import JumbotronComponent from "./components/jumboTron/jumbotron";
import GameContainerComponent from "./components/gameContainer/gamecontainer";

function App() {
  return (
    <Container>
      <NavbarComponent />
      <JumbotronComponent />
      <GameContainerComponent />
    </Container>
  );
}

export default App;
