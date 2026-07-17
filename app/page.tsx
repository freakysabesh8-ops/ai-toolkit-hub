"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolCard from "./components/ToolCard";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import { tools } from "./data/tools";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    "Writing",
    "Coding",
    "Image",
    "Video",
    "Productivity",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Hero search={search} setSearch={setSearch} />

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-8">
            🔥 Featured AI Tools
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-2 rounded-full transition ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No AI tools found.
            </p>
          )}
        </section>

        <CategorySection />
      </main>

      <Footer />
    </>
  );
}