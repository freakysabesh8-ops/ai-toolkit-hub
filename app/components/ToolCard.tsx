"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ToolCard({ tool }: any) {
  const [user, setUser] = useState<any>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    async function loadFavorite() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      if (!user) return;

      const { data } = await supabase
        .from("favorites")
        .select("id")
        .eq("user_id", user.id)
        .eq("tool_id", tool.id)
        .maybeSingle();

      setFavorite(!!data);
    }

    loadFavorite();
  }, [tool.id]);

  async function toggleFavorite() {

    console.log("Heart clicked");
    if (!user) {
      alert("Please sign in first.");
      return;
    }

    if (favorite) {
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("tool_id", tool.id);

      if (!error) setFavorite(false);
    } else {
      const { error } = await supabase
        .from("favorites")
        .insert({
          user_id: user.id,
          tool_id: tool.id,
        });

      if (!error) setFavorite(true);
    }
  }
    return (
      <div
       className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/50
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
    >

    {/* Glow */}

    <div
      className="
        absolute
        -right-20
        -top-20
        h-48
        w-48
        rounded-full
        bg-blue-500/20
        blur-3xl
        transition
        group-hover:bg-purple-500/30
      "
    />



    {/* Favorite */}

    <button
      onClick={toggleFavorite}
      className="
        absolute
        right-5
        top-5
        z-10
        text-2xl
        transition
        hover:scale-125
      "
    >
      {favorite ? "❤️" : "🤍"}
    </button>




    {/* Header */}

    <div className="
      relative
      flex
      items-center
      gap-4
    ">


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
            shadow-lg
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





      <div className="flex-1">

        <h3
          className="
            text-xl
            font-bold
            text-white
          "
        >
          {tool.name}
        </h3>


        <span
          className="
            mt-2
            inline-block
            rounded-full
            border
            border-white/10
            bg-white/5
            px-3
            py-1
            text-xs
            text-gray-300
          "
        >
          {tool.category}
        </span>


      </div>





      <span
        className="
          rounded-full
          bg-yellow-500/20
          px-3
          py-1
          text-sm
          font-bold
          text-yellow-400
        "
      >
        ⭐ {tool.rating}
      </span>


    </div>






    {/* Description */}

    <p
      className="
        mt-6
        line-clamp-3
        text-sm
        leading-7
        text-gray-400
      "
    >
      {tool.description}
    </p>






    {/* Pricing */}

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
          bg-green-500/10
          px-4
          py-1
          text-sm
          font-semibold
          text-green-400
        "
      >
        {tool.pricing}
      </span>


      <span className="text-xs text-gray-500">
        AI Marketplace
      </span>

    </div>







    {/* Actions */}

    <div
      className="
        mt-8
        flex
        gap-3
      "
    >

      <Link
        href={`/tools/${tool.slug}`}
        className="
          flex-1
          rounded-xl
          bg-gradient-to-r
          from-blue-500
          to-purple-600
          py-3
          text-center
          font-semibold
          transition
          hover:scale-105
        "
      >
        Details →
      </Link>




      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex-1
          rounded-xl
          border
          border-white/10
          bg-white/5
          py-3
          text-center
          transition
          hover:border-blue-500
        "
      >
        Visit ↗
      </a>


    </div>


  </div>
 );}