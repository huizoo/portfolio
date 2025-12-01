import FirstPage from "./components/FirstPage";
import Header from "./components/Header";
import Section from "./components/Section";
import EducationList from "./components/EducationList";
import AwardsList from "./components/AwardsList";
import CertificatesList from "./components/CertificatesList";
import Experience from "./components/Experience";
import ProjectSummaryList from "./components/ProjectSummaryList";
import ToGatherProject from "./components/ToGatherProject";
import PickyProject from "./components/PickyProject";
import OtterReviewProject from "./components/OtterReviewProject";
import PageBreak from "./components/PageBreak";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[210mm] mx-auto bg-white shadow-lg print:shadow-none print:max-w-full">
        {/* 📄 Page 1: 새 표지 - Skills 포함 */}
        <FirstPage />

        <PageBreak />

        {/* 📄 Page 2: 요약 - 3행 구조 */}
        <div className="relative h-[297mm] w-[210mm]">
          {/* 콘텐츠 영역 - 상단 20mm, 좌우 10mm, 하단 20mm 마진 */}
          <div className="absolute top-[20mm] left-[10mm] right-[10mm] bottom-[20mm] overflow-hidden">
            <Header />

            {/* 1행: Education */}
            <Section title="Education" layout="horizontal">
              <EducationList />
            </Section>

            {/* 2행: Awards와 Certificates를 2열로 */}
            <div className="grid grid-cols-[1.4fr_1fr] gap-x-12 mt-8">
              <Section title="Awards">
                <AwardsList />
              </Section>

              <div className="space-y-9">
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

          {/* 페이지 번호 - 하단 10mm */}
          <div className="absolute bottom-[10mm] left-0 right-0 text-center text-xs text-slate-800">
            - 2 -
          </div>
        </div>

        <PageBreak />

        {/* 📄 Page 3-4-5: ToGather 프로젝트 */}
        <ToGatherProject />

        {/* 📄 Page 6-7: Picky 프로젝트 */}
        <PickyProject />

        {/* 📄 Page 8-9: OtterReview 프로젝트 */}
        <OtterReviewProject />
      </div>
    </div>
  );
}

export default App;
