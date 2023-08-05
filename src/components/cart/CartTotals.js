import React from "react";
import { Button } from "../StyledEl";

function CartTotals({ value }) {
  const { subTotal, Tax, Total, clearCart } = value;

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 text-end text-capitalize my-5">
            <strong>
              <h5>
                subtotal:
                <span className="text-title ps-3">${subTotal}</span>
              </h5>
            </strong>
            <strong>
              <h5>
                tax:<span className="text-title ps-3">${Tax}</span>
              </h5>
            </strong>
            <strong>
              <h3 className="text-blue text-title mb-4">
                total:<span className="ps-3">${Total}</span>
              </h3>
            </strong>
            <Button onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
