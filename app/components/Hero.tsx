export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-black px-6 py-28 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          🚀 Discover 10,000+ AI Tools
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Discover the
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}Best AI Tools{" "}
          </span>
          for Every Task
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
          Explore, compare and discover powerful AI tools for coding,
          writing, design, productivity, marketing, video editing,
          education and much more.
        </p>

        {/* Search */}
        <div className="mx-auto mt-12 flex max-w-3xl rounded-2xl border border-gray-800 bg-gray-900 p-2 shadow-2xl">

          <input
            type="text"
            placeholder="Search AI tools..."
            className="flex-1 rounded-xl bg-transparent px-5 py-4 text-lg outline-none"
          />

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            Search
          </button>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            Explore Tools
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-blue-500">
            Submit Tool
          </button>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              500+
            </h2>

            <p className="mt-2 text-gray-400">
              AI Tools
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              30+
            </h2>

            <p className="mt-2 text-gray-400">
              Categories
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              100K+
            </h2>

            <p className="mt-2 text-gray-400">
              Monthly Visits
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              4.9★
            </h2>

            <p className="mt-2 text-gray-400">
              Average Rating
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}