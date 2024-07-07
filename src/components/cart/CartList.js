import React from "react";

function CartList({ cart, updateCount, removeProduct }) {
  return (
    <>
      {cart.map((item) => {
        const { id, img, title, price, count, total } = item;
        return (
          <div className="container-fluid" key={id}>
            <div className="row text-center d-flex align-items-center order-container">
              <div className="col-2 mx-auto mb-3">
                <img
                  width={80}
                  height={80}
                  className="img-fluid product"
                  src={img}
                  alt={title}
                />
              </div>
              <div className="col-2 mx-auto mb-3 title">{title}</div>
              <div className="col-2 mx-auto mb-3">
                <strong>
                  <span className="text-title">${price}</span>
                </strong>
              </div>
              <div className="col-2 mx-auto mb-3">
                <div className="d-flex justify-content-center">
                  <button
                    className="count btn btn-outline-secondary border-0"
                    onClick={() => updateCount(id, "dec")}
                  >
                    <strong>-</strong>
                  </button>
                  <span className="count p-2 ">
                    <strong className="order-count">{count}</strong>
                  </span>
                  <button
                    className="count btn btn-outline-secondary border-0"
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
