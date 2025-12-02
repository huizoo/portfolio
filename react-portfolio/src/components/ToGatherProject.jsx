import PageBreak from "./PageBreak";
import Header from "./Header";

export default function ToGatherProject() {
  return (
    <>
      {/* 📄 Page 1 - 프로젝트 소개 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <Header />

          {/* Row 1: 프로젝트 로고 + 이름 + 설명 (좌측) | 커버 이미지 (우측) */}
          <div className="mb-3">
            <div className="grid grid-cols-[1.5fr_1fr] gap-6">
              {/* 좌측: 로고 + 프로젝트 정보 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/ToGather/logo.png"
                    alt="ToGather Logo"
                    className="w-16 h-16 object-contain border border-gray-300"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">
                      ToGather
                    </h3>
                    <p className="text-xs text-gray-600">
                      2024.10.14 - 2024.11.19 (6주/6인)
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                  커플이 일상을 기록하고 공유하며, 두 사람의 기록을 기반으로{" "}
                  <br />
                  개인화된 경험을 제공하는 모바일 라이프로그 서비스
                </p>
              </div>

              {/* 우측: 커버 이미지 */}
              <div className="flex items-center justify-center">
                <img
                  src="/ToGather/cover.png"
                  alt="ToGather Cover"
                  className="h-auto w-auto rounded-lg "
                />
              </div>
            </div>

            {/* 구분선 */}
            <div className="w-full h-[0.3px] bg-green-600 mt-6" />
          </div>

          {/* Row 2: 역할, 특이사항, 팀원 구성 */}
          <div className="mb-3">
            <div className="grid grid-cols-2 gap-8">
              {/* 좌측: 역할 + 팀원 구성 */}
              <div>
                <h4 className="text-xl font-bold text-green-600 mb-2">역할</h4>
                <p className="text-sm text-gray-800 mb-3">
                  AI<span className="text-xs">(60%)</span>, Frontend
                  <span className="text-xs">(40%)</span>
                </p>

                <h4 className="text-xs font-bold text-green-600 mb-1">
                  팀원 구성
                </h4>
                <p className="text-xs text-gray-800">
                  <strong>Frontend</strong> 2ㅣBackend 3ㅣInfra 1 (
                  <strong>AI</strong>: FE 1, BE 1 참여)
                </p>
              </div>

              {/* 우측: 특이사항 */}
              <div>
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  특이사항
                </h4>
                <p className="text-sm text-gray-800">
                  삼성 청년 SW 아카데미 <strong>프로젝트 우수상</strong>{" "}
                  <span className="text-[10px]">(2등/6팀)</span>
                </p>
              </div>
            </div>

            {/* 구분선 */}
            <div className="relative mt-6">
              <div className="w-full h-[0.3px] bg-green-600" />
            </div>
          </div>

          {/* Row 3: 개발환경 */}
          <div className="mb-3">
            <h4 className="text-xl font-bold text-green-600 mb-4">개발환경</h4>
            <div className="grid grid-cols-[100px_1fr] gap-y-3">
              {/* Frontend */}
              <div className="text-sm text-gray-900">Frontend</div>
              <div className="text-sm text-gray-800">
                React Native (Expo), TypeScript, Zustand, TanStack Query
              </div>

              {/* Backend */}
              <div className="text-sm text-gray-900">Backend</div>
              <div className="text-sm text-gray-800">
                Java 17, Spring Boot, JPA, Spring Security
              </div>

              {/* Database */}
              <div className="text-sm text-gray-900">Database</div>
              <div className="text-sm text-gray-800">MySQL, Redis</div>

              {/* AI */}
              <div className="text-sm text-gray-900">AI</div>
              <div className="text-sm text-gray-800">
                Python 3.11, FastAPI, Google Gemini API, OpenAI API, Qdrant,
                Pillow
              </div>

              {/* Infra */}
              <div className="text-sm text-gray-900">Infra</div>
              <div className="text-sm text-gray-800">
                Docker, GitLab CI/CD, Jenkins, Nginx, Ubuntu, EC2, S3
              </div>
            </div>

            {/* 구분선 */}
            <div className="relative mt-6">
              <div className="w-full h-[0.3px] bg-green-600" />
            </div>
          </div>

          {/* Row 4: Preview */}
          <div>
            <h4 className="text-xl font-bold text-green-600 mb-4">Preview</h4>
            <div className="flex gap-2 justify-between">
              <figure className="flex flex-col items-center">
                <img
                  src="/ToGather/home.jpg"
                  alt="Home"
                  className="h-70 rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  홈 화면
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/ToGather/diary.jpg"
                  alt="Diary"
                  className="h-70 rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  다이어리 화면
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/ToGather/feed.jpg"
                  alt="Feed"
                  className="h-70 rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  피드 화면
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/ToGather/plan.jpg"
                  alt="Plan"
                  className="h-70 rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  일정 화면
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/ToGather/settings.jpg"
                  alt="Settings"
                  className="h-70 rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  설정 화면
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 3 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 2 - 담당 업무 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <Header />

          <div>
            <h4 className="text-2xl font-bold text-green-600 mb-3 pb-4">
              담당 업무
            </h4>
            {/* 1. AI 챗봇 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                1. AI 챗봇 (개인화 RAG 파이프라인)
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                커플의 기록을 기반으로 개인화된 답변을 제공하는 AI 챗봇 시스템
                전체 설계 및 구현
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Qdrant 단일 컬렉션 + type(profile/diary/plan) 분리 저장 구조
                  설계
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  3단계 분리 검색: profile 직접 조회 → diary 벡터 검색 → plan
                  벡터 검색
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  프롬프트 구성에 Context Sandwich 기법을 적용하고, 프로필은
                  고정하며 검색 결과는 diary와 plan 태그로 구분
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 2. Date Parser */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                2. Date Parser (Query Transformation)
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                자연어 날짜 표현을 정규화하여 날짜 기반 질문에 대한 답변 정확도
                향상
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  정규 표현식과 규칙 기반으로 12가지 날짜 패턴(예: ‘저번 주’,
                  ‘작년’ 등)을 파싱
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Unix timestamp 범위 변환 → Qdrant Range 필터 적용
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  날짜 기반 질의 정확도 99% 달성
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 3. 온보딩 상태 복원 로직 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                3. 온보딩 상태 복원 로직
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                앱 재진입 시 커플 상태, 프로필, 초대 코드에 따라 올바른 단계로
                복원
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  AsyncStorage 기반 상태 복원 및 분기 로직 설계
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  coupleStatus, hasProfile, invitationCode 조합에 따라 화면을
                  분기해, 앱 재진입 시 적절한 화면으로 이동
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  온보딩 Context로 전역 상태 관리
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 4. SSE 처리 */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                4. SSE 실시간 커플 연동
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                Server-Sent Events를 활용한 커플 매칭 실시간 동기화
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  피초대자가 코드를 입력하면 초대자의 화면이 자동으로 홈으로
                  전환되도록 실시간 동기화
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  펫 선택 화면에서도 한 명이 선택 시 상대 화면에 실시간
                  반영되도록 구현
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  실시간 동기화로 연동 대기 시간을 최소화하고, 온보딩 흐름을
                  간소화해 이탈 가능성 감소
                </li>
              </ul>
            </div>
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
          <Header />

          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Time-aware RAG 파이프라인(Advanced RAG)
          </h4>

          {/* 도입 배경 + 다이어그램 */}
          <div className="mb-5 grid grid-cols-2 gap-6">
            {/* 좌측: 도입 배경 */}
            <div>
              <h5 className="text-sm font-bold text-slate-900 mb-2">
                도입 배경
              </h5>
              <div className="space-y-4">
                <p className="text-xs text-gray-800 leading-relaxed">
                  챗봇 초기에는 날짜 중심 질문에서 정확도가 낮았습니다. <br />
                  텍스트 기반 질문은 잘 매칭되었지만, <br />
                  날짜 기반 질문에서는 날짜를 의미로 인식하지 못해 <br />
                  단순 문자열 유사도로 다른 날짜의 기록을 반환하거나, <br />
                  '저번 주' 같은 상대 날짜 표현을 처리하지 못했습니다.
                </p>
                <p className="text-xs text-gray-800 leading-relaxed">
                  해당 문제의 원인은 벡터 검색이 <br />
                  날짜 개념을 이해하지 못하고, <br />
                  상대 날짜 표현은 정규 날짜로 변환되지 않아 <br />
                  검색 자체가 불가능하기 때문입니다.
                </p>
                <p className="text-xs text-gray-800 leading-relaxed">
                  이를 해결하기 위해 자연어 날짜를 정규화하는 <br />
                  Query Transformation(Date Parser)을 도입해 <br />
                  모든 날짜 표현을 Unix timestamp 범위로 변환하고 <br />
                  메타데이터 필터를 우선 적용하는 구조로 개선했습니다.
                </p>
                <p className="text-xs text-gray-800 leading-relaxed">
                  오른쪽 RAG 파이프라인은 <br />
                  이러한 문제를 해결하기 위해 설계한 구조입니다.
                </p>
              </div>
            </div>

            {/* 우측: RAG 다이어그램 */}
            <div className="flex items-center">
              <img
                src="/ToGather/ToGather_RAG.png"
                alt="개인화 AI 챗봇 RAG 파이프라인"
                className="w-full rounded-lg border border-gray-200"
              />
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

      {/* 📄 Page 4 - 온보딩 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <Header />

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
              설계가 필요했습니다. <br />
              아래는 앱의 온보딩·로그인 플로우를 나타낸 플로우차트입니다.
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
          - 6 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
