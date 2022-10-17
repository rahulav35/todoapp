import React from "react";
import header from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={header.headerdiv}>
      <h1 className={header.todo}>T O D O</h1>
      <img className={header.image} src="/assets/icon-sun.svg" alt="" />
    </div>
  );
};

export default Header;
