import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./shared/Header";

import TracksPage from "./pages/Tracks";
import LyricsPage from "./pages/Lyrics";

import { GlobalStyles } from "./globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TracksPage />
        </Route>
        <Route path="/:artistName/:track">
          <LyricsPage />
        </Route>
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
