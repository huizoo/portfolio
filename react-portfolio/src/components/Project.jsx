export default function Project({ project }) {
  return (
    <div>

      {/* 제목과 기간 */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>
        <div className="text-xs text-gray-600 font-medium mb-4">
          {project.date}
        </div>
        <p className="text-sm text-gray-800 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* 기술 스택 */}
      {project.techStack && (
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* 역할 */}
      <div className="mb-8">
        <h4 className="text-base font-bold text-slate-900 mb-3">
          역할
        </h4>
        <ul className="space-y-2">
          {project.role.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 주요 구현 */}
      <div className="mb-8">
        <h4 className="text-base font-bold text-slate-900 mb-3">
          주요 구현
        </h4>
        <ul className="space-y-2">
          {project.implementation.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 기술적 포인트 */}
      <div className="mb-8">
        <h4 className="text-base font-bold text-slate-900 mb-3">
          기술적 포인트
        </h4>
        <ul className="space-y-2">
          {project.technical.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 성과 */}
      <div>
        <h4 className="text-base font-bold text-slate-900 mb-3">
          성과
        </h4>
        <ul className="space-y-2">
          {project.achievements.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
