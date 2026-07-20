"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "../data/tools";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Writing",
    "Coding",
    "Productivity",
    "Image",
    "Video",
  ];

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-center text-5xl font-bold">
          🤖 All AI Tools
        </h1>

        <p className="mb-10 text-center text-gray-400">
          Explore the best AI tools for writing, coding, image generation,
          video editing, productivity, and more.
        </p>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AI Tools Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-2 hover:border-blue-500"
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

              <div className="mt-4 flex items-center justify-between">
                <span>⭐ {tool.rating}</span>

                <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
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