import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalTypography } from "../../Atoms/typography/typography";
import { NavBarComponent } from "./navBar";

export default {
  title: "NavBar",
};

export const NavBarComponents = () => (
  <>
    <Router>
      <GlobalTypography />
      <NavBarComponent />
    </Router>
  </>
);
