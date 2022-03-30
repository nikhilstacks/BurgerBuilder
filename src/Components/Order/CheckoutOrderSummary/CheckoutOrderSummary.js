import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../Ui/Button/Button";
import CheckoutOrderCss from "./CheckoutOrderSummary.module.css";

function CheckoutOrderSummary(props) {
  return (
    <div className={CheckoutOrderCss.CheckoutSummary}>
      <h1> We Hope it tastes wel!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutSuccessed}>
        SUCCESS
      </Button>
    </div>
  );
}

export default CheckoutOrderSummary;
