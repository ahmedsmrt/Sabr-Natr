import React from "react";
import { useState } from "react";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

import "./MainNavigation.css";
// import { MenuProvider } from "./Context/MenuContext";

const MainNavigation = (props) => {
  const [openMenu, setOpenMenu] = useState("closedMenu");
  const [isOpen] = useState(false);

  const openMenuHandler = () => {
    if (openMenu === "closedMenu") {
      setOpenMenu("openMenu");
    } else {
      setOpenMenu("closedMenu");
    }
  };

  return (
    <React.Fragment>
      <div id="mobile_nav_container" className={openMenu}>
        <MobileNav>
          <nav className="main-navigation__drawer-nav">
            <NavLinks pressedOpen={isOpen}></NavLinks>
          </nav>
        </MobileNav>
      </div>

      <div id="main_nav_container">
        <NavLinks></NavLinks>
      </div>
      <div id="hamburger-container" onClick={openMenuHandler}>
        <span />
        <span />
        <span />
      </div>
    </React.Fragment>
  );
};

export default MainNavigation;

//   <MobileNav>
//     <nav className="main-navigation__drawer-nav">
//       <NavLinks />
//     </nav>
//   </MobileNav>;
