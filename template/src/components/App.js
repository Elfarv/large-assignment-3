import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Bubbles from "./Bubbles";
import NavigationBar from "./NavigationBar/";
import Container from "./Container";
import Bundles from "./Bundles";
import About from "./About";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import BubblesDetails from "./BubblesDetails";
import NotFound from "./NotFound";
//const bubbleService = require('../../../server/services/bubbleService.js');

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <NavigationBar />} />
      //BUBBLES ROUTE
      <Route exact path="/bubbles" component={Bubbles} />
      <Route exact path="/bubbles/:bubblesItemId" component={BubblesDetails} />
      //BUNDLES ROUTE
      <Route exact path="/bundles" component={Bundles} />
    //ABOUT US ROTUE
      <Route path="/about" component={About} />
      <Route
        exact
        path="/cart"
        render={() => (
          <div>
            <CartProvider>
              <NavigationBar />
              <Container>
                <Cart />
              </Container>
            </CartProvider>
          </div>
        )}
      />
    <Route path='*' component={NotFound} />
    </Switch>
  );
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
