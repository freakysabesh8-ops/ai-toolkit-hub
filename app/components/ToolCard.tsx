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
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-blue-500 hover:scale-105"
    >
      <img
        src={tool.image}
        alt={tool.name}
        className="h-12 w-12 rounded-lg"
      />

      <h3 className="mt-4 text-xl font-bold">
        {tool.name}
      </h3>

      <span className="text-blue-400 text-sm">
        {tool.category}
      </span>

      <p className="mt-2 text-gray-400">
        {tool.description}
      </p>
    </a>
  );
}