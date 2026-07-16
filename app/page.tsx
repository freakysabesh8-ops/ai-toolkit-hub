import Navbar from "./components/Navbar";
import ToolCard from "./components/ToolCard";
import SearchBar from "./components/SearchBar";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { tools } from "./data/tools";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Hero />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-10">
            🔥 Featured AI Tools
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                description={tool.description}
                link={tool.link}
              />
            ))}
          </div>
        </div>

        <CategorySection />
      </main>

      <Footer />
    </>
  );
}