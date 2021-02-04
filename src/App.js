import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import PageHome from "./page-home.js";
import PageEpisodes from "./page-episodes.js";
import PagePersonajes from "./page-personajes.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageHome}></Route>
          <Route exact path="/personajes" component={PagePersonajes}></Route>
          <Route exact path="/episodios" component={PageEpisodes}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
