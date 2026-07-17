export default function Newsletter() {
  return (
    <section className="mx-auto my-20 max-w-5xl rounded-2xl bg-blue-600 p-10 text-center">
      <h2 className="text-4xl font-bold">
        Stay Updated with AI
      </h2>

      <p className="mt-4">
        Get the latest AI tools and tutorials delivered to your inbox.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-lg px-5 py-3 text-black"
        />

        <button className="rounded-lg bg-black px-8 py-3">
          Subscribe
        </button>
      </div>
    </section>
  );
}