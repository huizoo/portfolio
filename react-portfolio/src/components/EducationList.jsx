export default function EducationList() {
  const education = [
    {
      school: "삼성 청년 SW AI 아카데미 13기 \n (SSAFY)",
      asap: "SSAFY",
      details: [
        "2025.01 - 2025.12",
        "1학기 성적우수상 수상",
        "1학기 프로젝트 최우수상",
        "2학기 프로젝트 우수상 3회"
      ]
    },
    {
      school: "전남대학교",
      details: [
        "2016.03 - 2024.02",
        "전기공학과 학사"
      ]
    }
  ];

  return (
    <div className="space-y-6 pt-2">
      {education.map((edu, index) => (
        <div key={index} className="grid grid-cols-2 gap-6">
          {/* 중앙: 학교 이름 */}
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {edu.school}
            </div>
        
          </div>
          

          {/* 우측: 관련 정보 리스트 */}
          <ul className="space-y-1">
            {edu.details.map((detail, idx) => (
              <li
                key={idx}
                className="text-xs text-gray-900 pl-4 relative before:content-['•'] before:absolute before:left-0"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
