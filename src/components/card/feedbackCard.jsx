import FeedbackAction from "../buttons/FeedbackAction";

const FeedbackCard = ({ feedback }) => {
  const { review, createdAt, _id } = feedback;
  
  return (
    <div className="bg-blue-900/50 shadow-md rounded-xl p-5 border">
      {/* Message */}
      <p className="text-gray-200 mb-4">{review}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Date */}
        <span className="text-sm text-gray-400">
          {new Date(createdAt).toLocaleDateString()}
        </span>

        {/* Actions */}
        <FeedbackAction id={_id}/>
      </div>
    </div>
  );
};

export default FeedbackCard;
