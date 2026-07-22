import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function Trending() {

  const { data: tools } = await supabase
    .from("tools")
    .select("*")
    .eq("trending", true)
    .order("rating", { ascending: false })
    .limit(6);



  return (

    <section className="py-20">

      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">


        {/* Heading */}

        <div className="
          mb-10
          flex
          items-center
          justify-between
        ">

          <div>

            <h2 className="
              text-4xl
              font-bold
              text-white
            ">
              🔥 Trending AI Tools
            </h2>


            <p className="
              mt-2
              text-gray-400
            ">
              Most popular AI tools right now
            </p>


          </div>



          <Link
            href="/tools"
            className="
              text-blue-400
              hover:text-blue-300
            "
          >
            View All →
          </Link>


        </div>







        {/* Cards */}

        <div className="
          flex
          gap-6
          overflow-x-auto
          pb-5
          scrollbar-hide
        ">


        {tools?.map((tool,index)=>(


          <Link
            key={tool.id}
            href={`/tools/${tool.slug}`}
            className="
              min-w-[320px]
              group
            "
          >


            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-2xl
                hover:shadow-blue-500/20
              "
            >



              {/* Rank */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  rounded-full
                  bg-yellow-500/20
                  px-3
                  py-1
                  text-sm
                  font-bold
                  text-yellow-400
                "
              >
                #{index + 1}
              </div>





              {/* Logo */}


              {tool.image ? (

                <img
                  src={tool.image}
                  alt={tool.name}
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-white
                    p-2
                    object-contain
                  "
                />

              ) : (

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-purple-600
                    text-3xl
                  "
                >
                  🤖
                </div>

              )}






              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {tool.name}
              </h3>





              <p
                className="
                  mt-3
                  line-clamp-3
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                {tool.description}
              </p>







              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                "
              >


                <span
                  className="
                    rounded-full
                    bg-yellow-500/10
                    px-3
                    py-1
                    text-sm
                    text-yellow-400
                  "
                >
                  ⭐ {tool.rating}
                </span>



                <span
                  className="
                    rounded-full
                    bg-green-500/10
                    px-3
                    py-1
                    text-sm
                    text-green-400
                  "
                >
                  {tool.pricing}
                </span>


              </div>





            </div>


          </Link>


        ))}



        </div>


      </div>


    </section>

  );
}