import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "../../data/tools";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const filteredTools = tools.filter(
    (tool) => tool.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredTools.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-5xl font-bold">
          {category} AI Tools
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:border-blue-500"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="h-14 w-14 rounded-xl bg-white p-2"
              />

              <h2 className="mt-4 text-2xl font-bold">
                {tool.name}
              </h2>

              <p className="mt-2 text-gray-400">
                {tool.description}
              </p>

              <div className="mt-4 flex justify-between">
                <span>⭐ {tool.rating}</span>
                <span className="text-green-400">
                  {tool.pricing}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}