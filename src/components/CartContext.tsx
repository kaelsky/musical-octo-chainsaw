import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/List";

type CartContextProps = {
  children: ReactNode;
};

export const Cart = createContext<{
  cart: ProductProps[];
  setCart: (param: ProductProps[]) => void;
}>({ cart: [], setCart: () => undefined });

export function CartContext({ children }: CartContextProps) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
}
