import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
const burger = props => {
   
  const transformedIngredients = Object.keys(props.ingredients).map((igKey)=>{
       
       let value = [...Array(props.ingredients[igKey])]
       //console.log(value)
       value.map((_,i)=>{
        
         console.log(igKey + i);
         return <BurgerIngredient key={igKey+i} type={igKey}/>
         
       })
  })


  return <div className={Classes.Burger}>
  <BurgerIngredient type='bread-top'/>
  {transformedIngredients}
  <BurgerIngredient type='bread-bottom'/>
  </div>;
};

export default burger;
