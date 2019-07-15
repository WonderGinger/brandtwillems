import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewTabPage from '../pages/newtab';
import IndexPage from '../pages';
import GloomhavenTrackerPage from '../pages/ght';

const Root = () => {
  return (
    <Router>
      <main>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/newtab" component={NewTabPage}/>
        <Route path="/ght" component={GloomhavenTrackerPage}/>
      </main>
    </Router>
  )
}

export default Root
