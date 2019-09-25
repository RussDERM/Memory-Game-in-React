import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import tileData from "../../tileData.json";
import Tile from "../tile/tile";
import "./style.css";

class GameContainerComponent extends React.Component {
  state = { tileData };

  render() {
    const tiles = this.state.tileData;
    return (
      <Container>
        {tiles.map(tileData => (
          <Tile name={tileData.name} />
        ))}
      </Container>
    );
  }
}

export default GameContainerComponent;
