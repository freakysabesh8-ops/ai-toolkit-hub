import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function FeaturedTool() {

  const { data } = await supabase
    .from("tools")
    .select("*")
    .eq("featured", true)
    .order("rating", { ascending: false })
    .limit(1)
    .single();


  if (!data) return null;



  return (

    <section className="py-20">


      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">


        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-blue-600/30
            via-purple-600/20
            to-cyan-500/20
            p-8
            backdrop-blur-xl
            md:p-12
          "
        >



          {/* Glow */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-blue-400/30
              blur-3xl
            "
          />






          {/* Badge */}

          <span
            className="
              relative
              inline-flex
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              backdrop-blur
            "
          >
            ⭐ Featured AI Tool
          </span>








          <div
            className="
              relative
              mt-10
              flex
              flex-col
              gap-10
              md:flex-row
              md:items-center
            "
          >




            {/* Logo */}

            {data.image ? (

              <div
                className="
                  flex
                  h-40
                  w-40
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-2xl
                "
              >

                <img
                  src={data.image}
                  alt={data.name}
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />

              </div>


            ) : (

              <div
                className="
                  flex
                  h-40
                  w-40
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white/20
                  text-6xl
                "
              >
                🤖
              </div>

            )}








            {/* Content */}

            <div className="flex-1">


              <h2
                className="
                  text-4xl
                  font-extrabold
                  md:text-6xl
                "
              >
                {data.name}
              </h2>




              <p
                className="
                  mt-5
                  max-w-3xl
                  text-lg
                  leading-8
                  text-white/80
                "
              >
                {data.description}
              </p>






              {/* Stats */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-4
                "
              >


                <div
                  className="
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                  "
                >
                  ⭐ {data.rating}
                </div>



                <div
                  className="
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                  "
                >
                  {data.pricing}
                </div>



                <div
                  className="
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                  "
                >
                  🔥 Trending AI
                </div>


              </div>







              {/* Button */}

              <Link
                href={`/tools/${data.slug}`}
                className="
                  mt-10
                  inline-flex
                  rounded-2xl
                  bg-white
                  px-10
                  py-4
                  font-bold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Explore Tool →
              </Link>



            </div>



          </div>


        </div>


      </div>


    </section>

  );
}