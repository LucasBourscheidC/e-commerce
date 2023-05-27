import React, { createContext, useState } from "react";

export const CartProductsContext = createContext();

export default function CartProductsProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartProductsContext.Provider value={{cartProducts, setCartProducts}}>
      {children}
    </CartProductsContext.Provider>
  );
}

