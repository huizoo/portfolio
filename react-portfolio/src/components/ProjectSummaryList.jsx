export default function ProjectSummaryList() {
  const projectSummary = [
    {
      title: "ToGather",
      role: "Mobile Frontend · AI Server",
      date: "2025.10 - 2025.11",
      description: "커플이 일상을 기록하고 공유하는 모바일 라이프로그 서비스",
      keywords: ["React Native", "FastAPI", "RAG", "Qdrant", "SSE"]
    },
    {
      title: "Picky",
      role: "Chrome Extension · Backend",
      date: "2025.08 - 2025.10",
      description: "브라우징 로그 기반 개인화 뉴스·퀴즈 추천 서비스",
      keywords: ["Chrome Extension", "FastAPI", "MongoDB", "Vector DB", "증분 업데이트"]
    },
    {
      title: "OtterReview",
      role: "Frontend Lead",
      date: "2025.07 - 2025.08",
      description: "GitHub 기반 주니어 개발자용 코드 리뷰 웹 서비스",
      keywords: ["React", "Zustand", "SSE", "실시간 알림", "PR 플로우"]
    }
  ];

  return (
    <div className="space-y-6">
      {projectSummary.map((project, index) => (
        <div key={index} className="flex gap-6">
          {/* 타임라인 라인 */}
          <div className="flex flex-col items-center shrink-0 w-8">
            <div className="w-3 h-3 rounded-full border-2 border-green-600 bg-white mt-1.5" />
            {index < projectSummary.length - 1 && (
              <div className="w-0.5 flex-1 bg-green-600 mt-1" style={{ minHeight: '60px' }} />
            )}
          </div>

          {/* 프로젝트 정보 */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {/* 좌측: 프로젝트명, 역할, 기간 */}
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{project.title}</h3>
              <div className="text-sm text-green-600 font-medium mb-1">{project.role}</div>
              <div className="text-xs text-gray-600">{project.date}</div>
            </div>

            {/* 우측: 설명과 키워드 */}
            <div>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
