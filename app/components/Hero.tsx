export default function Hero() {
  return (
    <section className="
      relative
      overflow-hidden
      py-32
      grid-bg
    ">

      {/* Background Glow */}

      <div className="
        absolute
        -top-40
        left-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-blue-600/20
        blur-[120px]
      "/>


      <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-purple-600/10
        via-transparent
        to-black
      "/>



      <div className="
        relative
        mx-auto
        max-w-7xl
        px-6
        text-center
      ">


        {/* Badge */}

        <div className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-400/30
          bg-blue-500/10
          px-5
          py-2
          text-sm
          text-blue-300
          backdrop-blur
        ">
          🚀 India's AI Tools Discovery Platform
        </div>




        {/* Heading */}

        <h1 className="
          mt-8
          text-5xl
          font-extrabold
          leading-tight
          md:text-7xl
        ">

          Find The Best

          <span className="
            block
            bg-gradient-to-r
            from-blue-400
            via-purple-500
            to-cyan-400
            bg-clip-text
            text-transparent
          ">
            AI Tools For Everything
          </span>


        </h1>





        {/* Description */}

        <p className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          md:text-xl
          text-gray-400
        ">

          Explore thousands of AI tools for
          writing, coding, design, marketing,
          business and productivity.

        </p>






        {/* Search Box */}

        <div className="
          mx-auto
          mt-12
          flex
          max-w-3xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-2
          backdrop-blur-xl
          shadow-2xl
        ">


          <input

            type="text"

            placeholder="🔍 Search 10,000+ AI tools..."

            className="
              flex-1
              bg-transparent
              px-6
              py-4
              text-white
              outline-none
            "

          />



          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              px-8
              font-semibold
              transition
              hover:scale-105
            "
          >
            Search
          </button>


        </div>






        {/* Buttons */}

        <div className="
          mt-8
          flex
          justify-center
          gap-4
          flex-wrap
        ">


          <button
            className="
              rounded-xl
              bg-white
              px-7
              py-3
              font-semibold
              text-black
              hover:scale-105
              transition
            "
          >
            Explore Tools →
          </button>



          <button
            className="
              rounded-xl
              border
              border-white/20
              bg-white/5
              px-7
              py-3
              font-semibold
              hover:bg-white/10
              transition
            "
          >
            Submit Tool
          </button>


        </div>







        {/* Trending AI Tags */}

        <div className="
          mt-14
          flex
          flex-wrap
          justify-center
          gap-3
        ">

          {
            [
              "🤖 ChatGPT",
              "🧠 Claude",
              "✨ Gemini",
              "🎨 Midjourney",
              "🎬 Runway",
              "🔎 Perplexity",
            ].map((item)=>(
              
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-2
                  text-sm
                  text-gray-300
                  backdrop-blur
                  hover:border-blue-400
                  transition
                "
              >
                {item}
              </span>

            ))
          }


        </div>



      </div>

    </section>
  );
}