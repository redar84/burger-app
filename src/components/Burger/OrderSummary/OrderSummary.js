import React from 'react';
import Aux from '../../../hoc/Auxelement'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    
    const orderSummary = Object.keys(props.ingredients)
    .map((igKey) =>{
        return <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>
            {igKey} : {props.ingredients[igKey]}
            </span>
            </li>
    })
    return(
        <Aux>
            <h2>Your Order Summaty</h2>
             <p>You Choose Following Ingredient : </p>
             <ul>{orderSummary}</ul>
             <p>Continue to Checkout ?</p>
             <Button btnType="Danger" clicked={props.closeModal}>Cancel</Button>
             <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </Aux>
     ) 
     
};

export default orderSummary;