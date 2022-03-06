import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerCss from "./Burger.module.css";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ikeys) => {
      return [...Array(props.ingredients[ikeys])].map((_, i) => {
        return <BurgerIngredients key={ikeys + i} type={ikeys} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!!</p>;
  }

  return (
    <div className={BurgerCss.Burger}>
      <BurgerIngredients type="BreadTop" />
      {transformedIngredients}
      <BurgerIngredients type="BreadBottom" />
    </div>
  );
};

export default Burger;
