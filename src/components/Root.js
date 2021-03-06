import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import IndexPage from "../pages";
import HomePage from "../pages/homepage";
import ProjectsPage from "../pages/projects";
import GloomhavenTrackerPage from "../pages/ght";
import Pokedex from "../pages/pokedex";
import Kanban from "../pages/kanban";
import TicTacToe from "../pages/tictactoe";
import TripleByte from "../pages/triplebyte";
import Algorithms from "../pages/algorithms";
import NotFound from "../pages/404";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/ght" component={GloomhavenTrackerPage} />
        <Route path="/pokedex" component={Pokedex} />
        <Route path="/kanban" component={Kanban} />
        <Route path="/tictactoe" component={TicTacToe} />
        <Route path="/triplebyte" component={TripleByte} />
        <Route path="/alg" component={Algorithms} />
        <Route component={NotFound} />

        <Redirect from="/newtab" to="/homepage" />
      </Switch>
    </Router>
  );
};

export default Root;
