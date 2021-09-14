import React from "react";
import "./Banner1.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__header">
        <h1>delicious food</h1>
        <p>Check out our menu</p>
      </div>
      <div className="banner__body">
        <div className="banner__bodyleft">
          <h2 className="banner__body__title">Discover Menu</h2>
          <h2 className="banner__body__title2">
            Keep browsing our latest menu
          </h2>
          <p className="banner__desc">
            Sed imperdiet est et nulla tincidunt, ac aliquam magna tempus.
            Nullam congue placerat condimentum. Pellentesque tempor tincidunt
            nibh id varius. Integer mi libero, interdum et augue et, bibendum
            dapibus nisi. In eget est viverra, consequat tellus eu, tincidunt
            libero. tellus eu, tincidunt libero. tellus eu, tincidunt libero.
          </p>
          <button className="banner__button">discover all</button>
        </div>
        <div className="banner__bodyright">
          <div className="banner__imagewrapper">
            <img
              src="http://demo.themeparrot.com/yummy/images/themeparrot/food-gal.jpg"
              alt="foodimage"
            ></img>
          </div>
          <div className="banner__cardwrapper">
            <div className="banner__card">
              <h1>$14</h1>
              <h4>tasty brunch</h4>
              <p>
                2 farm fresh eggs, 2 bacon or 1 house made sausage, fresh greens
              </p>
              <h4>Chilaquiles</h4>
              <p>
                ortilla chips, fire roasted tomatillo salsa, 2 sunny side farm
                fresh eggs
              </p>
              <h4>Pancakes</h4>
              <p>seasonal toppings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
