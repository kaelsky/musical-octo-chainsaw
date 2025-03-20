import { ProductProps } from "../pages/List";

export function getTotal(products: ProductProps[]) {
  return products.reduce(
    (total, product) => Math.round((total + product.price) * 100) / 100,
    0
  );
}

export function mergeProducts(products: ProductProps[]) {
  const productMap = new Map();

  products.forEach((product) => {
    const key = product.title.toLowerCase();
    if (productMap.has(key)) {
      productMap.get(key).count += 1;
    } else {
      productMap.set(key, { ...product, count: 1 });
    }
  });

  return [...productMap.values()];
}
