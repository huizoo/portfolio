export default function ProjectSummaryList() {
  const projectSummary = [
    {
      title: "ToGather",
      role: "AI, Frontend Lead",
      date: "2025.10.10 - 2025.11.20",
      description:
        "커플이 일상을 기록하고 공유하는 모바일 라이프로그 서비스",
      keywords: [
        "개인화된 AI 챗봇",
        "자연어 날짜 정규화 기반 Advanced RAG(Time-aware)",
        "Qdrant 단일 컬렉션 + 메타데이터 필터 구조",
        "온보딩 상태 기반 전역 상태 설계 및 앱 재진입 시 단계 복원 로직 구현",
      ],
      page: "3p",
    },
    {
      title: "Picky",
      role: "AI/Data Engineer, 팀장",
      date: "2025.08.25 - 2025.10.01",
      description:
        "브라우징 로그 기반 개인화 컨텐츠 추천 마이크로 러닝 서비스",
      keywords: [
        "크롬 확장프로그램 기반 사용자 로그 수집",
        "O(1) 벡터 업데이트 기반 개인화 프로필 관리",
        "크롤링·KoBART 뉴스 요약 파이프라인",
        "MongoDB 샤딩 기반 대용량 데이터 설계",
      ],
      page: "7p",
    },
    {
      title: "Ottereview",
      role: "Frontend Lead",
      date: "2025.07.14 - 2025.08.18",
      description:
        "주니어 개발자의 PR·리뷰 진입 장벽을 낮춘 실시간 협업 서비스",
      keywords: [
        "GitHub 기반 PR 생성·리뷰 플로우 UI 설계",
        "Zustand 기반 복합 리뷰 상태 관리",
        "코드 Diff 멀티라인 선택·스레드형 댓글 구조",
        "SSE 기반 push 이벤트 알림 처리",
      ],
      page: "10p",
    },
  ];

  return (
    <div className="flex flex-col">
      {projectSummary.map((project, index) => (
        <div key={index} className="flex gap-6 h-33">
          {/* 타임라인 */}
          <div className="flex flex-col items-center shrink-0 w-8 pt-1.5 -mb-1.5">
            <div className="w-3 h-3 rounded-full border-2 border-green-600 bg-white" />
            <div className="w-0.5 bg-green-600 flex-1" />
            {index === projectSummary.length - 1 && (
              <div className="w-3 h-3 rounded-full border-2 border-green-600 bg-white" />
            )}
          </div>

          {/* 프로젝트 정보 */}
          <div className="flex gap-6">
            {/* 좌측: 프로젝트명, 역할, 기간 */}
            <div className="w-56 shrink-0">
              <div className="flex items-baseline gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  {project.title}
                </h3>
                <span className="text-[10px] text-gray-600 whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              <div className="text-[13px] text-slate-700 font-medium">
                {project.role}
              </div>
            </div>

            {/* 우측: 설명과 키워드 */}
            <div className="flex-1">
              <p className="text-[13px] text-gray-900 leading-relaxed">
                <span className="font-semibold">{project.description}</span>
                <span className="font-base"> ({project.page})</span>
              </p>
              {/* 리스트 방식 */}
              <ul className="mt-2 space-y-1">
                {project.keywords.map((keyword, idx) => (
                  <li
                    key={idx}
                    className="text-[11px] text-gray-800 pl-3 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
