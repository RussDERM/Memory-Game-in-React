import React from "react";
import Container from "react-bootstrap/Container";
import tiles from "../../tiles.json";
import Tile from "../tile/tile";
import "./gameContainer.css";

// *Color Generator
import randomColor from "randomcolor";
// const randomColor = require("randomcolor"); // import the script
const color = randomColor();

class GameContainerComponent extends React.Component {
  state = { tiles, score: 0, highscore: 0 };

  // *Logic for click event
  handleClick = key => {
    console.log("click! " + key);
    // Find key of clicked item and iterate count
    this.state.tiles.find((tile, i) => {
      if (tile.id === key) {
        if (tiles[i].count === 0) {
          // if count = 0, iterate, else game over
          tiles[i].count = tiles[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {});
          // Re-order tiles for next turn
          this.state.tiles.sort(() => Math.random() - 0.5);
          return true;
        } else {
          // call gameOver function
          this.gameOver();
          console.log("game over");
        }
      }
      // return true;
    });
  };

  //!GAME OVER
  gameOver = () => {
    // * Check to see if the high-score has been surpassed!
    // set high score to value of score if current score is higher on gameOver()
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    // reset count on all tiles
    this.state.tiles.forEach(photo => {
      photo.count = 0;
    });
    alert("Game Over!");
    // set game score back to 0
    this.setState({ score: 0 });
    return true;
  };

  render() {
    const tiles = this.state.tiles;
    return (
      <>
        <Container className="score">
          <div className="scoreTile">SCORE: {this.state.score}</div>
          <div className="scoreTile">HIGHSCORE: {this.state.highscore}</div>
        </Container>
        <Container className="gameContainer">
          {tiles.map(tiles => (
            <Tile
              key={tiles.id}
              id={tiles.id}
              icon={tiles.icon}
              count={tiles.count}
              color={color}
              // function
              handleClick={this.handleClick}
            />
          ))}
        </Container>
      </>
    );
  }
}

export default GameContainerComponent;
