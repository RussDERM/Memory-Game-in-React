import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function JumbotronComponent() {
  return (
    <Jumbotron>
      <h1>Hello, Jon.</h1>
      <p>
        This is a simple lasagne unit, a simple jumbotron-style lasagne for
        calling extra attention to featured content or lasagne.
      </p>
      <p>
        <Button variant="primary">Learn</Button>
      </p>
    </Jumbotron>
  );
}

export default JumbotronComponent;
