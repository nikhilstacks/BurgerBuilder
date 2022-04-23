import React from "react";
import OrderCss from "./Order.module.css";
function Order() {
  return (
    <div className={OrderCss.Order}>
      <p>Ingredients salad (1)</p>
      <p>
        Price <strong>USD 5.45</strong>
      </p>
    </div>
  );
}

export default Order;
