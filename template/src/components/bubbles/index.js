import React from 'react';
import {View, Text} from 'react-native';
const bubbleService = require('../../../server/services/bubbleService.js');

// þetta virkar ekki, var að prófa mig áfram :)

class Bubbles extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      bubbleID: "",
      bubbles: [],
      bubbleDetails: "",
    }
  }

  render(){

    return (<div> Hello guys </div>)
  }
}

export default Bubbles;
