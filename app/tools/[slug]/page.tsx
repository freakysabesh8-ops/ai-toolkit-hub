import { notFound } from "next/navigation";
import { tools } from "../../data/tools";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tool = tools.find((t) => t.slug === slug);

  if (!tool) notFound();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
          {/* Header */}
          <div className="flex items-center gap-6">
            <img
              src={tool.image}
              alt={tool.name}
              className="h-20 w-20 rounded-xl bg-white p-2"
            />

            <div>
              <h1 className="text-5xl font-bold">{tool.name}</h1>

              <p className="mt-2 text-blue-400">{tool.category}</p>

              <div className="mt-3 flex gap-4">
                <span>⭐ {tool.rating}</span>
                <span className="text-green-400">
                  💰 {tool.pricing}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-300">
            {tool.description}
          </p>

          {/* Pros & Cons */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-green-400">
                ✅ Pros
              </h2>

              <ul className="space-y-2">
                {tool.pros.map((pro) => (
                  <li key={pro}>• {pro}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-red-400">
                ❌ Cons
              </h2>

              <ul className="space-y-2">
                {tool.cons.map((con) => (
                  <li key={con}>• {con}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">
              Related AI Tools
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {tools
                .filter(
                  (t) =>
                    t.category === tool.category &&
                    t.slug !== tool.slug
                )
                .map((related) => (
                  <a
                    key={related.id}
                    href={`/tools/${related.slug}`}
                    className="rounded-xl border border-gray-800 bg-gray-800 p-5 transition hover:border-blue-500"
                  >
                    <img
                      src={related.image}
                      alt={related.name}
                      className="h-12 w-12 rounded-lg bg-white p-2"
                    />

                    <h3 className="mt-4 text-xl font-bold">
                      {related.name}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {related.description}
                    </p>
                  </a>
                ))}
            </div>
          </div>

          {/* Visit Button */}
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Visit Official Website →
          </a>
        </div>
      </div>
    </main>
  );
}