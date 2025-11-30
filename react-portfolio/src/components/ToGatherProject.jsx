import PageBreak from "./PageBreak";

// ============================================
// 프로젝트 데이터
// ============================================
const PROJECT_DATA = {
  // 1) 타이틀
  title: "ToGather",

  // 2) 기간
  period: "2025.10.10 - 2025.11.20",

  // 3) 역할
  role: "AI, Frontend Lead",

  // 4) 한 줄 설명
  description:
    "커플이 일상을 기록하고 공유하며, 두 사람의 기록을 기반으로 개인화된 경험을 제공하는 모바일 라이프로그 서비스",

  // 5) 프로젝트 목표 (Why)
  objective:
    "커플이 함께한 순간을 효과적으로 기록하고, 이를 바탕으로 맞춤형 추억 회상 경험을 제공하기 위해",

  // 6) 내 핵심 기여 (What I did)
  keyContributions: [
    "커플 기록 기반 개인화 AI 챗봇: 자연어 날짜 파싱 → 메타데이터 필터 우선 적용 RAG 파이프라인 설계·구현으로 날짜 쿼리 정확도 개선",
    "Qdrant 단일 컬렉션 + 메타데이터 필터 구조: couple_id별 벡터 격리 및 type(profile/diary/plan) 분리 저장으로 검색 성능 최적화",
    "온보딩 상태 복원 로직: AsyncStorage 기반 coupleStatus/profile/invitationCode 우선순위 분기 설계로 앱 재진입 시 올바른 단계 복원",
    "SSE 실시간 커플 연동: 피초대자 코드 입력 시 초대자 자동 화면 이동, 실시간 동기화로 초기 이탈률 감소",
  ],

  // 7) 사용 기술
  techStack: [
    "FastAPI",
    "Qdrant",
    "Text Embedding",
    "RAG",
    "React Native (Expo)",
    "TypeScript",
    "Zustand",
    "TanStack Query",
  ],

  // 8) 핵심 구현 (How) - 온보딩
  onboardingImplementation: {
    title: "온보딩 상태 복원 로직",
    diagramPath: "/ToGather_onboarding.png",
    details: [
      "온보딩 Context 기반 전역 상태 관리 및 앱 재진입 시 올바른 단계 복원 로직 구현",
      "SSE 기반 커플 연동 실시간 동기화: 피초대자 코드 입력 → 초대자 자동 홈 이동",
    ],
    technical: "AsyncStorage 기반 상태 복원 및 SSE 실시간 동기화",
    stateBranches: [
      "coupleStatus === 'CONNECTED' → 홈 화면",
      "hasProfile (nickname, birthday, mbti) → 프로필 완성 여부",
      "invitationCode 존재 → 초대 대기 화면",
    ],
  },

  // 8) 핵심 구현 (How) - RAG
  ragImplementation: {
    title: "개인화 AI 챗봇 RAG 파이프라인",
    diagramPath: "/ToGather_RAG.png",
    details: [
      "Qdrant 단일 컬렉션 + type(profile/diary/plan) 분리 저장: 프로필 검색 없이 직접 조회, diary/plan 각 5개씩 벡터 검색",
      "날짜 인식 문제 해결: 자연어 날짜 파싱 → Query Transformation → 메타데이터 필터 우선 적용 RAG 파이프라인 구축",
    ],
    technical: [
      "3단계 분리 검색 파이프라인: ① profile(couple_id+type 필터 직접 조회) → ② diary 벡터 검색(limit=5, date_field=post_date_ts) → ③ plan 벡터 검색(limit=5, date_field=start_time_ts)",
      "Date Parser 정규식 + 규칙 기반 12가지 패턴 파싱 후 Unix timestamp 범위로 변환 → Qdrant Range 필터 적용",
      "Context Sandwich: 프로필(최상단 고정) → [diary] + [plan] 검색 결과 태그 구분 → 프롬프트로 LLM 전달",
      "point_id 기반 자동 업서트: couple_{couple_id}_{type}_{id} 형식으로 수정 시 벡터 자동 갱신",
    ],
  },

  // 9) 성과 (Impact, Result)
  achievements: [
    "온보딩 이탈률 감소: SSE 동기화로 커플 연동 과정 실시간 피드백 제공",
    "날짜 쿼리 정확도 개선: '11월 12일' 질문 시 11월 13일 오검색 문제 해결 (날짜 필터 우선 적용)",
    "검색 성능 최적화: Qdrant 단일 컬렉션 + 메타데이터 필터로 couple_id별 벡터 격리",
  ],
};

export default function ToGatherProject() {
  return (
    <>
      {/* 📄 Page 1 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          {/* 1-4) 타이틀, 기간, 역할, 한 줄 설명 */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-2xl font-bold text-slate-900">
                {PROJECT_DATA.title}
              </h3>
              <span className="text-[10px] text-gray-600 font-medium">
                {PROJECT_DATA.period}
              </span>
            </div>
            <div className="text-sm text-slate-700 font-medium mb-3">
              {PROJECT_DATA.role}
            </div>
            <p className="text-xs text-gray-800 leading-relaxed">
              {PROJECT_DATA.description}
            </p>
          </div>

          {/* 5) 프로젝트 목표 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-2">
              프로젝트 목표
            </h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              {PROJECT_DATA.objective}
            </p>
          </div>

          {/* 6) 내 핵심 기여 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              핵심 기여
            </h4>
            <ul className="space-y-2">
              {PROJECT_DATA.keyContributions.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 7) 사용 기술 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              사용 기술
            </h4>
            <div className="flex flex-wrap gap-2">
              {PROJECT_DATA.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 온보딩 로직 UI 스크린샷 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              온보딩 플로우
            </h4>
            <div className="flex gap-2 justify-between">
              <img
                src="/login.png"
                alt="로그인"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/user-info.png"
                alt="사용자 정보"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/couple-role.png"
                alt="커플 역할 선택"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/couple-invite.png"
                alt="커플 초대"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/couple-join.png"
                alt="커플 가입"
                className="h-72 rounded border border-gray-200"
              />
            </div>
          </div>

          {/* 9) 성과 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3">성과</h4>
            <ul className="space-y-2">
              {PROJECT_DATA.achievements.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-800 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 2 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 2 - 온보딩 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            {PROJECT_DATA.onboardingImplementation.title}
          </h4>

          {/* 다이어그램 */}
          <div className="mb-5">
            <img
              src={PROJECT_DATA.onboardingImplementation.diagramPath}
              alt={PROJECT_DATA.onboardingImplementation.title}
              className="w-4/5 rounded-lg border border-gray-200"
            />
          </div>

          {/* 상세 설명 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">주요 구현</h5>
            <ul className="space-y-1.5">
              {PROJECT_DATA.onboardingImplementation.details.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-800 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 기술적 포인트 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              기술적 포인트
            </h5>
            <p className="text-xs text-gray-800 leading-relaxed">
              {PROJECT_DATA.onboardingImplementation.technical}
            </p>
          </div>

          {/* 상태 분기 */}
          <div>
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              상태 기반 분기
            </h5>
            <ul className="space-y-1">
              {PROJECT_DATA.onboardingImplementation.stateBranches.map(
                (branch, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-800 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {branch}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 3 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 3 - RAG */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            {PROJECT_DATA.ragImplementation.title}
          </h4>

          {/* 다이어그램 + 챗봇 UI */}
          <div className="mb-5 flex gap-4">
            {/* 좌측: RAG 다이어그램 */}
            <div className="w-2/3">
              <img
                src={PROJECT_DATA.ragImplementation.diagramPath}
                alt={PROJECT_DATA.ragImplementation.title}
                className="w-full rounded-lg border border-gray-200"
              />
            </div>

            {/* 우측: 챗봇 질문/답변 UI - 세로 나열, 가운데 정렬 */}
            <div className="flex-1 flex flex-col gap-3 items-center justify-center">
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  질문 화면
                </p>
                <img
                  src="/question.png"
                  alt="챗봇 질문"
                  className="h-64 rounded border border-gray-200"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  답변 화면
                </p>
                <img
                  src="/answer.png"
                  alt="챗봇 답변"
                  className="h-64 rounded border border-gray-200"
                />
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">주요 구현</h5>
            <ul className="space-y-1.5">
              {PROJECT_DATA.ragImplementation.details.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-800 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 기술적 포인트 */}
          <div>
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              기술적 포인트
            </h5>
            <ul className="space-y-1.5">
              {PROJECT_DATA.ragImplementation.technical.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-800 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 4 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
