import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BurgerControls/BurgerControls";

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
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
