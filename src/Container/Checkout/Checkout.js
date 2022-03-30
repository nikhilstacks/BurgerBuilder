import React from "react";
import { useState } from "react";
import CheckoutOrderSummary from "../../Components/Order/CheckoutOrderSummary/CheckoutOrderSummary";
import { useNavigate } from "react-router-dom";
function Checkout() {
  let [state, setState] = useState({
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  });

  let navigate = useNavigate();

  const checkoutCancelledHandler = () => {
    navigate("/");
  };

  const checkoutSuccessedHandler = () => {
    navigate("/contact-data");
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
