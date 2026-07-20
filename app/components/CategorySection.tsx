import Link from "next/link";

const categories = [
  {
    name: "Writing",
    slug: "writing",
    emoji: "✍️",
  },
  {
    name: "Coding",
    slug: "coding",
    emoji: "💻",
  },
  {
    name: "Image",
    slug: "image",
    emoji: "🎨",
  },
  {
    name: "Video",
    slug: "video",
    emoji: "🎬",
  },
  {
    name: "Productivity",
    slug: "productivity",
    emoji: "⚡",
  },
];

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        📂 Browse Categories
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center transition hover:border-blue-500 hover:-translate-y-2"
          >
            <div className="text-5xl">{category.emoji}</div>

            <h3 className="mt-4 text-xl font-bold">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}