import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";
import { Card } from "../components/Card";
import { motion } from "framer-motion";

export type ProductProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
};

export function List() {
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
    return <div className="center">Loading...</div>;
  }

  return (
    <motion.div className="products" layout>
      <h1>
        <Link to={"/products"}>🛍️</Link> Web store application
      </h1>

      <div className="list">
        {products.map((product, index) => (
          <Card key={product.id} index={index} product={product} />
        ))}
      </div>
    </motion.div>
  );
}
