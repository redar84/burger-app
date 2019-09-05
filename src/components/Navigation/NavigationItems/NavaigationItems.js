import React from 'react';
import Classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/Navigationitem'
const navaigationItems = () => (
    <ul className={Classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
)

export default navaigationItems;