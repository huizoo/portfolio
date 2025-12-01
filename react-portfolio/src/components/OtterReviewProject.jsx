import PageBreak from "./PageBreak";

export default function OtterReviewProject() {
  return (
    <>
      {/* 📄 Page 1 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          {/* 타이틀, 기간, 역할, 한 줄 설명 */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-3">
              <h3 className="text-2xl font-bold text-slate-900">OtterReview</h3>
              <span className="text-[10px] text-gray-600 font-medium">
                2025.07.14 - 2025.08.18
              </span>
              <span className="text-sm text-slate-700 font-medium ml-auto">
                Frontend Lead
              </span>
            </div>
            <p className="text-xs text-gray-800 leading-relaxed mb-3">
              주니어 개발자의 PR·리뷰 진입 장벽을 낮추기 위해 GitHub 기반 코드 리뷰 과정을 재구성한 실시간 협업 웹 서비스
            </p>

            {/* 첫 페이지 스타일의 선 - description 아래 */}
            <div className="relative">
              {/* 전체 얇은 선 */}
              <div className="w-full h-0.5 bg-green-600" />
              {/* 왼쪽 두꺼운 선 */}
              <div className="absolute left-0 -top-1.5 w-[1.5cm] h-3 bg-green-600" />
            </div>
          </div>

          {/* 프로젝트 목표 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-2">
              프로젝트 목표
            </h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              주니어 개발자가 쉽게 코드 리뷰에 참여할 수 있도록 직관적인 UI/UX를 제공하는 것을 목표로 했습니다.
            </p>
          </div>

          {/* 핵심 기여 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              핵심 기여
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                실시간 협업 기능(WebRTC·tldraw·STOMP)을 제외한 프론트엔드 전반 담당
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                PR 생성/리뷰 플로우 UI, Zustand 전역 상태관리, 공통 컴포넌트 구축
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                라우팅 및 SSE 알림 구조 설계
              </li>
            </ul>
          </div>

          {/* 사용 기술 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              사용 기술
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                React
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Vite
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Zustand
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                React Router
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                SSE
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* 주요 구현 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              주요 구현
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                브랜치·기존 PR 검증 → 컨벤션·제목 피드백 → 리뷰어 선택 → 코드/음성 코멘트 관리로 이어지는 5단계 PR 생성 플로우
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Repository 목록/상세 화면 (브랜치·상태 필터링, 잘못된 repoId 접근 시 404 처리)
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                PR 리뷰·머지·닫기·재오픈 화면 및 공통 UI 컴포넌트 (헤더·버튼·모달·토스트·스텝 인디케이터)
              </li>
            </ul>
          </div>

          {/* 기술적 포인트 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              기술적 포인트
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Zustand로 사용자·알림·저장소 상태를 전역 관리
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                SSE + useSSE 훅으로 GitHub 푸시 이벤트를 실시간 토스트/알림센터에 반영
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                beforeunload/popstate 이벤트 + useCommentManager 훅으로 리뷰 작성 중 이탈 방지
              </li>
            </ul>
          </div>

          {/* 성과 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3">성과</h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                브랜치·상태 검증, 로딩·에러·빈 상태 처리로 GitHub 대비 직관적인 PR 생성·리뷰 경험 제공
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                팀 테스트 결과, 초보자 기준 PR 작성·리뷰 수행 시간 체감적으로 단축
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 7 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
