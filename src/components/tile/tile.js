import React from "react";
import "./style.css";

// * Random Color
var randomColor = require("randomcolor");

const styles = {
  icon: {
    textColor: "red",
    color: randomColor()
  }
};

function TileComponent(props) {
  return (
    <div class="tile">
      <i
        style={{
          color: randomColor({
            luminosity: "bright"
          })
        }}
        class={props.icon}
      />
    </div>
  );
}

export default TileComponent;
