import React from 'react';
import Burger from '../../../Burger/Burger'
import Button from '../../../UI/Button/Button'
import Classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={Classes.CheckoutSummary}>
            <h1>We Hope it went well</h1>
            <div style={{width:'300px', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
            btnType="Danger"
            clicked={props.checkoutCancelled}> Cancel </Button>
            <Button 
            btnType="Success"
            clicked={props.checkoutContinued}> Countine </Button>
        </div>
    );
};

export default checkoutSummary;