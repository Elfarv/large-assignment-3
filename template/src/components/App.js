import React from 'react';
import {Switch, Route, Link, NavLink } from 'react-router-dom';
import Bubbles from './Bubbles';
import NavigationBar from './NavigationBar/';
import Container from './Container';
import Bundles from './Bundles';
import About from './About';
import Cart from './Cart';
//const bubbleService = require('../../../server/services/bubbleService.js');

const App = () => {

  return (
    <Switch>
      <Route exact path='/' render={() => (<NavigationBar />)} />

      //BUBBLES ROUTE
      <Route exact path='/bubbles' render={() => (
        <div>
          <NavigationBar />
          <Container>
            <Bubbles/>
          </Container>
        </div>)} />
      //BUNDLES ROUTE
      <Route exact path='/bundles' render={() => (
        <div>
          <NavigationBar />
          <Container>
            <Bundles/>
          </Container>
        </div>)} />
      //ABOUT US ROTUE
      <Route exact path='/about' render={() => (
        <div>
          <NavigationBar />
          <Container>
            <About />
          </Container>
        </div>)} />
      <Route exact path='/cart' render={() => (
        <div>
          <NavigationBar />
          <Container>
            <Cart />
          </Container>
        </div>)} />
      <Route path='/bubbles/1' render={(id) => (<p>Welcome to bubbles page 1</p>)} />
      <Route render={( {location}) => (
        <div>
          <NavigationBar />
          <div>404!</div>
          <div> {location.pathname} was not found! </div>
        </div>
      )} />
    </Switch>
  )
};


/*

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
*/



export default App;
