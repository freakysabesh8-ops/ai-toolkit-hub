import Link from "next/link";

export default function ToolCard({ tool }: any) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      {/* Glow Effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />

      {/* Header */}
      <div className="relative flex items-center gap-4">

        {tool.image ? (
          <img
            src={tool.image}
            alt={tool.name}
            className="h-16 w-16 rounded-2xl bg-white p-2 object-contain"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-700 text-2xl">
            🤖
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">
            {tool.name}
          </h3>

          <span className="mt-1 inline-block rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
            {tool.category}
          </span>
        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
          ⭐ {tool.rating}
        </span>

      </div>

      {/* Description */}
      <p className="mt-6 line-clamp-3 text-sm leading-7 text-gray-400">
        {tool.description}
      </p>

      {/* Pricing */}
      <div className="mt-6 flex items-center justify-between">

        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400">
          {tool.pricing}
        </span>

        <span className="text-xs text-gray-500">
          AI Tool
        </span>

      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-3">

        <Link
          href={`/tools/${tool.slug}`}
          className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold transition hover:bg-blue-700"
        >
          View Details
        </Link>

        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-gray-700 py-3 text-center transition hover:border-blue-500 hover:bg-gray-800"
        >
          Visit ↗
        </a>

      </div>

    </div>
  );
}