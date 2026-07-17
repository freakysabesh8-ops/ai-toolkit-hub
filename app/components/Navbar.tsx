import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            AI Tools
          </a>

          <a href="#" className="hover:text-blue-400">
            Categories
          </a>

          <a href="#" className="hover:text-blue-400">
            Blog
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
          Explore
        </button>
      </div>
    </nav>
  );
}