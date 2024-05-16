import React from "react";
import { NavbarProps } from "./model";
import s from "./navbar.module.scss";

const Navbar: React.FC<NavbarProps> = () => {
  return <div className={s.navbar_container}>Moneylion Challenge</div>;
};

export default Navbar;
