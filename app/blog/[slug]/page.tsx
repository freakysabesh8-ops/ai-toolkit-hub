import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import AdBanner from "@/app/components/AdBanner";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;


  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();


  if (error || !blog) {
    notFound();
  }



  const { data: relatedBlogs } = await supabase
    .from("blogs")
    .select("*")
    .neq("slug", slug)
    .limit(3);



  return (

    <main
      className="
        min-h-screen
        bg-black
        px-6
        py-16
        text-white
      "
    >

      <article
        className="
          mx-auto
          max-w-4xl
        "
      >


        {/* Blog Header */}

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >


          {blog.image && (

            <img
              src={blog.image}
              alt={blog.title}
              className="
                mb-8
                h-72
                w-full
                rounded-3xl
                object-cover
              "
            />

          )}



          <span
            className="
              rounded-full
              bg-blue-500/20
              px-4
              py-2
              text-sm
              text-blue-300
            "
          >
            📝 AI Article
          </span>




          <h1
            className="
              mt-6
              text-4xl
              font-extrabold
              md:text-6xl
            "
          >
            {blog.title}
          </h1>




          <p
            className="
              mt-5
              text-lg
              text-gray-400
            "
          >
            {blog.description}
          </p>






          <div
            className="
              mt-10
              leading-8
              text-gray-300
            "
          >
            {blog.content}
          </div>



        </div>




        {/* Related Blogs */}

        {relatedBlogs && relatedBlogs.length > 0 && (

          <section className="mt-16">


            <h2
              className="
                mb-8
                text-3xl
                font-bold
              "
            >
              📚 Related Articles
            </h2>



            <div
              className="
                grid
                gap-6
                md:grid-cols-3
              "
            >

              {relatedBlogs.map((item)=>(

                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    transition
                    hover:border-blue-500
                  "
                >

                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      text-gray-400
                    "
                  >
                    {item.description}
                  </p>


                </Link>

              ))}


            </div>


          </section>

        )}


      </article>

      <AdBanner />


    </main>

  );
}