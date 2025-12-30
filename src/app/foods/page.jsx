import FoodCard from "@/components/card/FoodCard";
import Image from "next/image";
import CartItems from "./CartItems";
import SearchFood from "@/components/SearchFood";

export const metadata = {
  title: "All Foods",
  description: "All of the Foods Bast of the Noakhali City.",
};

export default async function Foods({ searchParams }) {
  const { search = "" } = await searchParams;
  console.log(search);
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, {next: {revalidate: 15}}
  );
  const foods = await res.json();

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        {/* title */}
        <p className="text-5xl text-center py-4">
          Total <span className="text-yellow-400">{foods?.foods?.length}</span>{" "}
          Foods Found
        </p>

        {/* search */}
        <SearchFood />
      </div>

      <div className="flex gap-4">
        {/* foods */}
        {foods?.foods?.length === 0 ? (
          <p className="flex-4 text-center text-2xl text-gray-400">Not found any foods</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center flex-4">
            {foods?.foods?.map((food) => (
              <FoodCard food={food} key={food.id} />
            ))}
          </div>
        )}

        {/* cart items */}
        <div className="flex-1 border-2 rounded-2xl p-4">
          <p className="text-2xl font-bold">Cart Items</p>
          <hr />
          <CartItems />
        </div>
      </div>
    </section>
  );
}
