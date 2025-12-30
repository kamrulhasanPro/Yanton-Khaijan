'use client'
import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartAdded, setCartAdded] = useState([]);
  const cartInfo = { cartAdded, setCartAdded };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
