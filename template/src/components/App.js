import React from 'react';
import {Switch, Route, Link, NavLink } from 'react-router-dom';
import Bubbles from './Bubbles';
import NavigationBar from './NavigationBar/';
import Container from './Container';
const bubbleService = require('../../../server/services/bubbleService.js');

const App = () => {
  /*
  let test = bubbleService.getProducts();

  console.log(bubbleService.getProducts()); //this is all the bubbles
  console.log(bubbleService.getBundles()); // these are all the bundles
  test.forEach(e => console.log(e.name));
  */
    return (

      //<Switch>
      <div>
        <NavigationBar />
        <Container>
          <Bubbles />
        </Container>
      </div>
      /*  //testa hvernig route virkar
        <Route exact path='/' render={() => (
          <Link to='/Bubbles/1'>Go to Bubbles page </Link>
        )} />
        <Route exact path='/Bubbles' render={() => (<p>Welcome</p>)} />
        <Route path='/Bubbles/1' render={() => (<p>Welcome to bubbles page 1</p>)} />
        <Route render={( {location}) => (
          <div>
            <div>404!</div>
            <div> {location.pathname} was not found! </div>
          </div>
        )} />
      </Switch>
      */
    )
};

export default App;
