import React from "react";
import { Switch, Route } from "react-router-dom";
import Bubbles from "./Bubbles";
import NavigationBar from "./NavigationBar/";
import Container from "./Container";
import Bundles from "./Bundles";
import About from "./About";
import Cart from "./Cart";
import BubblesDetails from "./BubblesDetails";
import NotFound from "./NotFound";
import Homescreen from "./Homescreen";
import { CheckOutForm } from "./CheckOutForm";
import { CheckOutButtons } from "./CheckOutButtons";
import { CheckOutPickup } from "./CheckOutPickup";
import { ConfirmCheckout } from "./ConfirmCheckout";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homescreen} />
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
          <>
            <NavigationBar />
            <Container>
              <Cart />
            </Container>
          </>
        )}
      />
      <Route
        exact
        path="/cart/checkout"
        render={() => (
          <>
            <NavigationBar />
            <Container>
              <CheckOutButtons />
            </Container>
          </>
        )}
      />
      <Route
        exact
        path="/cart/checkout/delivery"
        render={() => (
          <>
            <NavigationBar />
            <Container>
              <CheckOutForm />
            </Container>
          </>
        )}
      />
      <Route
        exact
        path="/cart/checkout/pickup"
        render={() => (
          <>
            <NavigationBar />
            <Container>
              <CheckOutPickup />
            </Container>
          </>
        )}
      />
      <Route
        exact
        path="/cart/confirm/:id"
        render={() => (
          <>
            <NavigationBar />
            <Container>
              <ConfirmCheckout />
            </Container>
          </>
        )}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
