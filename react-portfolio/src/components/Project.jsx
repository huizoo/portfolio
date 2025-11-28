export default function Project({ project }) {
  return (
    <div className="mb-16">

      {/* 제목과 기간 */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>
        <div className="text-sm text-gray-600 font-medium mb-4">
          {project.date}
        </div>
        <p className="text-base text-gray-800 leading-loose">
          {project.description}
        </p>
      </div>

      {/* 기술 스택 */}
      {project.techStack && (
        <div className="flex flex-wrap gap-3 mb-10">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 rounded text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* 역할 */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-slate-900 mb-4">
          역할
        </h4>
        <ul className="space-y-3">
          {project.role.map((item, idx) => (
            <li
              key={idx}
              className="text-base text-gray-800 leading-loose pl-6 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 주요 구현 */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-slate-900 mb-4">
          주요 구현
        </h4>
        <ul className="space-y-3">
          {project.implementation.map((item, idx) => (
            <li
              key={idx}
              className="text-base text-gray-800 leading-loose pl-6 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 기술적 포인트 */}
      <div className="mb-10">
        <h4 className="text-lg font-bold text-slate-900 mb-4">
          기술적 포인트
        </h4>
        <ul className="space-y-3">
          {project.technical.map((item, idx) => (
            <li
              key={idx}
              className="text-base text-gray-800 leading-loose pl-6 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 성과 */}
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-4">
          성과
        </h4>
        <ul className="space-y-3">
          {project.achievements.map((item, idx) => (
            <li
              key={idx}
              className="text-base text-gray-800 leading-loose pl-6 relative before:content-['•'] before:absolute before:left-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
