import React from 'react';
import Classes from './BuilControl.module.css';
const buildControl = (props)=> (
    <div className={Classes.BuildControl}>
        <label className={Classes.Label}>{props.label}</label>
        <button className={Classes.Less}>Less</button>
        <button className={Classes.More}>Add</button>
    </div>
)
export default buildControl;