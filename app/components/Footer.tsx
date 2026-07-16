export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white">
          🚀 AI Toolkit Hub
        </h2>

        <p className="text-gray-400 mt-2">
          Discover the best AI tools for work, study and creativity.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-gray-300">
          <a href="#">Home</a>
          <a href="#">AI Tools</a>
          <a href="#">Blog</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 AI Toolkit Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}