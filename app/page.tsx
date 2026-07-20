import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToolCard from "./components/ToolCard";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import { supabase } from "../lib/supabase";
import CategorySection from "./components/CategorySection";
import Trending from "./components/Trending";
import FeaturedTool from "./components/FeaturedTool";
export default async function Home() {
  const { data: tools, error } = await supabase
    .from("tools")
    .select("*")
    .order("id");

  if (error) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-3xl font-bold text-red-500">
          Failed to load AI tools
        </h1>
        <p className="mt-4">{error.message}</p>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />

      <Trending />

      <FeaturedTool />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="mb-4 text-center text-5xl font-bold">
            🚀 AI Toolkit Hub
          </h1>

          <p className="mb-12 text-center text-gray-400">
            Browse AI tools directly from your Supabase database.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools?.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      </main>
      <Stats />
      <CategorySection />
      <Footer />
    </>
  );
}