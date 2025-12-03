import PageBreak from "./PageBreak";
import Header from "./Header";

export default function OttereviewProject() {
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
                    src="Ottereview/logo.png"
                    alt="Ottereview Logo"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">
                      Ottereview
                    </h3>
                    <p className="text-xs text-gray-600">
                      2024.07.14 - 2024.08.18 (6주/6인)
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                  주니어 개발자의 PR·리뷰 진입 장벽을 낮추기 위해 <br />
                  GitHub 기반 코드 리뷰 과정을 재구성한 실시간 협업 웹 서비스
                </p>
              </div>

              {/* 우측: 커버 이미지 */}
              <div className="flex items-center justify-center">
                <img
                  src="Ottereview/cover.png"
                  alt="Ottereview Cover"
                  className="h-auto w-auto object-contain rounded-lg"
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
                <h4 className="text-lg font-bold text-green-600 mb-2">역할</h4>
                <p className="text-xs text-gray-800 mb-3">Frontend Lead</p>

                <h4 className="text-lg font-bold text-green-600 mb-1">
                  팀원 구성
                </h4>
                <p className="text-xs text-gray-800">
                  <strong>Frontend</strong> 2ㅣBackend 3ㅣInfra 1
                </p>
              </div>

              {/* 우측: 특이사항 */}
              <div>
                <h4 className="text-lg font-bold text-green-600 mb-2">
                  특이사항
                </h4>
                <p className="text-xs text-gray-800">
                  삼성 청년 SW 아카데미 <strong>프로젝트 우수상</strong>{" "}
                  <span className="text-[10px]">(2등/9팀)</span>
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
            <h4 className="text-lg font-bold text-green-600 mb-4">개발환경</h4>
            <div className="grid grid-cols-[100px_1fr] gap-y-3">
              {/* Frontend */}
              <div className="text-xs text-gray-900">Frontend</div>
              <div className="text-xs text-gray-800">
                React, TypeScript, Zustand, TailwindCSS, Monaco Editor, tldraw,
                STOMP/SockJS
              </div>

              {/* Backend */}
              <div className="text-xs text-gray-900">Backend</div>
              <div className="text-xs text-gray-800">
                Java 17, Spring Boot, JPA, Spring Security, GitHub API
              </div>

              {/* Database */}
              <div className="text-xs text-gray-900">Database</div>
              <div className="text-xs text-gray-800">MySQL, Redis</div>

              {/* AI */}
              <div className="text-xs text-gray-900">AI</div>
              <div className="text-xs text-gray-800">
                Python, FastAPI, OpenAI API, Pinecone, WhisperAI
              </div>

              {/* Infra */}
              <div className="text-xs text-gray-900">Infra</div>
              <div className="text-xs text-gray-800">
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
            <h4 className="text-lg font-bold text-green-600 mb-4">Preview</h4>
            <div className="flex gap-4 justify-between">
              <figure className="flex flex-col items-center">
                <img
                  src="/Ottereview/home.png"
                  alt="OtterReview 홈 화면"
                  className="h-[200px] w-auto object-contain rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  메인 홈 화면
                </figcaption>
              </figure>

              <figure className="flex flex-col items-center">
                <img
                  src="/Ottereview/codediff.png"
                  alt="OtterReview 코드 비교 화면"
                  className="h-[200px] w-auto object-contain rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  코드 Diff 리뷰 화면
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 10 -
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

            {/* 1. PR 생성/리뷰 플로우 UI 구현 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                1. PR 생성/리뷰 플로우 UI 구현
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                주니어 개발자를 위한 직관적인 5단계 PR 생성 플로우 및 리뷰 인터페이스 설계·구현
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  브랜치·기존 PR 검증 → 컨벤션·제목 피드백 → 리뷰어 선택 → 코드/음성 코멘트 관리로 이어지는 5단계 PR 생성 플로우
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  PR 리뷰·머지·닫기·재오픈 화면 구현 및 Monaco Editor 기반 코드 Diff 뷰어 통합
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Repository 목록/상세 화면 구현 (브랜치·상태 필터링, 잘못된 repoId 접근 시 404 처리)
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 2. Zustand 전역 상태 관리 아키텍처 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                2. Zustand 전역 상태 관리 아키텍처
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                Zustand를 활용한 전역 상태 관리 구조 설계로 컴포넌트 간 데이터 흐름 최적화
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  사용자 인증 상태, 알림 목록, 저장소 데이터를 Zustand 스토어로 전역 관리
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  도메인별로 스토어를 분리하여 관심사 분리 및 유지보수성 향상
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Props drilling 없이 깊은 컴포넌트 트리에서도 효율적인 상태 접근 가능
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 3. 재사용 가능한 공통 컴포넌트 시스템 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                3. 재사용 가능한 공통 컴포넌트 시스템
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                일관된 UI/UX를 위한 공통 컴포넌트 라이브러리 및 커스텀 훅 구축
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  헤더, 버튼, 모달, 토스트, 스텝 인디케이터 등 재사용 가능한 UI 컴포넌트 라이브러리 구축
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  useCommentManager 훅으로 코멘트 작성·수정·삭제 상태를 캡슐화하여 리뷰 화면 로직 단순화
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  beforeunload/popstate 이벤트 처리로 리뷰 작성 중 페이지 이탈 시 경고 및 임시 저장 기능 구현
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 4. SSE 실시간 알림 시스템 */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                4. SSE 실시간 알림 시스템
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                Server-Sent Events를 활용한 실시간 GitHub 이벤트 알림 시스템 구현
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  useSSE 커스텀 훅으로 SSE 연결 생명주기 관리 및 이벤트 리스너 추상화
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  GitHub 푸시 이벤트를 실시간으로 수신해 토스트 알림 및 알림 센터에 자동 반영
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  읽음/안읽음 상태 관리 및 알림 센터 UI 구현으로 팀원 간 코드 리뷰 반응 속도 향상
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 11 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
