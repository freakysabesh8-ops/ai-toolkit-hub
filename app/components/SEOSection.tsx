export default function SEOSection() {
  const articles = [
    {
      title: "Best AI Tools in 2026",
      description:
        "Discover the most powerful AI tools for productivity, creativity, coding, and business.",
      slug: "best-ai-tools-2026",
    },
    {
      title: "Top AI Tools for Students",
      description:
        "Explore AI tools that help students learn faster, write better, and improve productivity.",
      slug: "ai-tools-for-students",
    },
    {
      title: "Best AI Tools for Content Creators",
      description:
        "Find AI tools for video editing, image generation, writing, and social media growth.",
      slug: "ai-tools-for-creators",
    },
  ];

  return (
    <section className="px-6 py-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Latest AI Guides & Resources
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="rounded-xl border border-gray-700 p-6 hover:border-white transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {article.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {article.description}
            </p>

            <a
              href={`/blog/${article.slug}`}
              className="text-blue-400"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}