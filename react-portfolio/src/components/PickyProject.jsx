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
                  개인화된 뉴스·퀴즈를 추천하는 크롬 확장 기반 마이크로 러닝
                  서비스
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
                <h4 className="text-lg font-bold text-green-600 mb-2">역할</h4>
                <p className="text-xs text-gray-800 mb-3">
                  AI/Data Engineer, 팀장
                </p>

                <h4 className="text-lg font-bold text-green-600 mb-1">
                  팀원 구성
                </h4>
                <p className="text-xs text-gray-800">
                  Frontend 2ㅣBackend 2ㅣInfra 1ㅣ<strong>AI/Data</strong> 1
                </p>
              </div>

              {/* 우측: 특이사항 */}
              <div>
                <h4 className="text-lg font-bold text-green-600 mb-2">
                  특이사항
                </h4>
                <p className="text-xs text-gray-800">
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
            <h4 className="text-lg font-bold text-green-600 mb-4">개발환경</h4>
            <div className="grid grid-cols-[100px_1fr] gap-y-3">
              {/* Frontend */}
              <div className="text-xs text-gray-900">Frontend</div>
              <div className="text-xs text-gray-800">
                React, TypeScript, Zustand, TailwindCSS, Chrome Extension (MV3)
              </div>

              {/* Backend */}
              <div className="text-xs text-gray-900">Backend</div>
              <div className="text-xs text-gray-800">
                Java 17, Spring Boot, JPA, Spring Security
              </div>

              {/* Database */}
              <div className="text-xs text-gray-900">Database</div>
              <div className="text-xs text-gray-800">MySQL, MongoDB, Redis</div>

              {/* AI/Data */}
              <div className="text-xs text-gray-900">AI/Data</div>
              <div className="text-xs text-gray-800">
                Python 3.11, FastAPI, OpenAI API, KoBART, Qdrant, Chrome
                Extension (MV3)
              </div>

              {/* Infra */}
              <div className="text-xs text-gray-900">Infra</div>
              <div className="text-xs text-gray-800">
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
            <h4 className="text-lg font-bold text-green-600 mb-4">Preview</h4>
            <div className="flex gap-4 justify-center">
              <figure className="flex flex-col items-center">
                <img
                  src="/Picky/extension.png"
                  alt="Picky Extension"
                  className="h-[200px] w-auto object-contain rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  확장 프로그램
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  src="/Picky/News.png"
                  alt="Picky News"
                  className="h-[200px] w-auto object-contain rounded border border-gray-200"
                />
                <figcaption className="text-xs text-gray-700 mt-2">
                  캐릭터 & 뉴스
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 7 -
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

            {/* 1. 크롬 확장 프로그램 로그 수집 시스템 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                1. 크롬 확장 프로그램 로그 수집 시스템
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                Manifest V3 기반 크롬 확장 프로그램으로 사용자 브라우징 데이터 수집 파이프라인 설계 및 구현
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  체류 시간, 스크롤 깊이, 접속 시간대 등 브라우징 행동 메트릭을 실시간으로 수집
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  수집된 로그를 백엔드로 전송하고 MongoDB에 저장하는 데이터 파이프라인 구축
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  크롬 확장 백그라운드 서비스 워커와 콘텐츠 스크립트 간 메시지 통신 구조 설계
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 2. 초기 프로필 생성을 위한 히스토리 데이터 수집 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                2. 초기 프로필 생성을 위한 히스토리 데이터 수집
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                콜드 스타트 문제 해결을 위해 브라우징 히스토리 URL의 실제 콘텐츠를 추출하는 시스템 설계 및 구현
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Offscreen Document API를 활용해 백그라운드에서 히스토리 URL을 독립적으로 로드하는 구조 설계
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Readability 라이브러리를 통합하여 페이지 본문 추출 파이프라인 구축
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Service Worker와 Offscreen Document 간 메시지 통신으로 추출된 콘텐츠 전달 및 저장
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  콘텐츠 추출 실패 시(SPA 등) 스킵 처리 로직으로 안정적인 데이터 수집 파이프라인 구축
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 3. 관심사 프로필 벡터 생성 및 MongoDB 샤딩 */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                3. 관심사 프로필 벡터 생성 및 MongoDB 샤딩
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                수집된 브라우징 로그를 기반으로 사용자 관심사 프로필 벡터를 생성하고, MongoDB 샤딩으로 확장 가능한 저장소 구축
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  초기 히스토리 로그 전체를 문장 임베딩으로 변환해 사용자 관심사 초기 벡터 생성
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  사용자 ID 기반 해시 샤딩으로 MongoDB 컬렉션 분산 저장, 사용자 수 증가 시에도 조회 성능 유지
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  체류 시간·스크롤 깊이 가중치 메타데이터를 활용해 O(1) 증분 업데이트로 실시간 프로필 갱신
                </li>
              </ul>
            </div>

            <div className="w-full h-[0.3px] bg-green-600 mb-6" />

            {/* 4. KoBART 뉴스 요약 파이프라인 */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                4. KoBART 뉴스 요약 파이프라인
              </h4>
              <p className="text-md text-gray-800 leading-relaxed mb-2">
                사용자가 방문한 뉴스 콘텐츠를 KoBART 모델로 요약하여 마이크로 러닝 콘텐츠로 제공하는 배치 시스템 구축
              </p>
              <ul className="space-y-1.5 text-sm text-gray-800">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  KoBART 생성 요약 모델을 활용해 긴 뉴스 기사를 핵심 문장으로 압축하는 배치 파이프라인 구축
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  요약된 콘텐츠를 개인화된 뉴스 및 퀴즈 형태로 재구성하여 마이크로 러닝 경험 제공
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  비동기 배치 처리로 대량의 뉴스 콘텐츠 요약 작업을 효율적으로 처리
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 8 -
        </div>
      </div>

      <PageBreak />

      {/* 📄 Page 3 - Offscreen Document API 트러블슈팅 */}
      <div className="relative h-[297mm] w-[210mm]">
        <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
          <Header />

          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Offscreen Document API 콘텐츠 추출 <span className='text-red-600'> 트러블슈팅 </span>
          </h4>

          {/* 도입 배경 */}
          <div className="mb-5">
            <h5 className="text-sm font-bold text-slate-900 mb-2">도입 배경</h5>
            <p className="text-xs text-gray-800 leading-relaxed">
              사용자의 브라우징 히스토리를 기반으로 관심사를 분석하려면, <br />
              단순히 URL 목록뿐만 아니라 각 페이지의 실제 콘텐츠(본문 텍스트)를 추출해야 했습니다. <br />
              chrome.history API로 히스토리 URL 목록은 얻을 수 있었지만, <br />
              해당 URL의 페이지 콘텐츠를 가져오는 과정에서 기술적 문제가 발생했습니다.
            </p>
          </div>

          {/* 문제 발생 */}
          <div className="mb-5">
            <h5 className="text-sm font-bold text-slate-900 mb-2">문제 발생</h5>
            <p className="text-xs text-gray-800 leading-relaxed mb-3">
              초기 접근 방식: Content Script를 사용해 히스토리 URL에 접근 시도
            </p>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Content Script는 현재 활성화된 탭의 DOM에 접근하는 방식으로 동작
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                히스토리 URL(예: naver.com)의 콘텐츠를 가져오려면, 현재 열린 페이지(예: google.com)에서
                다른 origin의 페이지에 접근해야 하는 상황 발생
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                브라우저의 Same-Origin Policy로 인해 cross-origin 요청 차단 → 콘텐츠 추출 불가
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                fetch API 사용 시에도 CORS 정책으로 다른 도메인의 HTML 콘텐츠를 직접 가져올 수 없음
              </li>
            </ul>
          </div>

          {/* 해결 과정 */}
          <div className="mb-5">
            <h5 className="text-sm font-bold text-slate-900 mb-2">해결 과정</h5>
            <p className="text-xs text-gray-800 leading-relaxed mb-3">
              Offscreen Document API를 활용한 독립적인 백그라운드 페이지 로딩
            </p>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Offscreen Document: 사용자에게 보이지 않는 독립적인 문서 컨텍스트를 백그라운드에서 생성
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Service Worker가 Offscreen Document를 생성하고, 히스토리 URL을 로드하도록 지시
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Offscreen Document 내부에서 Readability 라이브러리로 로드된 페이지의 본문 추출
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                추출된 콘텐츠를 chrome.runtime.sendMessage로 Service Worker에 전달하여 저장
              </li>
            </ul>
          </div>

          {/* 기술적 포인트 */}
          <div className="mb-5">
            <h5 className="text-sm font-bold text-slate-900 mb-2">
              기술적 포인트
            </h5>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Offscreen Document는 현재 탭과 독립적인 환경으로, cross-origin 제약 없이 URL 로드 가능
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                chrome.offscreen.createDocument() API로 백그라운드 문서 생성 및 생명주기 관리
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                Readability 라이브러리: Mozilla의 Reader View 알고리즘 기반으로 페이지 본문만 정확히 추출
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                SPA(CSR) 한계: JavaScript 실행 전 HTML이 비어있어 콘텐츠 추출 불가 → 콘텐츠 없으면 스킵 처리
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                배치 처리: 여러 히스토리 URL을 순차적으로 로드하며 성능 최적화 및 브라우저 부하 관리
              </li>
            </ul>
          </div>

          {/* 성과 */}
          <div>
            <h5 className="text-sm font-bold text-slate-900 mb-2">성과</h5>
            <ul className="space-y-1.5">
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                cross-origin 제약 없이 SPA를 제외한 대부분의 사이트에서 히스토리 URL 콘텐츠 추출 가능
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                뉴스, 블로그, 위키 등 주요 사이트에서 안정적으로 텍스트 수집
              </li>
              <li className="text-xs text-gray-800 leading-relaxed pl-3 relative before:content-['•'] before:absolute before:left-0">
                추천 모델의 데이터 커버리지가 대폭 확대되어 더욱 정확한 사용자 관심사 프로필 생성 가능
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
          - 9 -
        </div>
      </div>

      <PageBreak />
    </>
  );
}
