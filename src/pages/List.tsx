import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cart as CartContext } from "../components/CartContext";
import { API_URL } from "../config/api";

export type ProductProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
};

export function List() {
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setItLoading] = useState(false);

  useEffect(() => {
    setItLoading(true);
    async function asyncFetch() {
      const response = await fetch(`${API_URL}/products`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setItLoading(false);
      setProducts(data);
    }

    asyncFetch();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  function addToCart(product: ProductProps) {
    setCart([...cart, product]);
  }

  return (
    <main>
      <h1>
        Pelico Store <Link to={"/cart"}>🛍️</Link>
      </h1>

      <ul>
        {products.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            <button onClick={() => addToCart(product)}>+</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
