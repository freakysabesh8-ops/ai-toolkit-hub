import ToolCard from "./ToolCard";
import { tools } from "../data/tools";
export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-4xl font-bold text-center">
        🔥 Popular AI Tools
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}