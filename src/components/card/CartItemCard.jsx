import React from "react";
import RemoveCartItem from "../buttons/RemoveCartItem";

const CartItemCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;
  const name = title.split(" ").slice(0, 2).join(' ');
  return (
    <div className="flex gap-2 items-center justify-between bg-gray-900 p-2">
      <div className="flex items-center gap-2">
        <figure className="h-10 w-10 rounded-lg overflow-hidden">
          <img src={foodImg} alt="" className="object-center object-cover" />
        </figure>
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>

      {/* remove */}
      <RemoveCartItem id={id} />
    </div>
  );
};

export default CartItemCard;
