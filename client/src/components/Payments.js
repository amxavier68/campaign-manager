import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
        <StripeCheckout 
          name="campaignManager" 
          description="$5 for 5 email credits"
          amount={500} 
          currency="AUD"
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={token => this.props.handleToken(token)}
        ><button className="btn btn-success">Add Credits</button>
        </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);