import React from "react";
import { ProductConsumer } from "../../context";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import CartTotals from "./CartTotals";

function Cart() {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart, updateCount, removeProduct } = value;
          if (cart.length > 0) {
            return (
              <>
                <h1 className="text-center text-blue text-capitalize text-title my-5">
                  your cart
                </h1>
                <CartColumn />
                <CartList
                  cart={cart}
                  updateCount={updateCount}
                  removeProduct={removeProduct}
                />
                <CartTotals value={value} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
}

export default Cart;
