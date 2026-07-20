import { supabase } from "../../lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase.from("tools").select("*");

  if (error) {
    return (
      <main className="p-10">
        <h1>Error</h1>
        <pre>{error.message}</pre>
      </main>
    );
  }

  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Supabase Connected ✅
      </h1>

      {data?.map((tool) => (
        <div
          key={tool.id}
          className="mb-4 rounded-xl border border-gray-700 p-4"
        >
          <h2 className="text-xl font-bold">{tool.name}</h2>
          <p>{tool.category}</p>
          <p>{tool.pricing}</p>
        </div>
      ))}
    </main>
  );
}