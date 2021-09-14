import React from "react";
import OrderCard from "../OrderCard/OrderCard";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <div className="banner2">
      <div className="banner2__header">
        <h1>Special Offer for you</h1>
        <p>Call for Delivery (+91) 123-45689 </p>
      </div>
      <div className="banner2__body">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default Banner2;
