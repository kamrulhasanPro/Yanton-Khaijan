export default function FoodCardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-gray-900 shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-56 bg-gray-800" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-4">
        {/* Category */}
        <div className="w-20 h-5 rounded-full bg-gray-800" />

        {/* Title */}
        <div className="w-3/4 h-5 rounded bg-gray-700" />

        {/* Price */}
        <div className="w-16 h-6 rounded bg-gray-700" />

        {/* Buttons */}
        <div className="flex justify-between items-center gap-3 pt-2">
          {/* Add to Cart button */}
          <div className="w-28 h-9 rounded-lg bg-gray-700" />

          {/* View Details button */}
          <div className="w-32 h-9 rounded-lg bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
