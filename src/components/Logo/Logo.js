import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import Classes from './Logo.module.css'
const logo = (props) => (
    <div className={Classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Burger Builder"/>
    </div>
);
export default logo;