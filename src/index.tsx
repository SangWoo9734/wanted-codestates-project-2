import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./GlobalStyle";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  rootElement,
);
