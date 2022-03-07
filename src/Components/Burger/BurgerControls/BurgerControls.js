import React from "react";
import BuildControlsCss from "./BuildControls.module.css";
import BuilControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={BuildControlsCss.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2) + "$"}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuilControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngredient(ctrl.type)}
        removed={() => props.removeIngredient(ctrl.type)}
        disabled={props.disable[ctrl.type]}
      />
    ))}
    <button
      className={BuildControlsCss.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
