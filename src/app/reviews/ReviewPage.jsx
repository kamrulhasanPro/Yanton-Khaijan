"use client";
import { Alkatra, Tiro_Bangla } from "next/font/google";
import ReviewCard from "@/components/card/ReviewCard";
import ReviewCardSkeleton from "@/components/skeleton/ReviewCardSkeleton";
import React, { useEffect, useState } from "react";
const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
});
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews", {
      next: { revalidate: 60 * 60 },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {[...Array(12)].map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <section className={tiroBangla.className}>
      <p className="text-5xl text-center py-4">
        Total <span className="text-yellow-400">{reviews?.length}</span> Reviews
        Found
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center sm:place-items-stretch">
        {reviews?.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsPage;
