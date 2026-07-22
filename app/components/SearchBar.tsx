"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  pricing: string;
  onPricingChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
  category,
  onCategoryChange,
  pricing,
  onPricingChange,
}: SearchBarProps) {
  return (
    <div className="mx-auto mt-10 max-w-6xl">

      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="🔍 Search AI tools..."
          className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-blue-500"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-blue-500"
        >
          <option value="">All Categories</option>
          <option>AI Chatbot</option>
          <option>Image Generator</option>
          <option>Video</option>
          <option>Coding</option>
          <option>Productivity</option>
          <option>Marketing</option>
        </select>

        {/* Pricing */}
        <select
          value={pricing}
          onChange={(e) => onPricingChange(e.target.value)}
          className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-blue-500"
        >
          <option value="">All Pricing</option>
          <option>Free</option>
          <option>Freemium</option>
          <option>Paid</option>
        </select>

      </div>

    </div>
  );
}