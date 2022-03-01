import React from "react";
import ingredientsCss from "./burgerIngredients.css";
import PropTypes from "prop-types";

const burgerIngredients = (props) => {
  let ingredients = null;

  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={ingredientsCss.BreadBottom}></div>;
      break;
    case "BreadTop":
      ingredients = (
        <div className={ingredientsCss.BreadTop}>
          <div className={ingredientsCss.Seeds1}></div>
          <div className={ingredientsCss.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredients = <div className={ingredientsCss.Meat}></div>;
      break;
    case "cheese":
      ingredients = <div className={ingredientsCss.Cheese}></div>;
      break;
    case "salad":
      ingredients = <div className={ingredientsCss.Salad}></div>;
      break;
    case "bacon":
      ingredients = <div className={ingredientsCss.Bacon}></div>;
      break;
    default:
      ingredients = null;

      return ingredients;
  }
};

burgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredients;
