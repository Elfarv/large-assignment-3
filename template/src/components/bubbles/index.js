import React from 'react';
import BubbleService from '../../../../server/services/bubbleService.js';
import BubblesList from '../BubblesList/';

// þetta virkar ekki, var að prófa mig áfram :)

class Bubbles extends React.Component {
  componentDidMount() {
    //console.log(BubbleService.getProducts());
    this.setState({
      bubbles: BubbleService.getProducts(),
    });
  }
/*
  state = {
    bubbles: [],
  };
*/
  render() {
    //console.log(this.state);
    return (
      <div>
        <h1> Bubbles</h1>
        <BubblesList  bubbles={ this.state.bubbles }/>
      </div>
    );
  }
}

export default Bubbles;
