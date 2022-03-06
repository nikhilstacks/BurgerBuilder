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
    {controls.map((ctrl) => (
      <BuilControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngredient(ctrl.type)}
      />
    ))}
  </div>
);

export default BuildControls;
