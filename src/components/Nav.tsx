import React from "react";
import WhiteLogo from "./../assets/logo/white.svg";

const Nav = () => {
  return (
    <nav className="navbar bg-primaryB">
      <img
        src={WhiteLogo.toString()}
        alt="white logo for cascarita"
        width="30"
      />
    </nav>
  );
};

export default Nav;

