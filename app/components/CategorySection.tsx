export default function CategorySection() {
  const categories = [
    "🤖 Chatbots",
    "🎨 Image AI",
    "🎥 Video AI",
    "💻 Coding AI",
    "✍️ Writing AI",
    "📈 Marketing AI",
    "🎙️ Voice AI",
    "📊 Productivity",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-xl bg-gray-900 p-6 text-center hover:bg-blue-600 transition cursor-pointer"
          >
            <h3 className="font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}