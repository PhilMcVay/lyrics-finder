import React from "react";
import ReactDOM from "react-dom";
import Header from "./shared/Header";

import { GlobalStyles } from "./globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
