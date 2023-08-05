import React from "react";

function CartList({ cart, updateCount, removeProduct }) {
  return (
    <>
      {cart.map((item) => {
        const { id, img, title, price, count, total } = item;
        return (
          <div className="container-fluid" key={id}>
            <div className="row text-center d-flex align-items-center">
              <div className="col-2 mx-auto mb-3">
                <img
                  style={{ width: "5rem", height: "5rem" }}
                  className="img-fluid"
                  src={img}
                  alt={title}
                />
              </div>
              <div className="col-2 mx-auto mb-3">{title}</div>
              <div className="col-2 mx-auto mb-3">
                <strong>
                  <span className="text-title">${price}</span>
                </strong>
              </div>
              <div className="col-2 mx-auto mb-3">
                <div className="d-flex justify-content-center">
                  <button
                    className="count btn btn-outline-secondary"
                    onClick={() => updateCount(id, "dec")}
                  >
                    <strong>-</strong>
                  </button>
                  <button className="count btn btn-light p-2 ">
                    <strong>{count}</strong>
                  </button>
                  <button
                    className="count btn btn-outline-secondary"
                    onClick={() => updateCount(id, "inc")}
                  >
                    <strong>+</strong>
                  </button>
                </div>
              </div>
              <div className="col-2 mx-auto mb-3">
                <i
                  onClick={() => removeProduct(id)}
                  className="fas fa-trash fa-2x text-danger"
                ></i>
              </div>
              <div className="col-2 mx-auto mb-3">
                <strong>
                  <span className="text-title">${total}</span>
                </strong>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartList;
