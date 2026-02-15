import FeedbackSkeleton from "@/components/skeleton/FeedbackSkeleton";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center sm:place-items-stretch">
      {[...Array(12)].map((_, i) => (
        <FeedbackSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
