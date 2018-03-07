import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './navbar';
import LandingPage from './landing';
import Projects from './projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route path="/projects" component={Projects}/>
              <Route path="/" component={LandingPage}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
