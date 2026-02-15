import FeedbackCard from "@/components/card/feedbackCard";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

export const GetFeedback = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
    // cache: "force-cache",
    next: { tags: ["feedbacks"], revalidate: 60 },
  });

  if (!data.ok) {
    return { message: "Failed to this fetch" };
  }

  const feedbacks = await data.json();
  return feedbacks;
};

const page = async () => {
  const feedbacks = (await GetFeedback()) || [];

  return (
    <div>
      {/* title */}
      <p className="text-5xl text-center py-4">
        Total <span className="text-yellow-400">{feedbacks?.length}</span>{" "}
        Feedbacks Found
      </p>
      <Link
        href={"/feedback/add"}
        className="bg-yellow-600 text-white p-2 rounded-full cursor-pointer mb-3 inline-block"
      >
        + New Feedback
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbacks?.map((fb) => (
          <FeedbackCard feedback={fb} key={fb._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
