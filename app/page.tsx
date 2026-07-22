import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEOSection from "./components/SEOSection";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import { supabase } from "../lib/supabase";
import CategorySection from "./components/CategorySection";
import Trending from "./components/Trending";
import FeaturedTool from "./components/FeaturedTool";
import HomeClient from "./components/HomeClient";
import AdBanner from "./components/AdBanner";

export default async function Home() {

  const { data: tools, error } = await supabase
    .from("tools")
    .select("*")
    .order("id");


  if (error) {
    return (
      <main className="
        min-h-screen 
        bg-black 
        p-10 
        text-white
      ">
        <h1 className="
          text-3xl 
          font-bold 
          text-red-500
        ">
          Failed to load AI tools
        </h1>

        <p className="mt-4 text-gray-400">
          {error.message}
        </p>

      </main>
    );
  }


  return (
    <div className="
      min-h-screen
      bg-black
      text-white
      overflow-hidden
    ">


      {/* Navigation */}

      <Navbar />



      {/* Premium Hero */}

      <Hero />

      <AdBanner />



      {/* Website credibility */}

      <Stats />



      {/* Trending */}

      <section className="
        mx-auto 
        max-w-7xl 
        px-6 
        py-20
      ">
        <Trending />
      </section>




      {/* Featured AI */}

      <section className="
        mx-auto 
        max-w-7xl 
        px-6 
        py-10
      ">
        <FeaturedTool />
      </section>





      {/* Categories */}

      <section className="
        mx-auto 
        max-w-7xl 
        px-6 
        py-20
      ">
        <CategorySection />
      </section>





      {/* All Tools Marketplace */}


      <section className="
        mx-auto
        max-w-7xl
        px-6
        py-20
      ">


        <div className="text-center mb-12">

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            bg-gradient-to-r
            from-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          ">
            Explore AI Tools
          </h1>


          <p className="
            mt-4
            text-gray-400
          ">
            Discover the best AI tools for productivity,
            creativity and business.
          </p>


        </div>



        <HomeClient 
          tools={tools ?? []}
        />


      </section>





      {/* SEO + AdSense Content */}

      <section className="
        border-t
        border-white/10
      ">

        <SEOSection />

      </section>



      <Footer />

    </div>
  );
}