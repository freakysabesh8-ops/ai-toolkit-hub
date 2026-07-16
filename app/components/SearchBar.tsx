"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍 Search AI tools..."
        className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}