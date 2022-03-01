import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor( props ){
  //   super( props );
  //   this.state = {...};
  // }

  state = {
    ingredients: {
      meat: 1,
      cheese: 1,
      salad: 2,
      bacon: 2,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Ingredients</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
