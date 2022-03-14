import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../Ui/Button/Button";

class OrderSummary extends Component {
  componentWillUnmount() {
    console.log("[Order Summary] will update");
  }

  render() {
    const ingredientsList = Object.keys(this.props.ingredients).map((iKey) => {
      return (
        <li key={iKey}>
          {iKey}: {this.props.ingredients[iKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h1>Thankyou for Order.</h1>
        <p>Ingredients of your delicious Burger are:</p>
        <ul>{ingredientsList}</ul>
        <p>
          <strong>Total Price: {this.props.price}$</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseSuccess}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
