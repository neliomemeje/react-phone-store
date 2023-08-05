import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    details: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    subTotal: 0,
    Tax: 0,
    Total: 0,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const newProducts = storeProducts.map((item) => {
      return Object.assign({}, item);
    });
    this.setState({ products: newProducts });
  };

  getItem = (id) => {
    const tempProducts = [...this.state.products];
    const product = tempProducts.find((item) => item.id === id);
    return product;
  };

  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState({ details: product });
  };

  addToCart = (id) => {
    const product = this.getItem(id);
    product.count = 1;
    product.inCart = true;
    const price = product.price;
    product.total = price;
    this.setState({ cart: [...this.state.cart, product] }, () =>
      this.getTotals()
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  updateCount = (id, type) => {
    const tempCart = [...this.state.cart];
    const product = tempCart.find((item) => item.id === id);
    if (type === "inc") {
      product.count += 1;
    } else if (type === "dec") {
      if (product.count === 1) return;
      product.count -= 1;
    }

    product.total = product.count * product.price;
    this.setState({ cart: [...tempCart] }, () => this.getTotals());
  };

  removeProduct = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const product = this.getItem(id);
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    this.setState({ cart: [...tempCart] }, () => this.getTotals());
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.getTotals();
      this.getProducts();
    });
  };
  getTotals = () => {
    const tempCart = [...this.state.cart];
    let subTotal = 0;

    tempCart.map((item) => (subTotal += item.total));

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState({ subTotal: subTotal, Tax: tax, Total: total });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          removeProduct: this.removeProduct,
          updateCount: this.updateCount,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
