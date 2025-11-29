function renderTopLine() {
  return (
    <div className="relative mb-3">
      {/* 전체 얇은 선 */}
      <div className="w-full h-0.5 bg-green-600" />

      {/* 왼쪽 두꺼운 선 */}
      <div
        className="
          absolute left-0
          -top-1.5
          w-[1.5cm]
          h-3
          bg-green-600
        "
      />
    </div>
  );
}

export default function Section({
  title,
  children,
  className = "",
  layout = "vertical",
}) {
  if (layout === "horizontal") {
    return (
      <section className={className}>
        {renderTopLine()}

        <div className="grid grid-cols-3 gap-8 mt-4">
          <h2 className="text-2xl text-green-600 font-bold">{title}</h2>
          <div className="col-span-2">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      {title && (
        <>
          {renderTopLine()}
          <h2 className="text-2xl text-green-600 font-bold mb-4">{title}</h2>
        </>
      )}
      {children}
    </section>
  );
}
