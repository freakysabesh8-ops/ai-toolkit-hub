import { notFound } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import Link from "next/link";
import type { Metadata } from "next";
import AdBanner from "@/app/components/AdBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const { data: tool } = await supabase
    .from("tools")
    .select("name, description, image")
    .eq("slug", slug)
    .single();


  if (!tool) {
    return {
      title: "AI Tool Not Found",
    };
  }


  return {
    title: `${tool.name} - AI Toolkit Hub`,
    
    description: tool.description,

    openGraph: {
      title: `${tool.name} - AI Toolkit Hub`,
      description: tool.description,
      images: tool.image ? [tool.image] : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - AI Toolkit Hub`,
      description: tool.description,
      images: tool.image ? [tool.image] : [],
    },
  };
}


export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug:string }>;
}) {


  const { slug } = await params;


  const { data: tool } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", slug)
    .single();



  if (!tool) {
    notFound();
  }



  const { data: relatedTools } = await supabase
    .from("tools")
    .select("*")
    .eq("category", tool.category)
    .neq("slug", tool.slug)
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


      <div
        className="
          mx-auto
          max-w-6xl
        "
      >


        {/* Hero Card */}

        <section
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            p-8
            backdrop-blur-xl
            md:p-12
          "
        >



          <div
            className="
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-center
            "
          >



            {/* Logo */}

            <div
              className="
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-3xl
                bg-white
                p-6
              "
            >

              <img
                src={tool.image}
                alt={tool.name}
                className="
                  h-full
                  w-full
                  object-contain
                "
              />

            </div>





            <div className="flex-1">


              <div
                className="
                  inline-flex
                  rounded-full
                  bg-blue-500/20
                  px-4
                  py-2
                  text-sm
                  text-blue-300
                "
              >
                🚀 AI Tool
              </div>



              <h1
                className="
                  mt-5
                  text-5xl
                  font-extrabold
                  md:text-6xl
                "
              >
                {tool.name}
              </h1>




              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-3
                "
              >

                <span className="badge">
                  {tool.category}
                </span>

                <span className="badge">
                  ⭐ {tool.rating}
                </span>

                <span className="badge">
                  {tool.pricing}
                </span>

              </div>




              <a
                href={tool.link}
                target="_blank"
                className="
                  mt-8
                  inline-block
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  px-10
                  py-4
                  font-bold
                  transition
                  hover:scale-105
                "
              >
                Try {tool.name} →
              </a>



            </div>



          </div>






          {/* Description */}

          <div className="mt-12">


            <h2 className="text-3xl font-bold">
              About {tool.name}
            </h2>


            <p
              className="
                mt-4
                text-lg
                leading-8
                text-gray-300
              "
            >
              {tool.description}
            </p>


          </div>





          {/* Features */}

          {tool.features?.length > 0 && (

            <div className="mt-12">

              <h2 className="text-3xl font-bold">
                ✨ Features
              </h2>


              <div
                className="
                  mt-6
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >

              {tool.features.map((item:string)=>(
                
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
                >
                  ✅ {item}
                </div>

              ))}

              </div>

            </div>

          )}







          {/* Pros Cons */}

          <div
            className="
              mt-14
              grid
              gap-10
              md:grid-cols-2
            "
          >


            <div>

              <h2 className="
                text-3xl
                font-bold
                text-green-400
              ">
                ✅ Pros
              </h2>


              {tool.pros?.map((item:string)=>(
                <p
                  key={item}
                  className="mt-3 text-gray-300"
                >
                  • {item}
                </p>
              ))}

            </div>




            <div>

              <h2 className="
                text-3xl
                font-bold
                text-red-400
              ">
                ❌ Cons
              </h2>


              {tool.cons?.map((item:string)=>(
                <p
                  key={item}
                  className="mt-3 text-gray-300"
                >
                  • {item}
                </p>
              ))}

            </div>


          </div>







        </section>

        <AdBanner />








        {/* Related Tools */}

        {relatedTools?.length > 0 && (

        <section className="mt-20">


          <h2
            className="
              mb-8
              text-4xl
              font-bold
            "
          >
            🤖 Related AI Tools
          </h2>



          <div
            className="
              grid
              gap-6
              md:grid-cols-3
            "
          >

          {relatedTools.map((item)=>(
            
            <Link
              key={item.id}
              href={`/tools/${item.slug}`}
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

              <img
                src={item.image}
                className="
                  h-14
                  w-14
                  rounded-xl
                  bg-white
                  p-2
                "
              />

              <h3 className="
                mt-5
                text-xl
                font-bold
              ">
                {item.name}
              </h3>


              <p className="
                mt-2
                text-gray-400
              ">
                {item.description}
              </p>


            </Link>

          ))}


          </div>


        </section>

        )}



      </div>

    </main>

  );
}