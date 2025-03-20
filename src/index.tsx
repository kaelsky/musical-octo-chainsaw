import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { List } from "./pages/List";
import { Product } from "./pages/Product";
import { CartContext } from "./components/CartContext";
import { StrictMode } from "react";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <CartContext>
      <HashRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<List />} path="/products" />
          <Route element={<Product />} path="/products/:productId" />
        </Routes>
      </HashRouter>
    </CartContext>
  </StrictMode>,
  document.getElementById("root")
);
