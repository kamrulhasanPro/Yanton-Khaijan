import Image from "next/image";

export default function ReviewCard({ review }) {
  const { user, photo, rating, review: text, date, likes } = review;

  return (
    <div className="bg-gray-900 border border-white/10 rounded-xl p-5 shadow-md flex flex-col ">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
          width={48}
          height={48}
        />

        <div>
          <h4 className="text-white font-semibold">{user}</h4>
          <p className="text-xs text-gray-400">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-600"}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-300 leading-relaxed mb-4 grow">{text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>👍 {likes.length} likes</span>
        <span className="italic">Verified Customer</span>
      </div>
    </div>
  );
}
