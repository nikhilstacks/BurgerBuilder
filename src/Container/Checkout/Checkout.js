import React from "react";
import { useState } from "react";
import CheckoutOrderSummary from "../../Components/Order/CheckoutOrderSummary/CheckoutOrderSummary";
import { useNavigate } from "react-router-dom";

function Checkout() {
  let [state] = useState({
    ingredients: {
      salad: 1,
      meat: 2,
    },
  });

  let navigate = useNavigate();

  const checkoutCancelledHandler = () => {
    navigate("/");
  };

  const checkoutSuccessedHandler = () => {
    navigate("/checkout/contact-data");
  };

  return (
    <div>
      <CheckoutOrderSummary
        ingredients={state.ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutSuccessed={checkoutSuccessedHandler}
      />
    </div>
  );
}

export default Checkout;
