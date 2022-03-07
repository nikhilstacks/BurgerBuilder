import React from "react";
import Aux from "../../../hoc/Auxiliary";

const OrderSummary = (props) => {
  const ingredientsList = Object.keys(props.ingredients).map((iKey) => {
    return (
      <li key={iKey}>
        {iKey}: {props.ingredients[iKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h1>Thankyou for Order.</h1>
      <p>Ingredients of your delicious Burger are:</p>
      <ul>{ingredientsList}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
