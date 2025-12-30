export default function FoodDetailsSkeleton() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-bl from-[#0f172a] via-[#020617] to-black py-10 px-4 rounded-2xl animate-pulse">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Skeleton */}
        <div className="relative w-full">
          {/* Back button skeleton */}
          <div className="w-10 h-8 bg-gray-700 rounded-full mb-3" />

          <div className="h-[400px] rounded-2xl bg-gray-800 shadow-xl" />
        </div>

        {/* Content Skeleton */}
        <div>
          {/* Badges */}
          <div className="flex gap-3 mb-4">
            <div className="w-24 h-7 rounded-full bg-gray-700" />
            <div className="w-20 h-7 rounded-full bg-gray-700" />
          </div>

          {/* Title */}
          <div className="w-3/4 h-10 rounded bg-gray-700 mb-4" />

          {/* Description */}
          <div className="space-y-3 mb-6">
            <div className="w-full h-4 bg-gray-700 rounded" />
            <div className="w-11/12 h-4 bg-gray-700 rounded" />
            <div className="w-9/12 h-4 bg-gray-700 rounded" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-24 h-8 bg-gray-700 rounded" />
            <div className="w-32 h-4 bg-gray-800 rounded" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <div className="w-36 h-12 bg-gray-700 rounded-xl" />
            <div className="w-40 h-12 bg-gray-800 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
