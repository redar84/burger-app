import React from 'react';
import Classes from './DrawerToggle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const drawerToggle = (props) => <div 
 onClick={props.clicked} className={Classes.DrawerToggle}>
   <FontAwesomeIcon icon="bars" />
 </div>

export default drawerToggle;