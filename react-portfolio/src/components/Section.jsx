export default function Section({ title, children, className = "", layout = "vertical" }) {
  if (layout === "horizontal") {
    return (
      <section className={className}>
        {/* 상단 선 */}
        <div className="border-t-2 border-green-600 mb-3" />

        {/* 타이틀 + 내용 가로 배치 */}
        <div className="grid grid-cols-3 gap-8">
          <h2 className="text-2xl text-green-600 font-bold">
            {title}
          </h2>
          <div className="col-span-2">
            {children}
          </div>
        </div>
      </section>
    );
  }

  // 기본 vertical 레이아웃
  return (
    <section className={className}>
      {title && (
        <h2 className="text-2xl pt-2 text-green-600 mb-3 pb-2 border-t-2 border-green-600 font-bold">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
