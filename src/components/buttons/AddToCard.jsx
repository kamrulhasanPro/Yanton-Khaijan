"use client";
import { CartContext } from "@/contexts/CartProvider";
import React, { useContext } from "react";

const AddToCard = ({ food }) => {
  const { cartAdded, setCartAdded } = useContext(CartContext);
  const handelCart = () => {
    alert("Cart Add Success");
    setCartAdded([food, ...cartAdded]);
  };

  const added = cartAdded.some((item) => item.id === food.id);
  return (
    // Add to Cart
    <button
      onClick={() => handelCart()}
      disabled={added}
      className="px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition cursor-pointer text-center disabled:bg-green-700 disabled:cursor-not-allowed"
    >
      🛒 {added ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCard;
