export default function CertificatesList() {
  const certificates = [
    { date: "2025.3", content: "삼성 상시 SW 역량 테스트 Level A" },
    // { date: "2025.12", content: "정보처리기사 (예정)" }
  ];

  return (
    <ul className="space-y-1.5">
      {certificates.map((cert, index) => (
        <li
          key={index}
          className="flex justify-between text-[11px] text-gray-800 leading-relaxed"
        >
          <span>{cert.date}</span>
          <span>{cert.content}</span>
        </li>
      ))}
    </ul>
  );
}
