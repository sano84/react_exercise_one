import React from "react";
import ReactDOM from "react-dom";

// wrapping const name with {}

const name = "Rambo";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
