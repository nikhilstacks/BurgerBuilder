import React, { Component } from "react";
import CheckoutOrderSummary from "../../Components/Order/CheckoutOrderSummary/CheckoutOrderSummary";
export class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };

  render() {
    return (
      <div>
        <CheckoutOrderSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default Checkout;
