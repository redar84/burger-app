import React, { Component } from "react";
import Aux from "../../hoc/Auxelement";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };
  render() {
<<<<<<< HEAD
   // console.log(this.state.ingredients)
    return(
        <Aux>
        <div><Burger ingredients={this.state.ingredients}/></div>
=======
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
>>>>>>> 587d71655b9785f944b60800dbecc034da3e863f
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
