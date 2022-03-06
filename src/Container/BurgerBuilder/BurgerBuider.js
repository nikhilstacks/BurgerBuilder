import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BurgerControls/BurgerControls";

const INGREDIENTS_PRICES = {
  meat: 0.5,
  cheese: 0.4,
  salad: 1.3,
  bacon: 2,
};

class BurgerBuilder extends Component {
  // constructor( props ){
  //   super( props );
  //   this.state = {...};
  // }

  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0,
    },
    totalPrice: 4,
  };

  ingredientAdded = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  ingredientsRemoved = () => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.ingredientAdded} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
