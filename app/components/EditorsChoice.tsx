import Link from "next/link";
import { tools } from "../data/tools";

export default function EditorsChoice() {
  const featured = tools[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-yellow-500 bg-gradient-to-r from-gray-900 to-black p-10">

        <span className="rounded-full bg-yellow-500 px-4 py-2 text-black font-bold">
          🏆 Editor's Choice
        </span>

        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center">

          <img
            src={featured.image}
            alt={featured.name}
            className="h-24 w-24 rounded-2xl bg-white p-3"
          />

          <div className="flex-1">
            <h2 className="text-4xl font-bold">
              {featured.name}
            </h2>

            <p className="mt-3 text-gray-300">
              {featured.description}
            </p>

            <div className="mt-4 flex gap-6">
              <span>⭐ {featured.rating}</span>
              <span className="text-green-400">
                💰 {featured.pricing}
              </span>
            </div>

            <Link
              href={`/tools/${featured.slug}`}
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
            >
              Explore Tool →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}