import PageBreak from "./PageBreak";

export default function ToGatherProject() {
  return (
    <>
      {/* 📄 Page 1 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          {/* 1-4) 타이틀, 기간, 역할, 한 줄 설명 */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-3">
              <h3 className="text-2xl font-bold text-slate-900">ToGather</h3>
              <span className="text-[10px] text-gray-600 font-medium">
                2025.10.10 - 2025.11.20
              </span>
              <span className="text-sm text-slate-700 font-medium ml-auto">
                AI, Frontend Lead
              </span>
            </div>
            <p className="text-xs text-gray-800 leading-relaxed mb-3">
              커플이 일상을 기록하고 공유하며, 두 사람의 기록을 기반으로
              개인화된 경험을 제공하는 모바일 라이프로그 서비스
            </p>

            {/* 첫 페이지 스타일의 선 - description 아래 */}
            <div className="relative">
              {/* 전체 얇은 선 */}
              <div className="w-full h-0.5 bg-green-600" />
              {/* 왼쪽 두꺼운 선 */}
              <div className="absolute left-0 -top-1.5 w-[1.5cm] h-3 bg-green-600" />
            </div>
          </div>

          {/* 5) 프로젝트 목표 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-2">
              프로젝트 목표
            </h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              커플의 기록을 단순 저장이 아니라 다시 꺼내볼 수 있는 맞춤형 추억
              회상 경험으로 만드는 것을 목표로 했습니다.
            </p>
          </div>

          {/* 6) 내 핵심 기여 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              핵심 기여
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                커플 기록 기반 개인화 AI 챗봇: <br />
                자연어 날짜 파싱 → 메타데이터 필터 우선 적용 RAG 파이프라인
                설계·구현으로 날짜 쿼리 정확도 개선
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Qdrant 단일 컬렉션 + 메타데이터 필터 구조로 couple_id별 벡터
                격리 및 type(profile/diary/plan) 분리 저장 → 검색 성능 최적화
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                앱 재진입 시 상태 기반 분기 로직을 설계하여 커플
                상태·프로필·초대 코드에 따라 온보딩을 복원
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                SSE 실시간 커플 연동: 피초대자 코드 입력 시 초대자 자동 화면
                이동, 실시간 동기화로 초기 이탈률 감소
              </li>
            </ul>
          </div>

          {/* 7) 사용 기술 */}
          <div className="mb-6">
            <h4 className="text-base font-bold  text-slate-900 mb-3">
              사용 기술
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                FastAPI
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Qdrant
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Text Embedding
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                RAG
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                React Native (Expo)
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                TypeScript
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Zustand
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                TanStack Query
              </span>
            </div>
          </div>

          {/* 9) 성과 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">성과</h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                날짜 쿼리 정확도 대폭 향상: 자연어 날짜 파싱 + 메타데이터 필터
                우선 적용으로 날짜 관련 질문 정확도 99% 달성
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                검색 성능 최적화: 단일 컬렉션 구조와 Range 필터 적용으로 Qdrant
                검색 성능 최적화
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                온보딩 이탈률 감소: SSE 동기화로 커플 연동 과정 실시간 피드백
                제공
              </li>
            </ul>
          </div>

          {/* 온보딩 로직 UI 스크린샷 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3">
              온보딩 플로우
            </h4>
            <div className="flex gap-2 justify-between">
              <img
                src="/ToGather/login.png"
                alt="로그인"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/ToGather/user-info.png"
                alt="사용자 정보"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/ToGather/couple-role.png"
                alt="커플 역할 선택"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/ToGather/couple-invite.png"
                alt="커플 초대"
                className="h-72 rounded border border-gray-200"
              />
              <img
                src="/ToGather/couple-join.png"
                alt="커플 가입"
                className="h-72 rounded border border-gray-200"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 3 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 2 - 온보딩 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            온보딩 상태 복원 로직
          </h4>

          {/* 도입 배경 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">도입 배경</h5>
            <p className="text-xs text-gray-800 leading-relaxed">
              커플 상태, 프로필 정보 입력 여부, 초대 코드 존재 여부에 따라
              <br />
              사용자가 앱을 재진입했을 때 올바른 단계로 복원해주는 온보딩 분기
              설계가 필요했습니다.
            </p>
          </div>

          {/* 다이어그램 */}
          <div className="mb-5">
            <img
              src="/ToGather/ToGather_onboarding.png"
              alt="온보딩 상태 복원 로직"
              className="w-full rounded-lg border border-gray-200"
            />
          </div>

          {/* 상세 설명 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">주요 구현</h5>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                온보딩 Context 기반 전역 상태 관리 및 앱 재진입 시 올바른 단계
                복원 로직 구현
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                SSE 기반 커플 연동 실시간 동기화: 피초대자 코드 입력 → 초대자
                자동 홈 이동
              </li>
            </ul>
          </div>

          {/* 기술적 포인트 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              기술적 포인트
            </h5>
            <p className="text-xs text-gray-800 leading-relaxed">
              AsyncStorage 기반 상태 복원 및 SSE 실시간 동기화
            </p>
          </div>

          {/* 상태 분기 */}
          <div>
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              상태 기반 분기
            </h5>
            <ul className="space-y-1">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                coupleStatus === 'CONNECTED' → 홈 화면
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                hasProfile (nickname, birthday, mbti) → 프로필 완성 여부
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                invitationCode 존재 → 초대 대기 화면
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 4 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 3 - RAG */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            개인화 AI 챗봇 RAG 파이프라인(Advanced RAG)
          </h4>

          {/* 도입 배경 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">도입 배경</h5>
            <div className="space-y-1.5">
              <p className="text-xs text-gray-800 leading-relaxed">
                챗봇 초기에는 날짜 중심 질문에서 정확도가 낮았습니다.
                <br />
                텍스트 기반 질문은 잘 매칭되었지만, 날짜 기반 질문에서는 날짜를
                의미로 인식하지 못해
                <br />
                단순 문자열 유사도로 다른 날짜의 기록을 반환하거나, '저번 주'
                같은 상대 날짜 표현을 처리하지 못했습니다.
              </p>
              <p className="text-xs text-gray-800 leading-relaxed">
                해당 문제의 원인은 벡터 검색이 날짜 개념을 이해하지 못하고,{" "}
                <br />
                상대 날짜 표현은 정규 날짜로 변환되지 않아 검색 자체가
                불가능하기 때문입니다.
              </p>
              <p className="text-xs text-gray-800 leading-relaxed">
                이를 해결하기 위해 자연어 날짜를 정규화하는 Query
                Transformation(Date Parser)을 도입해
                <br />
                모든 날짜 표현을 Unix timestamp 범위로 변환하고 메타데이터
                필터를 우선 적용하는 구조로 개선했습니다.
              </p>
              <p className="text-xs text-gray-800 leading-relaxed">
                아래 RAG 파이프라인은 이러한 문제를 해결하기 위해 설계한
                구조입니다.
              </p>
            </div>
          </div>

          {/* 다이어그램 + 챗봇 UI */}
          <div className="mb-5 flex gap-4">
            {/* 좌측: RAG 다이어그램 */}
            <div className="w-1/2">
              <img
                src="/ToGather/ToGather_RAG.png"
                alt="개인화 AI 챗봇 RAG 파이프라인"
                className="w-full rounded-lg border border-gray-200"
              />
            </div>

            {/* 우측: 챗봇 답변 UI */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-center">
                <img
                  src="/ToGather/answer.png"
                  alt="챗봇 답변"
                  className="h-100 rounded border border-gray-200 mx-auto"
                />
                <p className="text-sm font-semibold text-gray-900 mt-2">
                  "우리 언제 연애 시작했더라?"에 대한 답변
                </p>
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-900 mb-2">주요 구현</h5>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Qdrant 단일 컬렉션 + type(profile/diary/plan) 분리 저장: 프로필
                검색 없이 직접 조회, diary/plan 각 5개씩 벡터 검색
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                날짜 인식 문제 해결: 자연어 날짜 파싱 → Query Transformation →
                메타데이터 필터 우선 적용 RAG 파이프라인 구축
              </li>
            </ul>
          </div>

          {/* 기술적 포인트 */}
          <div>
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              기술적 포인트
            </h5>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                3단계 분리 검색 파이프라인: <br />① profile(couple_id+type 필터
                직접 조회) → ② diary 벡터 검색(limit=5) → ③ plan 벡터
                검색(limit=5)
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Date Parser 정규식 + 규칙 기반 12가지 패턴 파싱 후 Unix
                timestamp 범위로 변환 → Qdrant Range 필터 적용
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Context Sandwich: 프로필(최상단 고정) → [diary] + [plan] 검색
                결과 태그 구분 → 프롬프트로 LLM 전달
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                {
                  "point_id 기반 자동 업서트: couple_{couple_id}_{type}_{id} 형식으로 수정 시 벡터 자동 갱신"
                }
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 5 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
