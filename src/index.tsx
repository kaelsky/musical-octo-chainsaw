import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { List } from "./pages/List";
import { Product } from "./pages/Product";
import { CartContext } from "./components/CartContext";
import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <CartContext>
      <BrowserRouter>
        <Routes>
          <Route element={<Cart />} path="/cart" />
          <Route element={<List />} path="/products" />
          <Route element={<Product />} path="/products/:productId" />
          <Route element={<Navigate to="/list" />} path="*" />
        </Routes>
      </BrowserRouter>
    </CartContext>
  </StrictMode>,
  document.getElementById("root")
);
