import React, { Component } from "react";
import Aux from "../../../hoc/Auxelement";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  componentWillUpdate(){
      console.log('[OrderSummary] WillUpdate');
  }
  render() {
    const orderSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey} : {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });
    return (
      <Aux>
        <h2>Your Order Summaty</h2>
        <p>You Choose Following Ingredient : </p>
        <ul>{orderSummary}</ul>
        <p>
          <strong>Your Total : $ {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Danger" clicked={this.props.closeModal}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.continue}>
          Continue
        </Button>
      </Aux>
    ) 
  }
}

export default OrderSummary;
