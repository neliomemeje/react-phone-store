import React from "react";
import { Link } from "react-router-dom";
import { ProductEl } from "./StyledEl";
import { ProductConsumer } from "../context";

function Product({ id, img, title, price, inCart }) {
  return (
    <ProductConsumer>
      {(value) => (
        <ProductEl className="col-10 col-md-6 col-lg-3 mx-auto my-4">
          <div className="card">
            <div
              className="img-container"
              onClick={() => value.handleDetails(id)}
            >
              <Link to="/details">
                <img className="card-img-top my-3" src={img} alt={title} />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? "In Cart" : <i className="fas fa-cart-plus" />}
              </button>
            </div>
            <div className="card-footer d-flex justify-content-between mx-2">
              <p className="mb-0">{title}</p>
              <h5 className="fst-italic text-blue mb-0">
                <span className="text-title">$ {price}</span>
              </h5>
            </div>
          </div>
        </ProductEl>
      )}
    </ProductConsumer>
  );
}

export default Product;
