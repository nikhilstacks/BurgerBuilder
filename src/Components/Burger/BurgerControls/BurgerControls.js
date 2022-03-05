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
    {controls.map((ctrl) => {
      return <BuilControl key={ctrl.label} label={ctrl.label} />;
    })}
  </div>
);

export default BuildControls;
