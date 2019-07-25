import React, { Component } from "react";
import Aux from "../../hoc/Auxelement";
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad: 1,
      bacon:1,
      cheese:2,
      meat:2
    }
  };
  render() {
    console.log(this.state.ingredients)
    return(
        <Aux>
        <div><Burger ingredients={this.state.ingredients}/></div>
        <div>Build Controls</div>
        </Aux> 
    );
  }
}

export default BurgerBuilder;
