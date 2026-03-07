import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const tabs = ["JEE Advanced", "JEE Mains", "NEET", "MHT-CET"] as const;

type TabKey = (typeof tabs)[number];

interface ExamData {
  overview: string;
  image: string;
  details: { param: string; value: string }[];
  pattern: string[];
  tips: string[];
}

const examData: Record<TabKey, ExamData> = {
  "JEE Advanced": {
    overview:
      "JEE Advanced is the gateway to India's most prestigious engineering institutions — the Indian Institutes of Technology (IITs). It is considered one of the toughest undergraduate entrance exams in the world.",
    image: "/jee advance.jpg",
    details: [
      { param: "Conducted By", value: "IITs (on rotational basis)" },
      { param: "Frequency", value: "Once a year" },
      { param: "Mode", value: "Computer Based Test (CBT)" },
      { param: "Papers", value: "2 papers, each 3 hours" },
      { param: "Subjects", value: "Physics, Chemistry, Mathematics" },
      { param: "Eligibility", value: "Top 2.5 lakh JEE Main qualifiers" },
      { param: "Attempts", value: "Maximum 2 consecutive years" },
      { param: "Colleges", value: "All 23 IITs + ISM Dhanbad" },
    ],
    pattern: [
      "Paper 1 & Paper 2 — both mandatory",
      "Multiple question types: MCQ, Integer type, Match the columns",
      "No fixed marking scheme — varies year to year",
      "Negative marking applicable in some sections",
    ],
    tips: [
      "Master NCERT first, then move to advanced problems",
      "Solve last 10 years' JEE Advanced papers",
      "Focus on conceptual clarity, not shortcuts",
      "Time management is critical — practice under exam conditions",
      "Weak areas: dedicate extra hours on lowest-scoring subjects",
    ],
  },
  "JEE Mains": {
    overview:
      "JEE Mains is the national-level entrance exam for admission to NITs, IIITs, and Government Funded Technical Institutions (GFTIs). It also serves as the qualifying exam for JEE Advanced.",
    image: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800",
    details: [
      { param: "Conducted By", value: "NTA (National Testing Agency)" },
      { param: "Frequency", value: "Twice a year (Jan & April)" },
      { param: "Mode", value: "Computer Based Test (CBT)" },
      { param: "Total Marks", value: "300" },
      { param: "Questions", value: "90" },
      { param: "Duration", value: "3 hours" },
      { param: "Subjects", value: "Physics, Chemistry, Mathematics" },
      { param: "Eligibility", value: "Class 12 PCM, min 75% marks" },
      { param: "Attempts", value: "Unlimited (best score considered)" },
    ],
    pattern: [
      "Section A: 20 MCQs (4 marks each, -1 negative marking)",
      "Section B: 10 Numerical (5 attempts, 4 marks, no negative)",
      "Best of 2 attempts considered for ranking",
    ],
    tips: [
      "NCERT is the bible — read every line",
      "Practice 50+ questions daily per subject",
      "Attempt full mock tests in CBT format",
      "Focus on speed and accuracy",
      "Revise formulae and shortcuts weekly",
    ],
  },
  NEET: {
    overview:
      "NEET UG (National Eligibility cum Entrance Test) is the single national-level entrance exam for MBBS, BDS, BAMS, BSMS, BUMS, BHMS courses in India. Clearing NEET is mandatory for all medical aspirants.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    details: [
      { param: "Conducted By", value: "NTA (National Testing Agency)" },
      { param: "Frequency", value: "Once a year" },
      { param: "Mode", value: "Pen & Paper (OMR sheet)" },
      { param: "Total Marks", value: "720" },
      { param: "Questions", value: "180" },
      { param: "Duration", value: "3 hours 20 minutes" },
      { param: "Subjects", value: "Physics (45Q), Chemistry (45Q), Biology (90Q)" },
      { param: "Eligibility", value: "Class 12 PCB, minimum 50% marks" },
      { param: "Colleges", value: "AIIMS, JIPMER, all medical colleges in India" },
    ],
    pattern: [
      "Physics: 45 questions = 180 marks",
      "Chemistry: 45 questions = 180 marks",
      "Botany: 45 questions = 180 marks",
      "Zoology: 45 questions = 180 marks",
      "Each correct: +4 | Each wrong: -1",
    ],
    tips: [
      "Biology is 50% of NEET — master NCERT line by line",
      "Physics: focus on numerical problems and formulas",
      "Chemistry: NCERT Organic Chemistry is critical",
      "Solve 10+ years' NEET papers",
      "Revise at least 3 times before exam day",
    ],
  },
  "MHT-CET": {
    overview:
      "MHT-CET (Maharashtra Health and Technical Common Entrance Test) is the state-level entrance exam for admission to engineering and pharmacy courses in Maharashtra's top institutions including COEP and VJTI.",
    image: "/cet.png",
    details: [
      { param: "Conducted By", value: "State CET Cell, Maharashtra" },
      { param: "Frequency", value: "Once a year" },
      { param: "Mode", value: "Computer Based Test (CBT)" },
      { param: "Total Marks", value: "200" },
      { param: "Questions", value: "150" },
      { param: "Duration", value: "3 hours" },
      { param: "Subjects", value: "Physics, Chemistry, Maths/Biology" },
      { param: "Eligibility", value: "Class 12 Maharashtra Board or equivalent" },
      { param: "Colleges", value: "COEP, VJTI, ICT Mumbai, top Maharashtra colleges" },
    ],
    pattern: [
      "PCM Group: 50Q Physics + 50Q Chemistry + 50Q Maths",
      "PCB Group: 50Q Physics + 50Q Chemistry + 50Q Biology",
      "Each correct: +2 | Wrong: -0.5 (select sections)",
    ],
    tips: [
      "Maharashtra State Board syllabus is the base",
      "Focus on Class 11 & 12 textbook problems thoroughly",
      "MHT-CET and JEE/NEET preparation overlap significantly",
      "Attempt CET-specific mock tests in the last 3 months",
      "Time management: 1.2 minutes per question average",
    ],
  },
};

const timelineEvents = [
  { month: "Nov–Dec", event: "JEE Mains Session 1 Registration" },
  { month: "Jan", event: "JEE Mains Session 1 Exam" },
  { month: "Feb–Mar", event: "JEE Mains Session 2 Registration" },
  { month: "April", event: "JEE Mains Session 2 Exam" },
  { month: "April", event: "JEE Advanced Registration" },
  { month: "May", event: "JEE Advanced Exam" },
  { month: "March", event: "NEET Registration" },
  { month: "May", event: "NEET Exam" },
  { month: "Apr–May", event: "MHT-CET Exam" },
];

const AboutExam = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("JEE Advanced");
  const data = examData[activeTab];

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      <HeroSection
        compact
        bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600"
        title="Know Your Exam"
        subtitle="Complete guide to JEE Advanced, JEE Mains, NEET & MHT-CET"
      />

      <section className="py-16 bg-gradient-to-br from-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[100px] -mr-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-[100px] -ml-48" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Tab nav - Modern Pill style */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-sm ${activeTab === tab
                  ? "bg-navy text-white shadow-lg"
                  : "bg-white text-gray-500 hover:bg-gray-50 hover:text-navy border border-gray-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-orange/10 text-orange font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                  Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{activeTab}</h2>
                <p className="text-gray-600 leading-relaxed">{data.overview}</p>
              </div>

              {/* Details table */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-bold text-navy">Quick Facts</h3>
                </div>
                <div>
                  {data.details.map((d, i) => (
                    <div
                      key={d.param}
                      className={`flex items-center px-6 py-3 ${i !== data.details.length - 1 ? "border-b border-gray-50" : ""
                        }`}
                    >
                      <div className="w-1/2 font-bold text-sm text-gray-400 uppercase tracking-tight">{d.param}</div>
                      <div className="w-1/2 text-sm font-bold text-navy">{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <img
                  src={data.image}
                  alt={activeTab}
                  className="rounded-2xl w-full h-[320px] object-cover shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                    </span>
                    Exam Pattern
                  </h3>
                  <ul className="space-y-3">
                    {data.pattern.map((p) => (
                      <li key={p} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#525CEB]/10 flex items-center justify-center text-[#525CEB]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" /></svg>
                    </span>
                    Pro Tips
                  </h3>
                  <ul className="space-y-3">
                    {data.tips.map((t, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#525CEB]/10 text-[#525CEB] text-[10px] font-black shrink-0">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Compact Roadmap with Integrated Months */}
      <section className="bg-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-orange font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Timeline & Roadmap</span>
            <h2 className="text-2xl md:text-4xl font-bold text-navy mb-6 leading-tight">Exam Calendar</h2>
            <div className="w-16 h-1.5 bg-orange mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* The central vertical line */}
            <div className="absolute left-1/2 top-4 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block" />

            <div className="space-y-4">
              {timelineEvents
                .filter(e => {
                  if (activeTab === "JEE Advanced") return e.event.includes("JEE Advanced");
                  if (activeTab === "JEE Mains") return e.event.includes("JEE Mains");
                  if (activeTab === "NEET") return e.event.includes("NEET");
                  if (activeTab === "MHT-CET") return e.event.includes("MHT-CET");
                  return true;
                })
                .map((e, i) => (
                  <div key={i} className="relative">
                    <div className="grid md:grid-cols-2 gap-x-12 items-center relative">
                      {/* The Numbered Dot */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full border-[4px] border-white shadow-lg flex items-center justify-center text-white text-base font-black z-30 hidden md:flex">
                        {i + 1}
                      </div>

                      {i % 2 === 0 ? (
                        <>
                          <div className="relative group">
                            {/* Glowing background */}
                            <div className="absolute -inset-1 bg-cyan-400/10 rounded-2xl blur-lg group-hover:bg-cyan-400/20 transition-all duration-500" />
                            <div className="relative bg-blue-50/50 rounded-2xl p-5 shadow-sm border border-blue-100/50 hover:bg-white hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 transition-all duration-500">
                              <h4 className="text-base md:text-lg font-bold text-navy md:text-right leading-tight">
                                {e.event} <span className="text-orange whitespace-nowrap">({e.month})</span>
                              </h4>
                            </div>
                          </div>
                          <div className="hidden md:block" />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:block" />
                          <div className="relative group">
                            {/* Glowing background */}
                            <div className="absolute -inset-1 bg-cyan-400/10 rounded-2xl blur-lg group-hover:bg-cyan-400/20 transition-all duration-500" />
                            <div className="relative bg-blue-50/50 rounded-2xl p-5 shadow-sm border border-blue-100/50 hover:bg-white hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 transition-all duration-500">
                              <h4 className="text-base md:text-lg font-bold text-navy leading-tight">
                                {e.event} <span className="text-orange whitespace-nowrap">({e.month})</span>
                              </h4>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutExam;
