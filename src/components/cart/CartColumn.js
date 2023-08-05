import React from "react";

function CartColumn() {
  return (
    <div className="container-fluid mb-3">
      <div className="row text-uppercase text-center">
        <div className="col-2 mx-auto mb-3">products</div>
        <div className="col-2 mx-auto mb-3">name</div>
        <div className="col-2 mx-auto mb-3">price</div>
        <div className="col-2 mx-auto mb-3">quantity</div>
        <div className="col-2 mx-auto mb-3">remove</div>
        <div className="col-2 mx-auto mb-3">total</div>
      </div>
    </div>
  );
}

export default CartColumn;
