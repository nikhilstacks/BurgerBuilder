import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BurgerControls/BurgerControls";
import Modal from "../../Components/Ui/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../Components/Ui/spinner/Spinner";

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
    // this is a new way of declaring a state in react other is defined above
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        "https://react-burger-builder-42855-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json"
      )
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  purchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map((ikey) => ingredients[ikey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

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
    this.purchasable(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  ingredientsRemoved = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.purchasable(updatedIngredients);
  };

  backdropHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  purchaseSuccess = () => {
    // alert("You are continuing congratulations!!");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      Cusomer: {
        name: "nikhilstacks",
        address: {
          street: "chandigarh",
          house: "chandigarh",
        },
      },
      email: "nikhilstacks@gmail.com",
      delivery: "fastest",
    };
    axios
      .post("/orders.json", order) // we always have to use .json in firebase
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let ordersummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded from firebase!!</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.ingredientAdded}
            removeIngredient={this.ingredientsRemoved}
            disable={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      ordersummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancel={this.purchaseCancel}
          purchaseSuccess={this.purchaseSuccess}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      ordersummary = <Spinner />;
    }
    // adding routing in application
    return (
      <Aux>
        <Modal show={this.state.purchasing} hide={this.backdropHandler}>
          {ordersummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
