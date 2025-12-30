import Link from "next/link";
import AddToCard from "../buttons/AddToCard";
import Image from "next/image";

export default function FoodCard({ food }) {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-gray-900 shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        {/* <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
        /> */}
        <Image
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
          width={300}
          height={30}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Category */}
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-medium">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-white line-clamp-1">
          {title}
        </h2>

        {/* Price */}
        <p className="text-xl font-bold text-green-400">৳ {price}</p>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2 flex-wrap ">
          {/* Add to Cart */}
          <AddToCard food={food}></AddToCard>

          {/* View Details */}
          <Link
            href={`/foods/${id}`}
            className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition text-center"
          >
            👁 View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
