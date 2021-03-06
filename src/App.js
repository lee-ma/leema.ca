import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './navbar';
import LandingPage from './landing';
import Projects from './projects';
import Blog from './blog';
import AtheneumBlog from './atheneumblog';
import Gallery from './gallery';
import WhosRight from './whosrightblog';
import DayTrip from './daytrip';
import Contact from './contact';
import Zephyr from './zephyrblog';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/atheneum" component={AtheneumBlog}/>
          <Route exact path="/whosright" component={WhosRight}/>
          <Route exact path="/daytrip" component={DayTrip}/>
          <Route exact path="/zephyr" component={Zephyr}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/about" component={Contact} />
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
