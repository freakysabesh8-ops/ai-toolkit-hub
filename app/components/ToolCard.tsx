type Tool = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="flex items-center gap-4">
        <img
          src={tool.image}
          alt={tool.name}
          className="h-14 w-14 rounded-xl bg-white p-2"
        />

        <div>
          <h3 className="text-xl font-bold">{tool.name}</h3>

          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs">
            {tool.category}
          </span>
        </div>
      </div>

      <p className="mt-5 text-gray-400">
        {tool.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-semibold text-green-400">
          ⭐ 4.9
        </span>

        <span className="rounded-full bg-green-700 px-3 py-1 text-sm">
          Free
        </span>
      </div>

      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block rounded-xl bg-blue-600 py-3 text-center font-semibold transition hover:bg-blue-700"
      >
        Visit Tool →
      </a>
    </div>
  );
}