export default function Header() {
  const name = "김희주 (HuiJu, Kim)";
  const tagline = "사용자 경험을 중시하며, 끊임없이 질문하고 답을 찾는 개발자";

  return (
    <header className="mb-2">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold text-green-600">{name}</h1>
        <p className="text- text-gray-600">{tagline}</p>
      </div>
    </header>
  );
}
