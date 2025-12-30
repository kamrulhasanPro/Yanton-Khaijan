export default function ReviewCardSkeleton() {
  return (
    <div className="bg-gray-900 border border-white/10 rounded-xl p-5 shadow-md animate-pulse">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-700" />
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-700 rounded" />
          <div className="w-20 h-3 bg-gray-800 rounded" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-700 rounded" />
        ))}
      </div>

      {/* Review text */}
      <div className="space-y-2 mb-4">
        <div className="w-full h-4 bg-gray-700 rounded" />
        <div className="w-11/12 h-4 bg-gray-700 rounded" />
        <div className="w-9/12 h-4 bg-gray-700 rounded" />
      </div>

      {/* Footer */}
      <div className="flex justify-between">
        <div className="w-24 h-4 bg-gray-700 rounded" />
        <div className="w-32 h-4 bg-gray-800 rounded" />
      </div>
    </div>
  );
}
