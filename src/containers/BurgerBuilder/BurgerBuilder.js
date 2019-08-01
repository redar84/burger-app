import React, { Component } from "react";
import Aux from "../../hoc/Auxelement";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
    purchaseble : false
  };
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
  render() {
    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0 
    };
    
    return (
      <Aux>
      
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
           addIngredient={this.addIngredientsHandler}
           removeIngredient={this.removeIngredientsHandler}
           price={this.state.totalPrice}
           disable={disabledInfo}
           purchaseble={this.state.purchaseble}/>
          </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
