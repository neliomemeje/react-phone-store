import React from "react";
import { Link } from "react-router-dom";
import logo from "../icon.png";
import { Button } from "./StyledEl";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item ms-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ms-auto">
        <Button className="cart-btn">
          <span className="me-2">
            <i className="fas fa-cart-plus" />
          </span>
          My Cart
        </Button>
      </Link>
    </nav>
  );
}

export default NavBar;
