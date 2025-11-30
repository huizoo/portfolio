export default function AwardsList() {
  const awards = [
    {
      date: "2025.06",
      content: "삼성 청년 SW·AI 아카데미",
      award: "성적우수상",
      rank: "3등/23명",
    },
    {
      date: "2025.06",
      content: "삼성 청년 SW·AI 아카데미 프로젝트",
      award: "최우수상",
      rank: "1등/11팀",
    },
    {
      date: "2025.08",
      content: "삼성 청년 SW·AI 아카데미 프로젝트",
      award: "우수상",
      rank: "2등/9팀",
    },
    {
      date: "2025.10",
      content: "삼성 청년 SW·AI 아카데미 프로젝트",
      award: "우수상",
      rank: "2등/8팀",
    },
    {
      date: "2025.11",
      content: "삼성 청년 SW·AI 아카데미 프로젝트",
      award: "우수상",
      rank: "2등/6팀",
    },
  ];

  return (
    <ul className="space-y-1.5">
      {awards.map((award, index) => (
        <li
          key={index}
          className="flex justify-between text-xs text-gray-800 leading-relaxed"
        >
          <span>{award.date}</span>
          <span>
            <span>{award.content}</span>{" "}
            <span className="font-semibold">{award.award}</span>
            <span>({award.rank})</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
