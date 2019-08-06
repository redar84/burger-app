import React from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavaigationItems";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
      <div>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      </div>
      <div className={Classes.Logo}>
        <Logo />
      </div>

      <nav className={Classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
