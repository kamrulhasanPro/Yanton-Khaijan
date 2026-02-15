const FeedbackSkeleton = () => {
  return (
    <div className="bg-gray-900 border border-gray-700 shadow-md rounded-xl p-5 animate-pulse">
      {/* Review text (same as <p />) */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-11/12"></div>
        <div className="h-4 bg-gray-700 rounded w-8/12"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Date */}
        <div className="h-3 bg-gray-700 rounded w-28"></div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <div className="h-5 w-5 bg-gray-700 rounded"></div>
          <div className="h-5 w-5 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSkeleton;
