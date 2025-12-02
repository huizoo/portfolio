export default function Header() {
  return (
    <header className="pb-3">
      <div className="flex items-baseline justify-between mb-3">
        <h1 className="text-2xl font-bold text-green-600">
          김희주 (HuiJu, Kim)
        </h1>
        <p className="text-gray-900">
          <span className="text-md font-semibold">문제를 구조화하며, </span>
          <span className="text-sm">답을 찾는 </span>
          <span className="text-sm"> 개발자</span>
        </p>
      </div>

      {/* 구분선 */}
      <div className="relative">
        <div className="w-full h-0.5 bg-green-600" />
        <div className="absolute left-0 -top-1.5 w-[1.5cm] h-3 bg-green-600" />
      </div>
    </header>
  );
}
