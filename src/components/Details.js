import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { Button } from "./StyledEl";

function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, price, company, info, inCart } = value.details;
        return (
          <div className="container my-5">
            <div className="row">
              <div className="col-10 col-md-6 mx-auto text-blue">
                <h1>{title}</h1>
                <img src={img} alt={title} className="img-fluid" />
              </div>
              <div className="col-10 col-md-6 mx-auto text-capitalize">
                <h2>
                  model: <span className="text-muted text-title">{title}</span>
                </h2>
                <h3>
                  made by:{" "}
                  <span className="text-muted text-title">{company}</span>
                </h3>
                <h3 className="text-blue">
                  price:{" "}
                  <span className="text-muted text-title">$ {price}</span>
                </h3>
                <p>
                  <strong>more info about the product:</strong>
                </p>
                <p>{info}</p>
                <div>
                  <Link to="/">
                    <Button className="text-capitalize">
                      back to products
                    </Button>
                  </Link>

                  <Button
                    disabled={inCart ? true : false}
                    $cart
                    className="text-capitalize"
                    onClick={() => value.addToCart(id)}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default Details;
