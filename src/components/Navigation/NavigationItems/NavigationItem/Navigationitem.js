import React from "react";
import Classes from "./NavigationItem.module.css";
const navigationitem = props => (
  <li className={Classes.NavigationItem}>
    <a href={props.link} className={Classes.active ? Classes.active : null }
    >{props.children}
    </a>
  </li>
);
export default navigationitem;
