import React, { useEffect, useState } from "react";
import "./NavB.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const NavB = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav__bottom ${show && "nav__black"}`}>
      <h2 className="nav__bottom__title">Yummy</h2>
      <ul className="nav__bottom__list">
        <li className="nav__list">
          <strong>Home </strong>
        </li>
        <li className="nav__list">
          <strong>reservation </strong>{" "}
        </li>
        <li className="nav__list">
          <strong>menu </strong>{" "}
        </li>
        <li className="nav__list">
          <strong>order </strong>{" "}
        </li>
        <li className="nav__list">
          <strong>gallery </strong>{" "}
        </li>
      </ul>
      <LocalMallIcon className="nav__icon" />
    </div>
  );
};

export default NavB;
