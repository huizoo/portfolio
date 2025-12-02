import PageBreak from "./PageBreak";
import Header from "./Header";

export default function PickyProject() {
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
                    src="Picky/picky.png"
                    alt="Picky Logo"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">
                      Picky
                    </h3>
                    <p className="text-xs text-gray-600">
                      2024.08.26 - 2024.10.04 (6주/6인)
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                  브라우징 로그를 기반으로 사용자 관심사를 분석하고 <br />
                  개인화된 뉴스·퀴즈를 추천하는 크롬 확장 기반 마이크로
                  러닝 서비스
                </p>
              </div>

              {/* 우측: 커버 이미지 */}
              <div className="flex items-center justify-center">
                <img
                  src="Picky/cover.png"
                  alt="Picky Cover"
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
                <h4 className="text-xl font-bold text-green-600 mb-2">역할</h4>
                <p className="text-sm text-gray-800 mb-3">
                  AI/Data Engineer, 팀장
                </p>

                <h4 className="text-xs font-bold text-green-600 mb-1">
                  팀원 구성
                </h4>
                <p className="text-xs text-gray-800">
                  Frontend 2ㅣBackend 2ㅣInfra 1ㅣ<strong>AI/Data</strong> 1
                </p>
              </div>

              {/* 우측: 특이사항 */}
              <div>
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  특이사항
                </h4>
                <p className="text-sm text-gray-800">
                  삼성 청년 SW 아카데미 <strong>프로젝트 우수상</strong>{" "}
                  <span className="text-[10px]">(2등/8팀)</span>
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
                React, TypeScript, Zustand, TailwindCSS, Chrome Extension (MV3)
              </div>

              {/* Backend */}
              <div className="text-sm text-gray-900">Backend</div>
              <div className="text-sm text-gray-800">
                Java 17, Spring Boot, JPA
              </div>

              {/* Database */}
              <div className="text-sm text-gray-900">Database</div>
              <div className="text-sm text-gray-800">MySQL, MongoDB, Redis</div>

              {/* AI/Data */}
              <div className="text-sm text-gray-900">AI/Data</div>
              <div className="text-sm text-gray-800">
                Python 3.11, FastAPI, OpenAI API, KoBART, Qdrant, Chrome Extension (MV3)
              </div>

              {/* Infra */}
              <div className="text-sm text-gray-900">Infra</div>
              <div className="text-sm text-gray-800">
                Docker, GitLab CI/CD, Jenkins, Nginx, Ubuntu, EC2
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
              <img
                src=""
                alt="Preview 1"
                className="h-70 rounded border border-gray-200"
              />
              <img
                src=""
                alt="Preview 2"
                className="h-70 rounded border border-gray-200"
              />
              <img
                src=""
                alt="Preview 3"
                className="h-70 rounded border border-gray-200"
              />
              <img
                src=""
                alt="Preview 4"
                className="h-70 rounded border border-gray-200"
              />
              <img
                src=""
                alt="Preview 5"
                className="h-70 rounded border border-gray-200"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 7 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 2 - 상세 설명 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <Header />

          {/* 프로젝트 목표 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-2">
              프로젝트 목표
            </h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              웹 사용자의 브라우징 행동 데이터를 바탕으로 관심사를 추론하고,{" "}
              <br />
              그에 맞춰 개인화된 뉴스 및 퀴즈 형태의 마이크로 러닝 콘텐츠를
              추천하는 것을 목표로 했습니다.
            </p>
          </div>

          {/* 프로젝트 목표 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-2">
              프로젝트 목표
            </h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              웹 사용자의 브라우징 행동 데이터를 바탕으로 관심사를 추론하고,{" "}
              <br />
              그에 맞춰 개인화된 뉴스 및 퀴즈 형태의 마이크로 러닝 콘텐츠를
              추천하는 것을 목표로 했습니다.
            </p>
          </div>

          {/* 핵심 기여 */}
          <div className="mb-6">
            <h4 className="text-base font-bold text-slate-900 mb-3">
              핵심 기여
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                브라우징 로그 수집부터 관심사 벡터 생성까지 전체 파이프라인
                설계·구현
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                KoBART 기반 뉴스 콘텐츠 요약 시스템 및 배치 처리 파이프라인 구축
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                OffscreenDocument API와 Readability로 보안 제한 사이트에서도
                콘텐츠 수집 기능 구현
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                MongoDB 해시 샤딩으로 대용량 사용자 로그 분산 저장 및 관심사
                프로필 벡터의 O(1) 증분 업데이트 구조 구현
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
                Chrome Extension (MV3)
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                JavaScript
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                FastAPI
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                KoBART
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Sentence Embeddings
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                Qdrant
              </span>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                MongoDB
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
                크롬 확장 프로그램 로그 수집: Manifest V3 기반 확장을 통해
                사용자의 브라우징 로그(체류 시간, 스크롤 깊이, 입력 비율, 접속
                시간대 등)를 수집하여 서버로 보내는 파이프라인 설계·구현
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                관심사 프로필 벡터 생성: 수집된 로그를 백엔드에서
                저장·전처리하고 문장 임베딩으로 관심사 프로필 벡터를 생성하는
                로직 구현
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                KoBART 뉴스 요약 파이프라인: KoBART로 방문 뉴스 콘텐츠를
                요약하는 배치 파이프라인 구축
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Offscreen Document 활용: Offscreen Document API와 Readability
                라이브러리를 이용해 SPA 및 엄격한 CORS/CSP 사이트에서도
                백그라운드에서 페이지 본문을 추출하여 로그 수집 제약 해소 (보안
                정책으로 인한 콘텐츠 수집 불능 문제 해결)
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
                MongoDB 해시 샤딩 아키텍처: 사용자 ID 기반 해시로 MongoDB 컬렉션
                샤딩을 구현하여 브라우징/히스토리 로그를 분산 저장하고, 사용자
                수 증가 시에도 조회 부하를 최소화하는 확장성 확보
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                벡터 프로필 메타데이터 관리: 초기 히스토리 로그 전체를 임베딩해
                사용자 관심사 초기 벡터를 생성하고, 체류 시간·스크롤 깊이에
                비례한 가중치 메타데이터를 함께 저장
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                O(1) 관심 벡터 증분 업데이트: 새로운 방문 로그 발생 시 기존
                벡터와 가중치 메타데이터를 활용해 상수 시간(O(1))으로 프로필
                벡터를 갱신하도록 설계 (실시간 프로필 업데이트)
              </li>
            </ul>
          </div>

          {/* 성과 */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-3">성과</h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                SPA·보안 사이트 환경에서도 안정적으로 텍스트 로그를 수집할 수
                있는 구조 확보로 추천 모델 데이터 커버리지 확대
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                브라우징 로그 수집 → 관심사 프로필 생성 → 추천까지의 E2E
                파이프라인 구축으로 데모 단계에서 개인화 추천 성능 구현
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                {" "}
                삼성 청년 SW·AI 아카데미 프로젝트 경연 우수상(2등) 수상
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 8 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
