import React, { Component } from "react";
import Aux from "../../hoc/Auxelement";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
const INGREDIENT_PRICE = {
  meat: 2,
  cheese: 1.5,
  bacon: 0.5,
  salad: 0.25
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 2,
    purchaseble: false,
    purchasing: false,
    loading: false
  };
  componentDidMount() {
    //console.log(this.props)
    axios
      .get("https://react-my-burger-19f8c.firebaseio.com/ingredients.json")
      .then(response => {
        //console.log(response);
        this.setState({ ingredients: response.data });
      }).catch(error=>{
        
      });
  }
  purchaseHandler = () => {
    console.log("Hi ");
    this.setState({ purchasing: true });
  };
  updatePurchaseState = updatedIngredients => {
    let sum = null;
    for (let key in updatedIngredients) sum += updatedIngredients[key];
    this.setState({ purchaseble: sum > 0 });
  };
  addIngredientsHandler = type => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientsHandler = type => {
    const newCount = this.state.ingredients[type] - 1;
    if (newCount < 0) {
      return;
    }
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // console.log("Hi I am Here")
   
    const queryParams = [];
    for(let i in this.state.ingredients)
    {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&');
    console.log(queryParams);
      this.props.history.push({
        pathname: '/checkout',
        search:'?' + queryString,

      });
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
     
    let burger = <Spinner/>;
    let orderSummary = null
    
    if(this.state.ingredients !== null){
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientsHandler}
            removeIngredient={this.removeIngredientsHandler}
            price={this.state.totalPrice}
            disable={disabledInfo}
            purchaseble={this.state.purchaseble}
            ordered={this.purchaseHandler}
          />
        </Aux>    
      );
      orderSummary =  (
        <OrderSummary
          ingredients={this.state.ingredients}
          closeModal={this.purchaseCancelHandler}
          continue={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
      
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
