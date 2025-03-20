import { motion } from "framer-motion";
import { ProductProps } from "../pages/List";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cart as CartContext } from "../components/CartContext";

type CardProps = {
  index?: number;
  product: ProductProps;
  withDetail?: boolean;
};

export function Card({ index = 1, product, withDetail }: CardProps) {
  const { cart, setCart } = useContext(CartContext);

  function addToCart(product: ProductProps) {
    setCart([...cart, product]);
  }

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
    >
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-meta">
        <Link className="card-title" to={`/products/${product.id}`}>
          {product.title}
        </Link>
        {withDetail && (
          <div className="card-description">{product.description}</div>
        )}
        <div className="card-footer">
          <span>€{product.price}</span>
          <button onClick={() => addToCart(product)}>🛒 Add to cart</button>
        </div>
      </div>
    </motion.div>
  );
}
