"use client";
import CartItemCard from "@/components/card/CartItemCard";
import { CartContext } from "@/contexts/CartProvider";
import React, { useContext } from "react";

const CartItems = () => {
  const { cartAdded } = useContext(CartContext);
  return (
    <section>
      <p>{cartAdded?.length} total added</p>
      <div className="space-y-3">
        {cartAdded.map((food) => (
          <CartItemCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};

export default CartItems;
