import React from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavaigationItems";
const toolbar = () => {
  return (
    <header className={Classes.Toolbar}>
      <div>Menu</div>
      <div className={Classes.Logo}>
        <Logo/>
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
