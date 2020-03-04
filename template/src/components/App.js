import React from 'react';
import {Switch, Route, Link, NavLink } from 'react-router-dom';
import Bubbles from './Bubbles';
import NavigationBar from './NavigationBar/';
import Container from './Container';
import Bundles from './Bundles';
//const bubbleService = require('../../../server/services/bubbleService.js');

const App = () => {

  return (
      <>
        <div>
          <NavigationBar />
        </div>
        <div>
          <Container>
            <Bubbles/>
          </Container>
          <Container>
            <Bundles/>
          </Container>
        </div>
      </>
  )
};


/*
  return (
    <Switch>
      <Route path='/' render={(<> <NavigationBar /></> )} />
      <Route exact path='/Bubbles' render={() => (
        <div>
          <Container>
            <Bubbles/>
          </Container>
        </div>)} />
      <Route path='/Bubbles/1' render={() => (<p>Welcome to bubbles page 1</p>)} />
      <Route render={( {location}) => (
        <div>
          <div>404!</div>
          <div> {location.pathname} was not found! </div>
        </div>
      )} />
    </Switch>
  )
};*/


export default App;
