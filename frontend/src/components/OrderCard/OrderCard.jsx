import React from "react";
import "./OrderCard.css";
import CheckIcon from "@material-ui/icons/Check";

const OrderCard = () => {
  return (
    <div className="ordercard">
      <h1>combo offer</h1>
      <h3>$65.00</h3>
      <img
        className="ordercard__image"
        src="http://demo.themeparrot.com/yummy/images/themeparrot/food/veg-pasta.png"
        alt="food"
      />
      <h4>Veggies Combo</h4>
      <p>
        <span>
          <CheckIcon
            style={{
              color: "rgb(68, 68, 68)",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          />
        </span>
        Juice
      </p>
      <p>
        <span>
          <CheckIcon
            style={{
              color: "rgb(68, 68, 68)",
              fontWeight: "1000",
              marginRight: "10px",
            }}
          />
        </span>
        Water bottle
      </p>
      <p>
        {" "}
        <span>
          <CheckIcon
            style={{
              color: "rgb(68, 68, 68)",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          />
        </span>
        Any one dessert inculded
      </p>
      <button className="ordercard__button">add to cart</button>
    </div>
  );
};

export default OrderCard;
