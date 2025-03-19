import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductProps } from "./List";

export function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    async function asyncFetch() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch product detail");
      }
      const data = await response.json();
      console.log(data);

      setProduct(data);
    }

    asyncFetch();
  }, [productId]);

  return (
    <div>
      Product Detail {productId}: {product?.title}
    </div>
  );
}
