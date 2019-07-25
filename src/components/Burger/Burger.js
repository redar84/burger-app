import React from 'react';
import Classes from './Burger.module.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
const burger = ()=>{
     return(
         <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
         </div>
     );
}

export default burger