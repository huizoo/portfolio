export default function Experience() {
  const experiences = [
    {
      date: "2021.09 - 2023.09",
      content: "카페 바리스타 (Part-time)"
    }
  ];

  return (
    <ul className="space-y-1.5">
      {experiences.map((exp, index) => (
        <li key={index} className="flex justify-between text-xs text-gray-800 leading-relaxed">
          <span>{exp.date}</span>
          <span>{exp.content}</span>
        </li>
      ))}
    </ul>
  );
}
