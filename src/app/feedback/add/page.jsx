import AddFeedbackForm from "@/components/form/AddFeedbackForm";
import React from "react";

const page = () => {
  return (
    <div>
      {/* title */}
      <p className="text-5xl text-center py-4">Add A Feedback</p>
      <AddFeedbackForm />
    </div>
  );
};

export default page;
