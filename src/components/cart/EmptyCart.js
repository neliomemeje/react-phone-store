import React from "react";

function EmptyCart() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-10 text-capitalize text-blue text-title mt-5 mx-auto">
          <h1>your cart</h1>
          <h1>is currently empty</h1>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
