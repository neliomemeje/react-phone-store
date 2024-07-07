import React from "react";

function CartColumn() {
  return (
    <div className="container-fluid mb-3">
      <div className="row text-uppercase text-center">
        <div className="col-2 mx-auto mb-3 top-column">products</div>
        <div className="col-2 mx-auto mb-3 top-column">name</div>
        <div className="col-2 mx-auto mb-3 top-column">price</div>
        <div className="col-2 mx-auto mb-3 top-column">quantity</div>
        <div className="col-2 mx-auto mb-3 top-column">remove</div>
        <div className="col-2 mx-auto mb-3 top-column">total</div>
      </div>
    </div>
  );
}

export default CartColumn;
