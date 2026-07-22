"use client";

import { useMemo, useState } from "react";
import ToolCard from "./ToolCard";
import SearchBar from "./SearchBar";

export default function HomeClient({
  tools,
}: {
  tools: any[];
}) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");



  const filteredTools = useMemo(() => {

    return tools.filter((tool) => {


      const text =
        `${tool.name} ${tool.description}`
          .toLowerCase();


      const matchesSearch =
        text.includes(search.toLowerCase());



      const matchesCategory =
        !category ||
        tool.category === category;



      const matchesPricing =
        !pricing ||
        tool.pricing === pricing;



      return (
        matchesSearch &&
        matchesCategory &&
        matchesPricing
      );

    });


  }, [
    tools,
    search,
    category,
    pricing
  ]);





  return (

    <div>


      {/* Search */}

      <SearchBar
        value={search}
        onChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        pricing={pricing}
        onPricingChange={setPricing}
      />







      {/* Results Header */}

      <div
        className="
          mt-12
          mb-8
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            🚀 AI Tools Directory
          </h2>


          <p
            className="
              mt-2
              text-gray-400
            "
          >
            Explore the best AI tools available
          </p>

        </div>




        <div
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2
            text-sm
            text-blue-300
          "
        >

          {filteredTools.length} Tools

        </div>


      </div>







      {/* Tool Grid */}

      {filteredTools.length > 0 ? (


        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {filteredTools.map((tool)=>(

            <div
              key={tool.id}
              className="
                animate-in
                fade-in
                duration-500
              "
            >

              <ToolCard
                tool={tool}
              />

            </div>

          ))}


        </div>



      ) : (


        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-12
            text-center
          "
        >

          <div className="text-5xl">
            🔍
          </div>


          <h3
            className="
              mt-5
              text-2xl
              font-bold
              text-white
            "
          >
            No AI tools found
          </h3>


          <p
            className="
              mt-3
              text-gray-400
            "
          >
            Try another search or category.
          </p>


        </div>


      )}


    </div>

  );
}