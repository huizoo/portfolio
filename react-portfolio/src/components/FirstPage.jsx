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
              <h1 className="text-3xl font-bold text-green-600 mb-1 pb-2">
                김희주 (HuiJu, Kim)
              </h1>
              <p className="text-gray-900 mb-4">
                <span className="text-md font-semibold">
                  문제를 구조화
                </span>
                <span className="text-sm">하며, 답을 찾는 </span>
                <span className="text-sm"> 개발자</span>
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
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-bold text-gray-800">
                개발 프로젝트를 진행할 때 무엇을 가장 중요하게 생각하나요?
              </h4>
              <p className="text-[10px] text-gray-800 leading-relaxed">
                저는 완성도 높은 개발을 최우선으로 생각합니다. 기능을 빠르게
                만드는 것보다, 사용자의 흐름과 경험까지 고려한 신뢰감 있는
                결과물을 만드는 데 집중합니다. <br />
                단순히 동작하는 코드보다, 쓰는 사람을 위한 제품을 만드는 것이
                목표입니다.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800">
                문제를 해결할 때 어떤 접근 방식을 선호하나요?
              </h4>
              <p className="text-[10px] text-gray-800 leading-relaxed">
                문제를 보면 먼저 흐름과 구조부터 파악합니다. 예외가 어디서 생길
                수 있는지, 나중에 유지보수가 쉬울지를 먼저 고민하고, 그 위에
                코드를 쌓습니다. <br /> 이 방식은 속도는 느릴 수 있지만,
                결과적으로 팀 전체의 속도를 높이는 기반이 된다고 생각합니다.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800">
                팀과 협업할 때 특히 강조하는 가치는 무엇인가요?
              </h4>
              <p className="text-[10px] text-gray-800 leading-relaxed">
                저는 소통과 공유를 가장 중요하게 생각합니다. 구현보다 먼저
                맥락을 맞추고, 함께 합의한 기준을 지키는 것을 중시합니다. <br />
                또 사용자 경험에 대한 고민을 팀과 나누며, 모두가 같은 방향으로
                나아갈 수 있도록 기여하려 합니다.
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
          <h2 className="text-2xl text-green-600 font-bold mb-2">SKILLS</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {/* Python */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* 타이틀 사진 */}
                <img
                  src="/Logo/Python.png"
                  alt="Python"
                  className="w-11 h-11 -m-0.5 object-contain shrink-0"
                />
                {/* 우측 2행 */}
                <div className="flex-1">
                  {/* 윗행: 관련 아이콘들 */}
                  <div className="flex gap-2 mb-1">
                    <div className="w-5 h-5 object-contain" />
                  </div>
                  {/* 아래행: 스킬명 + 레벨박스 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">Python</h3>
                    {renderSkillBar(4)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[9px] text-gray-800 leading-relaxed">
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  AI 서버 개발에 주력 언어로 사용하며, 2번의 프로젝트에서 전체
                  서버 구조를 직접 설계하고 구현했습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  비동기 처리, 작업 큐, 병렬 처리 등 Python의 기능을 상황에 맞게
                  적용할 수 있으며, 필요에 따라 라이브러리 내부 동작을 이해하며
                  활용합니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
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
              <ul className="space-y-1 text-[9px] text-gray-800 leading-relaxed">
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  자연어 질문 처리와 개인화 응답 생성을 위한 RAG 파이프라인을
                  단독 설계하고 구현할 수 있습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  날짜 파싱, 필터링 전략 등 사용자 질의 전처리를 통해 검색
                  정확도를 높이는 파이프라인 튜닝 경험이 있습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
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
                    <h3 className="text-sm font-bold text-slate-900">React</h3>
                    {renderSkillBar(3)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[9px] text-gray-800 leading-relaxed">
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  Zustand 기반 상태 분기 설계로 앱 재진입 시 온보딩 단계 자동
                  복원 로직을 구현해 사용자 이탈률을 낮춘 경험이 있습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  React Query 기반의 캐싱 및 병합 전략으로 불필요한 API 호출을
                  줄이고 응답 속도를 향상시켰습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
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
              <ul className="space-y-1 text-[9px] text-gray-800 leading-relaxed">
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  MongoDB 해시 샤딩을 통해 사용자 ID 기반 로그를 분산 저장하고,
                  사용자 수 증가에도 쿼리 병목을 최소화한 구조를 설계했습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  도메인 모델링 단계에서 ERD 설계에 기여하며, 정규화/비정규화
                  기준과 관계 설정에 대해 팀과 토의한 경험이 있습니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  RDBMS, NoSQL에 대한 이해를 바탕으로 프로젝트에 알맞는 스킬을
                  선택할 수 있습니다.
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
                    {renderSkillBar(3)}
                  </div>
                </div>
              </div>
              <ul className="space-y-1 text-[9px] text-gray-800 leading-relaxed">
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  Git-flow에 익숙하며, 브랜치 전략 및 커밋 컨벤션 등 협업에서의
                  규칙을 준수합니다.
                </li>
                <li className="pl-2 relative before:content-['•'] before:absolute before:left-0">
                  협업 환경에서 환경에서 충돌을 효과적으로 관리하고, Git
                  명령어를 활용해 병합 이슈를 빠르게 해결한 경험이 있습니다.
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
