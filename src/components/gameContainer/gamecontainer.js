import React from "react";
import Container from "react-bootstrap/Container";
import tileData from "../../tileData.json";
import Tile from "../tile/tile";
import "./style.css";

// *Color Generator
import randomColor from "randomcolor";
// const randomColor = require("randomcolor"); // import the script
const color = randomColor();

class GameContainerComponent extends React.Component {
  state = { tileData };

  render() {
    const tiles = this.state.tileData;
    return (
      <Container className="gameContainer">
        {tiles.map(tiles => (
          <Tile icon={tiles.icon} color={color} />
        ))}
      </Container>
    );
  }
}

export default GameContainerComponent;
