import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chinmay Pagar",
    achievement: "JEE Student",
    image: "/chinmay.png",
    quote:
      "The teaching staff provided deep understanding of concepts, not rote learning. The integrated approach with school academics was a game-changer.",
  },
  {
    name: "Shatakshi Pathak",
    achievement: "JEE Student",
    image: "/kaveri.png",
    quote:
      "Excellent faculty and study environment. The personalized attention and regular tests helped me improve significantly.",
  },
  {
    name: "Bhushan Gharte",
    achievement: "NEET Student",
    image: "/bhushan.webp",
    quote:
      "The teachers provided excellent guidance in Physics, Chemistry, and Biology. Regular mock tests and doubt sessions were instrumental.",
  },
  {
    name: "Siddhi Shashtri",
    achievement: "NEET Student",
    image: "/siddhi.jpeg",
    quote:
      "The comprehensive NEET preparation and dedicated faculty support helped me build strong concepts in Biology and Chemistry.",
  },
  {
    name: "Ruhaan Shinde",
    achievement: "NEET Student",
    image: "/Ruhaan.JPG",
    quote:
      "IIT Medico Guide's structured approach and regular assessments kept me motivated throughout my NEET preparation journey.",
  },
  {
    name: "Vaishnavi Aher",
    achievement: "JEE Student",
    image: "/vaishnavi.png",
    quote:
      "The problem-solving techniques and conceptual clarity provided by the faculty made JEE preparation much more manageable.",
  },
];

const StatBadge = ({ value, label, suffix }: { value: number; label: string; suffix?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div ref={ref} className="text-center group p-2 md:p-3 rounded-xl transition-all duration-300 hover:bg-navy/5">
      <div className="font-sans text-xl md:text-2xl lg:text-3xl font-bold text-navy mb-1 group-hover:scale-110 transition-transform duration-500">
        {count.toLocaleString()}{suffix || "+"}
      </div>
      <div className="text-[9px] md:text-[10px] lg:text-xs font-bold text-orange uppercase tracking-[0.1em]">{label}</div>
    </div>
  );
};

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#F6A01A] text-[#F6A01A]" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed italic mb-6 text-sm">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <img
          src={t.image}
          alt={t.name}
          className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-gray-200"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
          <p className="text-xs font-semibold text-[#525CEB]">{t.achievement}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => (
  <div className="min-h-screen bg-[#FDFDFF]">
    <HeroSection
      compact
      bgImage="https://images.unsplash.com/photo-1523240795203-d6f4c9b2a5ee?w=1600"
      title="Success Stories"
      subtitle="500+ selections every year. Join our community of winners."
      hideSubtitleOnLaptop={true}
    />

    {/* Modern Stats Bar - LIGHT VERSION */}
    <section className="bg-white/80 py-6 md:py-8 -mt-14 relative z-20 mx-2 md:mx-4 lg:mx-auto max-w-5xl rounded-[20px] md:rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,92,235,0.03),transparent)]" />
      <div className="container mx-auto px-2 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
        <StatBadge value={500} label="Annual Selections" />
        <StatBadge value={14000} label="Total Students" />
        <StatBadge value={95} label="Success Rate" suffix="%" />
        <StatBadge value={20} label="IITian Faculty" />
      </div>
    </section>

    <section className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 underline decoration-orange decoration-2 underline-offset-4">Hear from Our Achievers</h2>
          <p className="text-gray-600 text-lg">Real stories from students who transformed their dreams into reality with the right guidance and hard work.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
