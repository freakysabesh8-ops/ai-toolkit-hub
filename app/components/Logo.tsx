export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
        🤖
      </div>

      <div>
        <h1 className="text-xl font-bold">AI Toolkit Hub</h1>
        <p className="text-xs text-gray-400">
          Discover. Compare. Learn.
        </p>
      </div>
    </div>
  );
}