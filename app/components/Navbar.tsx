export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          🚀 AI Toolkit Hub
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">AI Tools</a>
          <a href="#">Categories</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}