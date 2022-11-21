import React from "../react";
import ReactDOM from "../react-dom";
import App from "./App";

// Renders the application within the root html tag.
ReactDOM.render(<App />, document.querySelector("#root") as HTMLElement);
