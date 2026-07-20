import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function FeaturedTool() {
  const { data } = await supabase
    .from("tools")
    .select("*")
    .eq("featured", true)
    .order("rating", { ascending: false })
    .limit(1)
    .single();

  if (!data) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 p-10 text-white">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            ⭐ Featured AI Tool
          </span>

          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">

            {data.image && (
              <img
                src={data.image}
                alt={data.name}
                className="h-28 w-28 rounded-2xl bg-white p-4"
              />
            )}

            <div className="flex-1">
              <h2 className="text-5xl font-bold">
                {data.name}
              </h2>

              <p className="mt-4 text-lg text-white/90">
                {data.description}
              </p>

              <div className="mt-6 flex gap-6">
                <span>⭐ {data.rating}</span>
                <span>{data.pricing}</span>
              </div>

              <Link
                href={`/tools/${data.slug}`}
                className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-bold text-black"
              >
                Learn More →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}