import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
const burger = props => {
<<<<<<< HEAD
   
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
=======
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Add Ingredients</p>;
  }

  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
>>>>>>> 587d71655b9785f944b60800dbecc034da3e863f
};

export default burger;
