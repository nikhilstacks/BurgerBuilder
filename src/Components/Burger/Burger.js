import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerCss from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={BurgerCss.Burger}>
      <BurgerIngredients type="BreadTop" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="BreadBottom" />
    </div>
  );
};

export default Burger;
