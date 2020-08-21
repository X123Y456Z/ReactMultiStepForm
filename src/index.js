import React from "react";
import ReactDOM from "react-dom";
import ProviderApp from "./ProviderApp";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ProviderApp>
    <App />
  </ProviderApp>,

  rootElement
);
