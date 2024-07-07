import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./StyledEl";
import { ProductConsumer } from "../context";

function NavBar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;
        return (
          <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
              <img src={'icon.png'} alt="logo" className="navbar-brand" />
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
                <span id="cart-link" className="me-2">
                  <i className="fas fa-cart-plus" />
                  <div className="cart-item">{cart.length}</div>
                </span>
                My Cart
              </Button>
            </Link>
          </nav>
        );
      }}
    </ProductConsumer>
  );
}

export default NavBar;
