import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Trophy, Award, Star, X } from "lucide-react";
import { useState } from "react";

const toppers = [
  {
    name: "Krishna Kadam",
    exam: "JEE",
    rank: "99.83%",
    college: "NIT Surathkal",
    image: "/krishna.png",
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Purva",
    exam: "JEE",
    rank: "99.5%",
    college: "IIT Roorkee",
    image: "/placeholder.svg",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Yayati Purkar",
    exam: "JEE",
    rank: "99.27%",
    college: "IIT Kharagpur",
    image: "/placeholder.svg",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Aagam Kasliwal",
    exam: "JEE",
    rank: "99.8%",
    college: "IIT Bombay",
    image: "/AAGAM.webp",
    color: "from-orange to-orange-hover",
  },
  {
    name: "Bhushan Gharte",
    exam: "NEET",
    rank: "GS Mumbai",
    college: "Medical College",
    image: "/bhushan.webp",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Krishna",
    exam: "JEE",
    rank: "99.66%",
    college: "IIT Kharagpur",
    image: "/placeholder.svg",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Chanchal More",
    exam: "NEET",
    rank: "GMC Ambernath",
    college: "Medical College",
    image: "/placeholder.svg",
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "Saniya",
    exam: "NEET",
    rank: "GMC Solapur",
    college: "Medical College",
    image: "/placeholder.svg",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "Ruhaan Shinde",
    exam: "NEET",
    rank: "VPN Nashik",
    college: "Medical College",
    image: "/Ruhaan.JPG",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Jitendra",
    exam: "NEET",
    rank: "GMC Satara",
    college: "Medical College",
    image: "/placeholder.svg",
    color: "from-red-500 to-red-700",
  },
  {
    name: "Paulomi",
    exam: "NEET",
    rank: "GMC Nanded",
    college: "Medical College",
    image: "/placeholder.svg",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Ronit",
    exam: "JEE",
    rank: "99.2%",
    college: "IIT Kharagpur",
    image: "/placeholder.svg",
    color: "from-violet-500 to-violet-700",
  },
];

const ResultCard = ({ topper }: { topper: typeof toppers[0] }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`relative group bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
    >
      {/* Blue header */}
      <div className="bg-navy rounded-t-xl -mx-4 -mt-4 mb-4 h-12"></div>
      
      {/* Profile image - positioned to overlap header */}
      <div className="flex justify-center -mt-14 mb-2">
        <div className="w-24 h-24 rounded-full border-3 border-white shadow-lg overflow-hidden bg-white">
          <img
            src={topper.image}
            alt={topper.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-sm font-bold text-gray-800 mb-2">{topper.name}</h3>
        <div className={`font-bold text-blue-600 mb-1 ${topper.exam === "JEE" ? "text-2xl" : "text-sm"}`}>{topper.rank}</div>
        <p className="text-blue-600 font-semibold text-xs">{topper.exam}</p>
        {topper.exam === "JEE" && (
          <p className="text-gray-600 font-medium text-xs mt-1">{topper.college}</p>
        )}
      </div>
    </div>
  );
};

const Results = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <img
              src="/om.jpeg"
              alt="Student Achievement"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
      <section className="w-full bg-white py-0 overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row items-stretch md:h-[350px] lg:h-[420px] xl:h-[480px] w-full">
          {/* Results Banner - Full width */}
          <div className="w-full flex-1 bg-white flex items-center justify-center p-0">
            <img
              src="/result.jpeg"
              alt="Results Banner"
              className="w-full h-full object-contain block"
            />
          </div>
        </div>
      </section>
      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 underline decoration-orange decoration-2 underline-offset-4">
              Our Achievers
            </h2>
            <p className="text-gray-600 text-lg">
              Proud moments of our students who achieved remarkable success in competitive exams
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {toppers.map((topper) => (
              <ResultCard key={topper.name} topper={topper} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
