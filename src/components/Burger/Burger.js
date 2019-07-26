import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
const burger = props => {
    console.log(props)
  const transformedIngredients = Object.keys(props.ingredients).map((ingredient)=>{
      return <BurgerIngredient type={ingredient}/> 
  })
  console.log(transformedIngredients);
//   .map((ingredient, index) => {
//       return <BurgerIngredient type={ingredient} index={index} />;
//     }
//   );

  return <div className={Classes.Burger}>{transformedIngredients}</div>;
};

export default burger;
