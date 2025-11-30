import PageBreak from "./PageBreak";

// ============================================
// 프로젝트 데이터
// ============================================
const PROJECT_DATA = {
  title: "OtterReview",
  period: "2025.07 - 2025.08",
  description: "주니어 개발자의 PR·리뷰 진입 장벽을 낮추기 위해 GitHub 기반 코드 리뷰 과정을 재구성한 실시간 협업 웹 서비스",

  techStack: [
    "React",
    "Vite",
    "Zustand",
    "React Router",
    "SSE",
    "Tailwind CSS",
  ],

  role: [
    "실시간 협업 기능(WebRTC·tldraw·STOMP)을 제외한 프론트엔드 전반 담당",
    "PR 생성/리뷰 플로우 UI, Zustand 전역 상태관리, 공통 컴포넌트 구축",
    "라우팅 및 SSE 알림 구조 설계",
  ],

  implementation: [
    "브랜치·기존 PR 검증 → 컨벤션·제목 피드백 → 리뷰어 선택 → 코드/음성 코멘트 관리로 이어지는 5단계 PR 생성 플로우",
    "Repository 목록/상세 화면 (브랜치·상태 필터링, 잘못된 repoId 접근 시 404 처리)",
    "PR 리뷰·머지·닫기·재오픈 화면 및 공통 UI 컴포넌트 (헤더·버튼·모달·토스트·스텝 인디케이터)",
  ],

  technical: [
    "Zustand로 사용자·알림·저장소 상태를 전역 관리",
    "SSE + useSSE 훅으로 GitHub 푸시 이벤트를 실시간 토스트/알림센터에 반영",
    "beforeunload/popstate 이벤트 + useCommentManager 훅으로 리뷰 작성 중 이탈 방지",
  ],

  achievements: [
    "브랜치·상태 검증, 로딩·에러·빈 상태 처리로 GitHub 대비 직관적인 PR 생성·리뷰 경험 제공",
    "팀 테스트 결과, 초보자 기준 PR 작성·리뷰 수행 시간 체감적으로 단축",
  ],
};

export default function OtterReviewProject() {
  return (
    <>
      {/* 첫 번째 페이지 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          {/* 제목과 기간 */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{PROJECT_DATA.title}</h3>
            <div className="text-xs text-gray-600 font-medium mb-4">
              {PROJECT_DATA.period}
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              {PROJECT_DATA.description}
            </p>
          </div>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {PROJECT_DATA.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 역할 */}
          <div className="mb-8">
            <h4 className="text-base font-bold text-slate-900 mb-3">역할</h4>
            <ul className="space-y-2">
              {PROJECT_DATA.role.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 주요 구현 */}
          <div className="mb-8">
            <h4 className="text-base font-bold text-slate-900 mb-3">주요 구현</h4>
            <ul className="space-y-2">
              {PROJECT_DATA.implementation.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 6 -
        </div>
      </div>

      <PageBreak />

      {/* 두 번째 페이지 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          {/* 기술적 포인트 */}
          <div className="mb-8">
            <h4 className="text-base font-bold text-slate-900 mb-3">기술적 포인트</h4>
            <ul className="space-y-2">
              {PROJECT_DATA.technical.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 성과 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3">성과</h4>
            <ul className="space-y-2">
              {PROJECT_DATA.achievements.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 7 -
        </div>
      </div>
    </>
  );
}
