import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__body">
        <p className="header__title">Yummy Restaurant</p>
        <h1>Best Seasonal Food</h1>
        <p className="header__food">Cappon mango</p>
        <p className="header__food">with cheese sauce</p>
        <button className="header__button">Look Menu</button>
      </div>
    </div>
  );
};

export default Header;
