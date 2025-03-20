import { useContext } from "react";
import { Cart as CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import { getTotal, mergeProducts } from "../utils/utils";
import { motion } from "framer-motion";
import { ProductProps } from "./List";

export function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const mergedCart = mergeProducts(cart);

  function removeProduct(item: ProductProps) {
    const cartItem = cart.find((product) => product.title === item.title);

    if (cartItem) {
      const index = cart.indexOf(cartItem);
      const filteredCart =
        index !== -1
          ? [...cart.slice(0, index), ...cart.slice(index + 1)]
          : cart;
      setCart(filteredCart);
    } else {
      throw new Error("Item not found");
    }
  }

  return (
    <motion.div
      className="cart"
      layout
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h1>
        <Link to={"/cart"}>🛒</Link> Cart
      </h1>
      <div className="cart-list">
        <ul>
          {mergedCart.map((item) => (
            <li key={item.title.toLowerCase()}>
              <button onClick={() => removeProduct(item)}>❌</button>
              <span className="cart-item-title">
                {item.title}{" "}
                <span>{item.count > 1 ? `x${item.count}` : null}</span>
              </span>

              <span className="cart-item-price">{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="cart-total">€{getTotal(cart)}</div>
      </div>
    </motion.div>
  );
}
