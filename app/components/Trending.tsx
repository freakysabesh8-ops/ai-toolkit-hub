import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function Trending() {
  const { data: tools } = await supabase
    .from("tools")
    .select("*")
    .eq("trending", true)
    .order("rating", { ascending: false })
    .limit(6);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold">
            🔥 Trending AI Tools
          </h2>

          <Link
            href="/tools"
            className="text-blue-500 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools?.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
            >
              <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">

                {tool.image && (
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="mb-4 h-14 w-14 rounded-xl bg-white p-2"
                  />
                )}

                <h3 className="text-2xl font-bold">
                  {tool.name}
                </h3>

                <p className="mt-2 text-gray-400">
                  {tool.description}
                </p>

                <div className="mt-4 flex justify-between text-sm">
                  <span>⭐ {tool.rating}</span>
                  <span className="text-green-400">
                    {tool.pricing}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}