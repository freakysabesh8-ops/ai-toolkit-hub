type ToolCardProps = {
  name: string;
  description: string;
  link: string;
};

export default function ToolCard({
  name,
  description,
  link,
}: ToolCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-bold text-white">{name}</h3>

      <p className="mt-3 text-gray-400">{description}</p>

      <a
        href={link}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
      >
        Visit Tool →
      </a>
    </div>
  );
}