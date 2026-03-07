import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqItem = ({ q, a, num }: { q: string; a: string; num: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-[32px] border transition-all duration-500 overflow-hidden ${open ? 'border-orange shadow-2xl shadow-orange/5' : 'border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-6 w-full p-8 text-left"
      >
        <span className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-500 ${open ? 'bg-orange text-white rotate-12 scale-110 shadow-lg shadow-orange/20' : 'bg-gray-50 text-gray-400'}`}>
          {num}
        </span>
        <div className="flex-1 flex items-center justify-between">
          <h3 className={`font-bold text-lg transition-colors duration-300 ${open ? 'text-navy' : 'text-gray-700'}`}>{q}</h3>
          <div className={`p-2 rounded-xl transition-all duration-500 ${open ? 'bg-orange/10 text-orange rotate-180' : 'bg-gray-50 text-gray-300'}`}>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-8 pb-8 pl-[88px]">
          <div className="h-px bg-gray-100 mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFF] py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[120px] -mr-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-[100px] -ml-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block bg-orange/10 text-orange font-bold text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6">
            Everything You Need
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 underline decoration-orange decoration-2 underline-offset-4">
            Your Questions, <span className="text-orange">Answered.</span>
          </h1>
          <p className="text-gray-600 text-lg">Clear insights into our academic programs, faculty, and student life.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <FaqItem
            num="01"
            q="What is IIT Medico Guide?"
            a="IIT Medico Guide is a premier coaching institute offering integrated school and coaching programs under one roof for JEE and NEET preparation."
          />
          <FaqItem
            num="02"
            q="What makes IIT Medico Guide different?"
            a="We offer an integrated system with school and coaching combined, a limited batch size of 40 students, a complete set of IITian/Doctor faculty, and a rigorous 11-hour daily dedicated schedule."
          />
          <FaqItem
            num="03"
            q="What courses do you offer?"
            a="We offer comprehensive residential and daytime courses for JEE Advanced, NEET UG, and MHT-CET preparation for students from Class 8 to Class 12."
          />
          <FaqItem
            num="04"
            q="How experienced are your faculty members?"
            a="Our faculty consists of 100% IITians, NITians, and doctors from top India medical colleges who have mastered these exams themselves and carry years of specialized teaching experience."
          />
          <FaqItem
            num="05"
            q="How many students are there in each batch?"
            a="We strictly maintain a maximum batch size of 40 students to ensure personalized attention, individual mentorship, and focused guidance for every single student."
          />
          <FaqItem
            num="06"
            q="Are the courses available online?"
            a="We primarily focus on the high-impact offline integrated coaching model. However, we do provide digital portals for study materials and distance learning modules. Contact us for specifics."
          />
          <FaqItem
            num="07"
            q="How is the study material provided?"
            a="We provide elite, curated study material covering all topics comprehensively with practice questions, monthly mock tests, and regular strategy assignments designed by experts."
          />
          <FaqItem
            num="08"
            q="What is the fee structure for the courses?"
            a="Fee structure varies based on the course level and student class. Please contact our Nashik hub at 7030300666 or 8510895060 for a transparent and detailed fee breakdown."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
