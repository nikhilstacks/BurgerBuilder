import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerCss from "./Burger.module.css";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((ikeys) => {
    return [...Array(props.ingredients[ikeys])].map((_, i) => {
      console.log(ikeys, i);
      return <BurgerIngredients key={ikeys + i} type={ikeys} />;
    });
  });
  return (
    <div className={BurgerCss.Burger}>
      <BurgerIngredients type="BreadTop" />
      {transformedIngredients}
      <BurgerIngredients type="BreadBottom" />
    </div>
  );
};

export default Burger;
