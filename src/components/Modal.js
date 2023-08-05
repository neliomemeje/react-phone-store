import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ModalContainer, Button } from "./StyledEl";

function modal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { img, price, title } = value.modalProduct;
        if (!value.modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-10 col-md-8 col-lg-6 mx-auto text-capitalize py-3 my-5"
                  >
                    <h1 id="item-added" className="text-blue">
                      item added to cart
                    </h1>
                    <img src={img} alt={title} />
                    <h5>
                      <strong>{title}</strong>
                    </h5>
                    <h5>
                      price:{" "}
                      <span className="text-title text-blue text-muted">
                        ${price}
                      </span>
                    </h5>
                    <Link to="/">
                      <Button onClick={value.closeModal}>
                        Continue Shopping
                      </Button>
                    </Link>
                    <Link to="/cart">
                      <Button onClick={value.closeModal}>Go To Cart</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
}

export default modal;
