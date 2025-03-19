import { useContext } from "react";
import { Cart as CartContext } from "../components/CartContext";

export function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
