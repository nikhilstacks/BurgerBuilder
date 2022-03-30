import React from "react";
import { useState } from "react";
import CheckoutOrderSummary from "../../Components/Order/CheckoutOrderSummary/CheckoutOrderSummary";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import ContactData from "./ContanctData/ContactData";

function Checkout() {
  let [state] = useState({
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
    navigate("/checkouts");
  };

  return (
    <div>
      <CheckoutOrderSummary
        ingredients={state.ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutSuccessed={checkoutSuccessedHandler}
      />
      <Routes>
        <Route path="/checkouts" element={<ContactData />} />
      </Routes>
    </div>
  );
}

export default Checkout;
