"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <header className="
      sticky top-0 z-50 
      border-b border-white/10
      bg-black/60 
      backdrop-blur-xl
    ">

      <div className="
        mx-auto flex max-w-7xl 
        items-center justify-between 
        px-6 py-4
      ">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="
            rounded-2xl 
            bg-gradient-to-br 
            from-blue-500 
            to-purple-600
            p-1
          ">
            <Image
              src="/logo/logo.png"
              alt="AI Toolkit Hub"
              width={42}
              height={42}
              className="rounded-xl"
              priority
            />
          </div>


          <div>
            <h1 className="
              text-xl md:text-2xl
              font-bold
              bg-gradient-to-r 
              from-blue-400 
              to-purple-500
              bg-clip-text
              text-transparent
            ">
              AI Toolkit Hub
            </h1>

            <p className="text-xs text-gray-400">
              Discover Powerful AI Tools
            </p>

          </div>

        </Link>



        {/* Navigation */}

        <nav className="
          hidden 
          md:flex 
          items-center 
          gap-8
          text-gray-300
        ">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>


          <Link
            href="/tools"
            className="hover:text-white transition"
          >
            Tools
          </Link>


          <Link
            href="/categories"
            className="hover:text-white transition"
          >
            Categories
          </Link>


          <Link
            href="/blog"
            className="hover:text-white transition"
          >
            Blog
          </Link>

        </nav>




        {/* Search */}

        <div className="hidden xl:block">

          <div className="
            flex items-center
            rounded-2xl
            border border-white/10
            bg-white/5
            px-4
          ">

            <span>🔍</span>

            <input
              placeholder="Search AI tools..."
              className="
                w-64
                bg-transparent
                px-3 py-2
                text-sm
                text-white
                outline-none
              "
            />

          </div>

        </div>




        {/* Account */}

        <div className="flex items-center gap-3">


          {user ? (

            <>

            <span className="
              hidden lg:block
              text-sm
              text-gray-300
            ">
              {user.email}
            </span>


            <button
              onClick={signOut}
              className="
                rounded-xl
                border border-red-500/50
                px-4 py-2
                text-sm
                hover:bg-red-500
                transition
              "
            >
              Logout
            </button>

            </>


          ) : (

            <button
              onClick={signIn}
              className="
              rounded-xl
              border border-white/20
              bg-white/5
              px-4 py-2
              text-sm
              hover:border-blue-500
              transition
              "
            >
              Google Login
            </button>

          )}



          <Link
            href="/submit"
            className="
            hidden sm:block
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            px-5 py-2
            font-semibold
            hover:scale-105
            transition
            "
          >
            Submit Tool
          </Link>


        </div>


      </div>

    </header>
  );
}