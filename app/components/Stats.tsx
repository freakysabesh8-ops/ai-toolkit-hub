import { supabase } from "@/lib/supabase";

export default async function Stats() {
  const { data: tools } = await supabase
    .from("tools")
    .select("category,rating");

  const totalTools = tools?.length ?? 0;

  const totalCategories = new Set(
    tools?.map((tool) => tool.category)
  ).size;

  const averageRating =
    tools && tools.length > 0
      ? (
          tools.reduce(
            (sum, tool) => sum + (tool.rating ?? 0),
            0
          ) / tools.length
        ).toFixed(1)
      : "0.0";

  const stats = [
    { number: totalTools, label: "AI Tools" },
    { number: totalCategories, label: "Categories" },
    { number: averageRating + "★", label: "Average Rating" },
    { number: "Updated", label: "Every Day" },
  ];

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-8 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h2 className="text-4xl font-bold text-blue-500">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}