import { useContext } from "react";
import "./App.css";
import { Cart } from "./pages/Cart";
import { List } from "./pages/List";
import { Cart as CartContext } from "./components/CartContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const { cart } = useContext(CartContext);

  return (
    <div className="App">
      <AnimatePresence>
        <List />
        {cart.length ? <Cart /> : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
