export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-10 text-center">
      <h2 className="text-2xl font-bold">🚀 AI Toolkit Hub</h2>

      <p className="mt-3 text-gray-400">
        Discover the best AI tools in one place.
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/freakysabesh8-ops"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          GitHub
        </a>

        <a
          href="#"
          className="hover:text-blue-400"
        >
          Twitter
        </a>

        <a
          href="#"
          className="hover:text-blue-400"
        >
          Contact
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        © 2026 AI Toolkit Hub. All rights reserved.
      </p>
    </footer>
  );
}