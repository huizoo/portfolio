export default function TimelineSummary({ timeline }) {
  return (
    <div className="space-y-12">
      {timeline.map((item, index) => (
        <div key={index} className="flex gap-8">
          {/* 날짜 */}
          <div className="w-28 shrink-0 text-sm text-gray-600 leading-loose whitespace-pre-line">
            {item.date}
          </div>

          {/* 원과 선 */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-4 h-4 rounded-full border-2 border-green-600 bg-white mt-1" />
            {index < timeline.length - 1 && (
              <div className="w-0.5 flex-1 bg-green-600 mt-2" style={{ minHeight: '80px' }} />
            )}
          </div>

          {/* 프로젝트 정보 */}
          <div className="flex-1 pb-2">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
            <div className="text-sm text-green-600 font-semibold mb-3">{item.role}</div>
            <p className="text-base text-gray-700 leading-loose">{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
