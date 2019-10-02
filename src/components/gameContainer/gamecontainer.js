import React from "react";
import Container from "react-bootstrap/Container";
import tileData from "../../tileData.json";
import Tile from "../tile/tile";
import "./gameContainer.css";

// *Color Generator
import randomColor from "randomcolor";
// const randomColor = require("randomcolor"); // import the script
const color = randomColor();

class GameContainerComponent extends React.Component {
  state = { tileData, score: 0, highscore: 0 };

  // *Logic for click event
  handleClick = id => {
    console.log("click! " + id);
    // Find id of clicked item and iterate count
    this.state.tileData.find((clicked, i) => {
      if (clicked.id === id) {
        // if count = 0, iterate, else game over
        if (tileData[i].count === 0) {
          tileData[i].count = tileData[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          // Re-order tiles for next turn
          this.state.tileData.sort(() => Math.random() - 0.5);
          return true;
        } else {
          // call gameOver function
          this.gameOver();
        }
      }
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
    this.state.photos.forEach(photo => {
      photo.count = 0;
    });
  };

  // handleClick = id => {
  //   // this.state.tileData.find((o, i) => {
  //   //   if (o.id === id) {
  //   //     console.log("match!");
  //   //   } else {
  //   //     console.log("no match!");
  //   //   }
  //   // });
  //   console.log("THIS TILE'S ID IS: " + id);
  // };

  render() {
    const tiles = this.state.tileData;
    return (
      <Container className="gameContainer">
        {tiles.map(tiles => (
          <Tile
            id={tiles.id}
            icon={tiles.icon}
            count={tiles.count}
            color={color}
            // function
            handleClick={this.handleClick}
          />
        ))}
      </Container>
    );
  }
}

export default GameContainerComponent;
