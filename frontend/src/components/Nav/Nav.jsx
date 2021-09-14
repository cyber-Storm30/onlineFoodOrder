import React from "react";
import "./Nav.css";
import NavB from "../NavB/NavB";

const Nav = () => {
  const user = true;
  return (
    <div className="nav">
      <div className="nav__top">
        <h2>
          Food<span style={{ color: "#61B15A" }}>Market</span>
        </h2>
        <button className="nav__top__button">Log In</button>
      </div>
      {user ? <NavB /> : null}
    </div>
  );
};

export default Nav;
