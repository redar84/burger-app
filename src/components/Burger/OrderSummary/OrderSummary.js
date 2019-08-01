import React from 'react';
import Aux from '../../../hoc/Auxelement'
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
            <button onClick={props.closeModal}> Back</button>
        </Aux>
     ) 
     
};

export default orderSummary;