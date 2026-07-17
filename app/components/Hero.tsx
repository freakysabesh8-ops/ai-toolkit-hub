"use client";

import SearchBar from "./SearchBar";

type HeroProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Hero({ search, setSearch }: HeroProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">
        🚀 AI Toolkit Hub
      </h1>

      <p className="max-w-2xl text-gray-300 text-lg">
        Discover the best AI tools for writing, coding, designing, video editing,
        marketing, and productivity—all in one place.
      </p>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="mt-10 flex gap-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
          Explore Tools
        </button>

        <button className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black">
          Read Blog
        </button>
      </div>
    </section>
  );
}