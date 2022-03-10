import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../Ui/Button/Button";

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
      <p>
        <strong>Total Price: {props.price}$</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseSuccess}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
