export default function Header() {
  const name = "김희주 (HuiJu, Kim)";
  const tagline = "무슨무슨 개발자";

  return (
    <header className="mb-2">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold text-green-600">{name}</h1>
        <p className="text-slate-800">{tagline}</p>
      </div>
    </header>
  );
}
