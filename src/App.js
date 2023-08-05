import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Modal />
      </Router>
    </>
  );
}

export default App;
