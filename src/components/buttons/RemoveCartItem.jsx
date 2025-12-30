"use client";
import { CartContext } from "@/contexts/CartProvider";
import React, { useContext } from "react";

const RemoveCartItem = ({ id }) => {
  const { cartAdded, setCartAdded } = useContext(CartContext);
  const removeItem = () => {
    const updatedItems = cartAdded.filter((item) => item.id !== id);

    setCartAdded([...updatedItems]);
  };
  return (
    <button onClick={removeItem} className="cursor-pointer">
      ❌
    </button>
  );
};

export default RemoveCartItem;
