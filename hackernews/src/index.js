import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
