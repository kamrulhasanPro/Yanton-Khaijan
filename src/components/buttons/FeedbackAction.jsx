"use client";
import { revalidatePosts } from "@/app/action/action";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const FeedbackAction = ({ id }) => {
  const onDelete = async (id) => {
    try {
      prompt("Are you sure? yes or no");
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result) {
        revalidatePosts("feedbacks");
      }
      console.log(result);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        // onClick={onUpdate}
        className="text-blue-600 hover:text-blue-800 transition"
        title="Update"
      >
        <FaEdit />
      </button>

      <button
        onClick={() => onDelete(id)}
        title="Delete"
        className="cursor-pointer"
      >
        <FaTrash fill="red" />
      </button>
    </div>
  );
};

export default FeedbackAction;
