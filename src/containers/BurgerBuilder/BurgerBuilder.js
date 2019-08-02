import React, { Component } from "react";
import Aux from "../../hoc/Auxelement";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE ={
  meat:2,
  cheese:1.5,
  bacon:.5,
  salad: .25
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchaseble : false,
    purchasing:false
  };
  purchaseHandler = () =>{
    console.log("Hi ")
    this.setState({purchasing: true})
  }
  updatePurchaseState=(updatedIngredients)=>{
     let sum = null;
     for(let key in updatedIngredients)
         sum += updatedIngredients[key];
         this.setState({purchaseble : sum>0})
  }
  addIngredientsHandler = (type)=>{
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type]
    this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
    this.updatePurchaseState(updatedIngredients);
    
  }
  removeIngredientsHandler = (type)=>{
     const newCount = this.state.ingredients[type] - 1
     if(newCount < 0){
         return;
     }
     const updatedIngredients = {...this.state.ingredients}
     updatedIngredients[type] = newCount;
     
     const newPrice  = this.state.totalPrice - INGREDIENT_PRICE[type]
     
     this.setState({ingredients:updatedIngredients, totalPrice:newPrice});
     this.updatePurchaseState(updatedIngredients);
  }
  purchaseCancelHandler = ()=>{
    this.setState({purchasing:false})
  }
  purchaseContinueHandler = ()=>{
    console.log("Hi I am Here")
  }
  render() {
    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0 
    };
    
    return (
      <Aux>
          <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
               <OrderSummary ingredients={this.state.ingredients}
                closeModal={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                price={this.state.totalPrice}/>   
          </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
           addIngredient={this.addIngredientsHandler}
           removeIngredient={this.removeIngredientsHandler}
           price={this.state.totalPrice}
           disable={disabledInfo}
           purchaseble={this.state.purchaseble}
           ordered={this.purchaseHandler}/>  
      </Aux>
    );
  }
}

export default BurgerBuilder;
