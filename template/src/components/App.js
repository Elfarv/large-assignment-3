import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
      <Switch>

        //testa hvernig route virkar
        <Route exact path='/' render={() => (
          <Link to='/Bubbles'>Go to Bubbles page </Link>
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
    )
};

export default App;
