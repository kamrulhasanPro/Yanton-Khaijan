import BackNavigate from "@/components/BackNavigate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export function generateStaticParams() {
  return [{ id: "52942" }, { id: "53033" }, { id: "53078" }];
}

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  const food = data?.details;
  return {
    title: food?.title,
    description: `${food?.category} Bast of the ${food?.area}`,
    openGraph: {
      images: [food?.foodImg],
    },
  };
};

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const data = await res.json();
  const food = data?.details;
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-bl from-[#0f172a] via-[#020617] to-black py-10 px-4 rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full ">
          <BackNavigate>
            <div className="bg-yellow-600 inline-block py-1 px-2 rounded-full hover:bg-yellow-400 transition mb-2">
              ⬅
            </div>
          </BackNavigate>
          <figure className="rounded-2xl overflow-hidden  shadow-xl h-[400px]">
            <Image
              src={food.foodImg}
              alt={food.title}
              className="object-cover hover:scale-105 transition duration-500 w-full h-full"
              width={300}
              height={50}
            />
          </figure>
        </div>

        {/* Content Section */}
        <div>
          {/* Badges */}
          <div className="flex gap-3 mb-4">
            <span className="px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600 font-medium">
              {food.category}
            </span>
            <span className="px-4 py-1 text-sm rounded-full bg-green-100 text-green-600 font-medium">
              {food.area}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-4">{food.title}</h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            🍝 A classic <strong>{food.area}</strong> pasta dish made with
            creamy Alfredo sauce, perfectly cooked fettuccine, and rich flavors
            that melt in your mouth. Ideal for lunch or dinner with a premium
            taste experience.
          </p>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-green-600">
              ৳ {food.price}
            </span>
            <span className="text-sm text-gray-500">
              (Inclusive of all taxes)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-lg">
              🍽 Order Now
            </button>

            <Link
              href={food.video}
              target="_blank"
              className="px-6 py-3 rounded-xl border border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition"
            >
              ▶ Watch Recipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
