import PageBreak from "./PageBreak";

// ============================================
// 프로젝트 데이터
// ============================================
const PROJECT_DATA = {
  title: "Picky",
  period: "2025.08 - 2025.10",
  description: "브라우징 로그를 기반으로 사용자 관심사를 분석하고 개인화된 뉴스·퀴즈를 추천하는 Chrome Extension 기반 마이크로 러닝 서비스",

  techStack: [
    "Chrome Extension (MV3)",
    "JavaScript",
    "FastAPI",
    "MongoDB",
    "Sentence Embeddings",
    "Qdrant",
    "KoBART",
  ],

  role: [
    "Chrome Extension에서 브라우징 로그를 수집해 서버로 전달하는 전체 파이프라인 설계·구현",
    "로그 저장·전처리·사용자 프로필 벡터 생성에 필요한 백엔드 로직 구축",
    "KoBART 기반 뉴스 요약 시스템 구축 및 배치 처리 파이프라인 구현",
  ],

  implementation: [
    "체류 시간, 스크롤 깊이, 입력 비율, 시간대(KST) 등을 포함한 브라우징 로그 수집(DataCollector/HistoryCollector)",
    "SPA·CORS·CSP 제약 해결을 위해 Offscreen Document 기반으로 URL HTML을 fetch 후 Readability로 텍스트 파싱",
    "FastAPI `/user-logs` 엔드포인트를 통해 사용자별 MongoDB 컬렉션에 로그 저장",
  ],

  technical: [
    "사용자 수 증가를 고려하여 브라우징/히스토리 로그를 해시 기반 컬렉션 샤딩 구조로 분산 저장해 조회 부하 최소화",
    "초기 히스토리 전체 임베딩으로 사용자 프로필 벡터를 생성하고, 체류 시간·스크롤 깊이 기반 가중치를 함께 저장",
    "새로운 방문 로그가 들어올 때마다 기존 벡터와 가중치 메타데이터를 활용해 O(1) 연산으로 증분 업데이트하는 벡터 관리 방식 설계",
  ],

  achievements: [
    "SPA·보안 사이트 환경에서도 안정적으로 텍스트 로그를 수집할 수 있는 구조 확보로 추천 모델 데이터 커버리지 확대",
    "브라우징 로그 수집 → 관심사 프로필 생성 → 추천까지의 E2E 파이프라인 구축으로 데모 단계에서 개인화 추천 성능 구현",
  ],
};

export default function PickyProject() {
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
          - 4 -
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
          - 5 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
