"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get current user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Listen for auth changes
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
      }
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-xl">
            🤖
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              AI Toolkit Hub
            </h1>

            <p className="text-xs text-gray-400">
              Discover AI Tools
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/tools" className="hover:text-blue-400">
            Tools
          </Link>

          <Link href="/categories" className="hover:text-blue-400">
            Categories
          </Link>

          <Link href="/admin" className="hover:text-blue-400">
            Admin
          </Link>
        </nav>

        {/* Search */}
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search AI tools..."
            className="w-72 rounded-xl border border-gray-700 bg-gray-900 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              <span className="hidden text-sm text-gray-300 md:block">
                {user.email}
              </span>

              <button
                onClick={signOut}
                className="rounded-xl border border-red-600 px-4 py-2 hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={signIn}
              className="rounded-xl border border-gray-700 px-4 py-2 hover:border-blue-500"
            >
              Sign in with Google
            </button>
          )}

          <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
            Submit Tool
          </button>

        </div>

      </div>
    </header>
  );
}