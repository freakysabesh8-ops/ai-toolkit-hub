import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function BlogPage() {

  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });


  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-5xl font-bold">
          📝 AI Tools Blog
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Latest AI guides, reviews and tutorials
        </p>


        <div className="
          mt-12
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        ">

          {blogs?.map((blog)=>(
            
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                hover:-translate-y-2
                hover:border-blue-500
              "
            >

              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    h-48
                    w-full
                    rounded-2xl
                    object-cover
                  "
                />
              )}


              <h2 className="
                mt-5
                text-2xl
                font-bold
              ">
                {blog.title}
              </h2>


              <p className="
                mt-3
                line-clamp-3
                text-gray-400
              ">
                {blog.description}
              </p>


              <span className="
                mt-5
                inline-block
                text-blue-400
              ">
                Read More →
              </span>


            </Link>

          ))}


        </div>

      </div>

    </main>
  );
}