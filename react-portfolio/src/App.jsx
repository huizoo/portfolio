import Header from "./components/Header";
import Section from "./components/Section";
import EducationList from "./components/EducationList";
import AwardsList from "./components/AwardsList";
import CertificatesList from "./components/CertificatesList";
import Experience from "./components/Experience";
import ProjectSummaryList from "./components/ProjectSummaryList";
import Project from "./components/Project";
import PageBreak from "./components/PageBreak";

function App() {
  const projects = [
    {
      title: "OtterReview",
      date: "2025.07 - 2025.08",
      description: "주니어 개발자의 PR·리뷰 진입 장벽을 낮추기 위해 GitHub 기반 코드 리뷰 과정을 재구성한 실시간 협업 웹 서비스",
      techStack: ["React", "Vite", "Zustand", "React Router", "SSE", "Tailwind CSS"],
      role: [
        "실시간 협업 기능(WebRTC·tldraw·STOMP)을 제외한 프론트엔드 전반 담당",
        "PR 생성/리뷰 플로우 UI, Zustand 전역 상태관리, 공통 컴포넌트 구축",
        "라우팅 및 SSE 알림 구조 설계"
      ],
      implementation: [
        "브랜치·기존 PR 검증 → 컨벤션·제목 피드백 → 리뷰어 선택 → 코드/음성 코멘트 관리로 이어지는 5단계 PR 생성 플로우",
        "Repository 목록/상세 화면 (브랜치·상태 필터링, 잘못된 repoId 접근 시 404 처리)",
        "PR 리뷰·머지·닫기·재오픈 화면 및 공통 UI 컴포넌트 (헤더·버튼·모달·토스트·스텝 인디케이터)"
      ],
      technical: [
        "Zustand로 사용자·알림·저장소 상태를 전역 관리",
        "SSE + useSSE 훅으로 GitHub 푸시 이벤트를 실시간 토스트/알림센터에 반영",
        "beforeunload/popstate 이벤트 + useCommentManager 훅으로 리뷰 작성 중 이탈 방지"
      ],
      achievements: [
        "브랜치·상태 검증, 로딩·에러·빈 상태 처리로 GitHub 대비 직관적인 PR 생성·리뷰 경험 제공",
        "팀 테스트 결과, 초보자 기준 PR 작성·리뷰 수행 시간 체감적으로 단축"
      ]
    },
    {
      title: "Picky",
      date: "2025.08 - 2025.10",
      description: "브라우징 로그를 기반으로 사용자 관심사를 분석하고 개인화된 뉴스·퀴즈를 추천하는 Chrome Extension 기반 마이크로 러닝 서비스",
      techStack: ["Chrome Extension (MV3)", "JavaScript", "FastAPI", "MongoDB", "Sentence Embeddings", "Qdrant"],
      role: [
        "Chrome Extension에서 브라우징 로그를 수집해 서버로 전달하는 전체 파이프라인 설계·구현",
        "로그 저장·전처리·사용자 프로필 벡터 생성에 필요한 백엔드 로직 구축"
      ],
      implementation: [
        "체류 시간, 스크롤 깊이, 입력 비율, 시간대(KST) 등을 포함한 브라우징 로그 수집(DataCollector/HistoryCollector)",
        "SPA·CORS·CSP 제약 해결을 위해 Offscreen Document 기반으로 URL HTML을 fetch 후 Readability로 텍스트 파싱",
        "FastAPI `/user-logs` 엔드포인트를 통해 사용자별 MongoDB 컬렉션에 로그 저장"
      ],
      technical: [
        "사용자 수 증가를 고려하여 브라우징/히스토리 로그를 해시 기반 컬렉션 샤딩 구조로 분산 저장해 조회 부하 최소화",
        "초기 히스토리 전체 임베딩으로 사용자 프로필 벡터를 생성하고, 체류 시간·스크롤 깊이 기반 가중치를 함께 저장",
        "새로운 방문 로그가 들어올 때마다 기존 벡터와 가중치 메타데이터를 활용해 O(1) 연산으로 증분 업데이트하는 벡터 관리 방식 설계"
      ],
      achievements: [
        "SPA·보안 사이트 환경에서도 안정적으로 텍스트 로그를 수집할 수 있는 구조 확보로 추천 모델 데이터 커버리지 확대",
        "브라우징 로그 수집 → 관심사 프로필 생성 → 추천까지의 E2E 파이프라인 구축으로 데모 단계에서 개인화 추천 성능 구현"
      ]
    },
    {
      title: "ToGather",
      date: "2025.10 - 2025.11",
      description: "커플이 일상을 기록하고 공유하며, 두 사람의 기록을 기반으로 개인화된 경험을 제공하는 모바일 라이프로그 서비스",
      techStack: ["React Native (Expo)", "TypeScript", "Zustand", "TanStack Query", "FastAPI", "Qdrant"],
      role: [
        "모바일 프론트엔드 핵심 화면(온보딩·홈·설정·챗봇 모달) 설계 및 구현",
        "AI 서버(FastAPI) 개발 및 프론트–AI 간 RAG/벡터 업데이트 파이프라인 설계"
      ],
      implementation: [
        "온보딩 멀티 스텝 UI 및 상태 구조 구축",
        "홈 탭의 챗봇 모달·펫 인터랙션·설정 모달 흐름 구현",
        "FastAPI 기반 /vectorize · /sections · /chatbot API 개발 및 기록 기반 개인화 RAG 파이프라인 구현"
      ],
      technical: [
        "온보딩 전 단계 상태를 Context + Zustand로 통합 관리하여 화면 전환 간 일관성 확보",
        "Expo 환경에서 SSE를 직접 처리하기 위해 sseClient 유틸 구현하여 스트리밍 챗봇 UX 제공",
        "커플 설정·펫 상태·역할 변경 등을 SSE로 양측 기기에 실시간 반영하도록 동기화 설계"
      ],
      achievements: [
        "온보딩·홈 탭의 복잡한 상태 구조 정리로 초기 사용자 이탈률 감소에 기여",
        "커플 기록 기반 개인화 챗봇 구현으로 기존 다이어리 앱 대비 차별화된 사용자 경험 제공"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none print:max-w-full">

        {/* 📄 Page 1: 표지 - 3행 구조 */}
        <div className="py-[20mm] px-[10mm] print:p-0">
          <Header />

          {/* 1행: Education */}
          <Section title="Education" layout="horizontal">
            <EducationList />
          </Section>

          {/* 2행: Awards와 Certificates를 2열로 */}
          <div className="grid grid-cols-2 gap-x-12 mt-8">
            <Section title="Awards">
              <AwardsList />
            </Section>

            <div className="space-y-6">
              <Section title="Certificates">
                <CertificatesList />
              </Section>

              <Section title="Experience">
                <Experience />
              </Section>
            </div>
          </div>

          {/* 3행: Project Summary - 타임라인 형태 */}
          <div className="mt-8">
            <Section title="Project Summary">
              <ProjectSummaryList />
            </Section>
          </div>
        </div>

        <PageBreak />

        {/* 📄 Page 2+: 프로젝트 상세 */}
        <div className="py-[20mm] px-[10mm] print:p-0">
          {projects.map((project, index) => (
            <div key={index}>
              <Project project={project} />
              {index < projects.length - 1 && <PageBreak />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
