import Link from "next/link";

const categories = [
  {
    name: "Writing",
    slug: "writing",
    emoji: "✍️",
    description: "AI writing assistants & content creators",
    count: "500+ Tools",
  },
  {
    name: "Coding",
    slug: "coding",
    emoji: "💻",
    description: "AI coding assistants & developers",
    count: "300+ Tools",
  },
  {
    name: "Image",
    slug: "image",
    emoji: "🎨",
    description: "AI image generation & design",
    count: "700+ Tools",
  },
  {
    name: "Video",
    slug: "video",
    emoji: "🎬",
    description: "AI video creation & editing",
    count: "400+ Tools",
  },
  {
    name: "Productivity",
    slug: "productivity",
    emoji: "⚡",
    description: "Automate your daily workflow",
    count: "600+ Tools",
  },
];



export default function CategorySection() {

  return (

    <section className="
      mx-auto
      max-w-7xl
      px-6
      py-20
    ">



      {/* Heading */}

      <div className="mb-12 text-center">


        <h2
          className="
            text-4xl
            font-bold
            text-white
            md:text-5xl
          "
        >
          📂 Explore AI Categories
        </h2>


        <p
          className="
            mt-4
            text-gray-400
          "
        >
          Discover AI tools based on your needs
        </p>


      </div>







      {/* Cards */}

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-5
        "
      >


        {categories.map((category)=>(


          <Link

            key={category.slug}

            href={`/categories/${category.slug}`}

            className="group"

          >



            <div

              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-xl
                hover:shadow-blue-500/20
              "

            >




              {/* Glow */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  bg-blue-500/20
                  blur-3xl
                  transition
                  group-hover:bg-purple-500/30
                "
              />





              {/* Icon */}

              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-500/20
                  to-purple-500/20
                  text-5xl
                "
              >
                {category.emoji}
              </div>






              {/* Name */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-white
                "
              >
                {category.name}
              </h3>




              {/* Description */}

              <p
                className="
                  mt-3
                  text-sm
                  text-gray-400
                "
              >
                {category.description}
              </p>





              {/* Count */}

              <span
                className="
                  mt-5
                  inline-block
                  rounded-full
                  bg-white/10
                  px-4
                  py-1
                  text-xs
                  text-blue-300
                "
              >
                {category.count}
              </span>



            </div>


          </Link>


        ))}



      </div>


    </section>

  );
}