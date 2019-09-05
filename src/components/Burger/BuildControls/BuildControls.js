import React from 'react';
import Classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
]
const buildControls = (props) =>(
    <div className={Classes.BuildControls}>
    <label>$ {props.price}</label>

    {controls.map(ctrl=>{
        return <BuildControl 
        key={ctrl.label}
        label={ctrl.label}
        added={()=>props.addIngredient(ctrl.type)}
        removed={()=>props.removeIngredient(ctrl.type)}
        disabled={props.disable[ctrl.type]}/>
    })}
   
    
    <button
    className={Classes.OrderButton}
    disabled={!props.purchaseble}
    onClick={props.ordered}
    >ORDER NOW</button>
</div>
)

export default buildControls