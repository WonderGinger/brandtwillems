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
import NotFound from "../pages/404";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Redirect from="/newtab" to="/homepage" />
        <Route path="/ght" component={GloomhavenTrackerPage} />
        <Route path="/pokedex" component={Pokedex} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Root;
