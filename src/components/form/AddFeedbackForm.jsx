"use client";
import { revalidatePosts } from "@/app/action/action";
import { useRouter } from "next/navigation";
import React from "react";

const AddFeedbackForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = e.target.message.value;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/feedback`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review }),
      },
    );
    const result = await response.json();
    if (result.insertedId) {
      alert(`
        insertedId: ${result.insertedId}
        acknowledge: ${result.acknowledged}
        `);
      revalidatePosts("feedbacks");
      e.target.reset();
      router.push("/feedback");
    }
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <textarea
        name="message"
        cols="30"
        rows="10"
        className="p-2 border rounded-lg focus:border-yellow-600 focus-within:outline-yellow-400 focus-within:right-0 w-full"
      ></textarea>
      <br />
      <button className="w-full bg-yellow-600 text-white p-2 rounded-full cursor-pointer">
        Add Feedback
      </button>
    </form>
  );
};

export default AddFeedbackForm;
