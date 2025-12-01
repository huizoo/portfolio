import { Phone, Mail, Github } from "lucide-react";

export default function FirstPage() {
  // 숙련도 바 렌더링 함수 (단색)
  const renderSkillBar = (level) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-sm ${
              i < level ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-[297mm] w-[210mm]">
      <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
        {/* 1행: 이름 + 소개 + 사진 + CONTACT */}
        <div className="mb-4">
          <div className="grid grid-cols-[auto_1fr] gap-12">
            {/* 왼쪽: 이름 + 타이틀 + 사진 */}
            <div>
              <h1 className="text-3xl font-bold text-green-600 mb-1">
                김희주 (HuiJu, Kim)
              </h1>
              <p className="text-sm text-gray-700 mb-4">
                끊임없이 질문하며, 남을 돕는 개발자
              </p>

              {/* 증명사진 */}
              <div className="w-28 h-36 border-2 border-gray-300 overflow-hidden">
                <img
                  src="/IDphoto.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 오른쪽: CONTACT 정보 */}
            <div className="flex flex-col justify-end ml-auto mr-4">
              <h3 className="text-lg font-bold text-green-600 mb-3">CONTACT</h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-green-600 shrink-0" />
                  <span className="font-semibold">Tel:</span>
                </div>
                <span>010-9340-0582</span>

                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-green-600 shrink-0" />
                  <span className="font-semibold">E-Mail:</span>
                </div>
                <span>ajtwlsgmlwn@naver.com</span>

                <div className="flex items-center gap-2">
                  <Github size={16} className="text-green-600 shrink-0" />
                  <span className="font-semibold">GitHub:</span>
                </div>
                <span className="break-all">https://github.com/huizoo</span>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="relative mt-6">
            <div className="w-full h-0.5 bg-green-600" />
            <div className="absolute left-0 -top-1.5 w-[1.5cm] h-3 bg-green-600" />
          </div>
        </div>

        {/* 2행: 자기소개 질문 3개 */}
        <div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-gray-800">
                어떤 개발자인가요?
              </h4>
              <p className="text-[10px] text-gray-800 leading-relaxed">
                {/* 사용자 경험을 최우선으로 생각하며, 기술적 도전을 즐기는
                개발자입니다. AI와 프론트엔드를 결합한 혁신적인 서비스를 만드는
                것을 좋아합니다. */}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">
                팀에서 어떤 역할을 하나요?
              </h4>
              <p className="text-[10px] text-gray-800 leading-relaxed">
                {/* 기술 리더로서 아키텍처 설계와 핵심 기능 개발을 담당하며,
                팀원들과 적극적으로 소통하고 협업합니다. 문제 해결 과정을
                공유하여 팀 전체의 성장을 도모합니다. */}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800">
                최근 관심사는?
              </h4>
              <p className="text-[10px] text-gray-800 leading-relaxed">
                {/* 개인화 AI 서비스와 RAG 기술에 관심이 많습니다. 특히 벡터 DB를
                활용한 효율적인 검색 시스템 구축과 사용자 맥락을 이해하는 AI
                챗봇 개발에 집중하고 있습니다. */}
              </p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="relative mt-6 mb-3">
            <div className="w-full h-0.5 bg-green-600" />
            <div className="absolute left-0 -top-1.5 w-[1.5cm] h-3 bg-green-600" />
          </div>
        </div>

        {/* 3행: SKILLS */}
        <div>
          <h2 className="text-2xl text-green-600 font-bold mb-4">SKILLS</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {/* Python */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* 타이틀 사진 */}
                <img
                  src="/Logo/Python.png"
                  alt="Python"
                  className="w-10 h-10 object-contain shrink-0"
                />
                {/* 우측 2행 */}
                <div className="flex-1">
                  {/* 윗행: 관련 아이콘들 */}
                  <div className="flex gap-2 mb-1">
                    <img
                      src="/Logo/FastAPI.png"
                      alt="FastAPI"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  {/* 아래행: 스킬명 + 레벨박스 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      Python
                    </h3>
                    {renderSkillBar(4)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[10px] text-gray-800 leading-relaxed">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  AI 서버 개발에 주력 언어로 사용하며, 2번의 프로젝트에서 전체
                  서버 구조를 직접 설계하고 구현했습니다.
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  비동기 처리, 작업 큐, 병렬 처리 등 Python의 기능을 상황에 맞게
                  적용할 수 있으며, 필요에 따라 라이브러리 내부 동작을 이해하며
                  활용합니다.
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  공식 문서 및 다양한 오픈소스 구현을 참고해 새로운 라이브러리를
                  빠르게 습득하고 응용할 수 있습니다.
                </li>
              </ul>
            </div>

            {/* AI */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* 타이틀 사진 */}
                <img
                  src="/Logo/AI.png"
                  alt="AI"
                  className="w-10 h-10 object-contain shrink-0"
                />
                {/* 우측 2행 */}
                <div className="flex-1">
                  {/* 윗행: 관련 아이콘들 */}
                  <div className="-ml-[2.5px] flex gap-2 mb-1">
                    <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
                      <img
                        src="/Logo/HuggingFace.png"
                        alt="HuggingFace"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
                      <img
                        src="/Logo/Qdrant.png"
                        alt="Qdrant"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  </div>
                  {/* 아래행: 스킬명 + 레벨박스 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">AI</h3>
                    {renderSkillBar(3)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[10px] text-gray-800 leading-relaxed">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  자연어 질문 처리와 개인화 응답 생성을 위한 RAG 파이프라인을
                  단독 설계하고 구현할 수 있습니다.
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  날짜 파싱, 필터링 전략 등 사용자 질의 전처리를 통해 검색
                  정확도를 높이는 파이프라인 튜닝 경험이 있습니다.
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  KoBART 등 공개된 AI 모델의 구조와 입력 형식을 이해하고, 서비스
                  목적에 맞게 조정·조합하여 실제 환경에 적용할 수 있습니다.
                </li>
              </ul>
            </div>

            {/* React */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* 타이틀 사진 */}
                <img
                  src="/Logo/React.png"
                  alt="React"
                  className="w-10 h-10 object-contain shrink-0"
                />
                {/* 우측 2행 */}
                <div className="flex-1">
                  {/* 윗행: 관련 아이콘들 */}
                  <div className="flex gap-2 mb-1">
                    <img
                      src="/Logo/JavaScript.png"
                      alt="JavaScript"
                      className="w-5 h-5 object-contain"
                    />
                    <img
                      src="/Logo/TypeScript.svg"
                      alt="TypeScript"
                      className="w-5 h-5 object-contain"
                    />
                    <img
                      src="/Logo/Zustand.svg"
                      alt="Zustand"
                      className="w-5 h-5 object-contain"
                    />
                    <img
                      src="/Logo/ReactQuery.png"
                      alt="ReactQuery"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  {/* 아래행: 스킬명 + 레벨박스 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      React
                    </h3>
                    {renderSkillBar(4)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[10px] text-gray-800 leading-relaxed">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Zustand 기반 상태 분기 설계로 앱 재진입 시 온보딩 단계 자동
                  복원 로직을 구현해 사용자 이탈률을 낮춘 경험이 있습니다.
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  React Query를 활용해 데이터 캐싱 및 병합 전략을 세우고, 중복
                  요청을 제거하여 불필요한 API 호출을 30% 이상 줄였습니다.
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  컴포넌트 구조는 FSD 패턴을 참고해 모듈화하고, 요구사항에 따라
                  커스텀 훅과 조건부 렌더링을 적극 활용해 UI 응답성과 재사용성을
                  높였습니다.
                </li>
              </ul>
            </div>

            {/* DB */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* 타이틀 사진 */}
                <img
                  src="/Logo/DB.png"
                  alt="DB"
                  className="w-10 h-10 object-contain shrink-0"
                />
                {/* 우측 2행 */}
                <div className="flex-1">
                  {/* 윗행: 관련 아이콘들 */}
                  <div className="flex gap-2 mb-1">
                    <img
                      src="/Logo/MySQL.png"
                      alt="MySQL"
                      className="w-5 h-5 object-contain"
                    />
                    <img
                      src="/Logo/MongoDB.png"
                      alt="MongoDB"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  {/* 아래행: 스킬명 + 레벨박스 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">DB</h3>
                    {renderSkillBar(3)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[10px] text-gray-800 leading-relaxed">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  MongoDB 샤딩 구성으로 로그 분산 저장
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Qdrant 메타데이터 필터링 구조 설계
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  NoSQL 기반 벡터 검색 및 업데이트 최적화
                </li>
              </ul>
            </div>

            {/* Git / 협업 도구 */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* 타이틀 사진 */}
                <img
                  src="/Logo/Git.png"
                  alt="Git"
                  className="w-10 h-10 object-contain shrink-0"
                />
                {/* 우측 2행 */}
                <div className="flex-1">
                  {/* 윗행: 관련 아이콘들 */}
                  <div className="flex gap-2 mb-1">
                    <img
                      src="/Logo/GitHub.png"
                      alt="GitHub"
                      className="w-5 h-5 object-contain"
                    />
                    <img
                      src="/Logo/GitLab.png"
                      alt="GitLab"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  {/* 아래행: 스킬명 + 레벨박스 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">Git</h3>
                    {renderSkillBar(4)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[10px] text-gray-800 leading-relaxed">
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  Git flow 기반 브랜치 전략 수립
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  GitHub Actions로 CI 파이프라인 구성
                </li>
                <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                  팀장 경험을 바탕으로 PR 리뷰 및 이슈 관리 주도
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 번호 */}
      <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
        - 1 -
      </div>
    </div>
  );
}
