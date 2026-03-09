import { Link } from "react-router-dom";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import { School, GraduationCap, Users, Clock, ChevronDown, Star, ArrowRight, Quote, PlayCircle, TrendingUp, Award, Shield, X } from "lucide-react";
import { useState, useEffect } from "react";

/* ── YouTube Video Card ── */
const VideoCard = ({ videoId }: { videoId: string }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 bg-black cursor-pointer group"
      style={{ aspectRatio: "16/9" }}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Elegant overlay */}
          <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-all duration-300 flex flex-col items-center justify-center">
            {/* Glass Play Button */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:bg-orange/40 opacity-0 group-hover:opacity-100" />
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-orange group-hover:border-orange transition-all duration-500 group-hover:scale-110 shadow-2xl relative z-10">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5 filter drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <span className="mt-2 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 drop-shadow-lg">
              Watch Story
            </span>
          </div>
        </>
      )}
    </div>
  );
};

/* ── Stats Bar ── */
const StatItem = ({ value, label, sublabel, icon: Icon, color }: { value: number; label: string; sublabel: string; icon: any; color: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div ref={ref} className="text-left bg-white rounded-lg shadow-md border border-gray-100 p-2 md:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-2 md:gap-3">
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm md:text-xl text-gray-900 mb-1">
            {count.toLocaleString()}+
          </div>
          <div className="font-semibold text-gray-800 text-[8px] md:text-xs mb-1 uppercase tracking-wide">{label}</div>
          <div className="text-[7px] md:text-xs text-gray-500">{sublabel}</div>
        </div>
      </div>
    </div>
  );
};

/* ── Feature Card ── */
const FeatureCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`rounded-2xl bg-card p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};

/* ── FAQ Item ── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-foreground hover:text-orange transition-colors"
      >
        {q}
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
};



/* ── Testimonial Preview ── */
const TestimonialPreview = ({
  name,
  achievement,
  image,
  quote,
}: {
  name: string;
  achievement: string;
  image: string;
  quote: string;
}) => (
  <div className="rounded-2xl bg-card p-6 shadow-card">
    <div className="flex items-center gap-3 mb-3">
      <img
        src={image}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-bold text-foreground">{name}</h4>
        <p className="text-xs text-orange font-semibold">{achievement}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed italic">"{quote}"</p>
  </div>
);

/* ── HOME PAGE ── */
const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const banners = ["/posterimage1.jpeg", "/banner1.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash === '#enquiry-form') {
      setTimeout(() => {
        const element = document.getElementById('enquiry-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
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
              src="/popup.jpeg"
              alt="Popup Image"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-white -mt-2">
        <div className="relative w-full h-[50vh] md:h-[450px] lg:h-[550px] bg-white">
          {banners.map((banner, index) => (
            <img
              key={banner}
              src={banner}
              alt="Banner"
              className={`w-full transition-opacity duration-1000 ${currentBanner === index
                ? "relative opacity-100 z-10 h-[50vh] md:h-full object-contain md:object-fill"
                : "absolute inset-0 opacity-0 z-0 h-[50vh] md:h-full object-contain md:object-fill"
                }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white pt-0 md:pt-8">
        <div className="container mx-auto px-2 md:px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pb-8 md:pb-0">
          <StatItem value={4.9} label="STUDENT RATING" sublabel="Verified Reviews" icon={Star} color="bg-yellow-500" />
          <StatItem value={2847} label="SUCCESS STORIES" sublabel="Last 5 Years" icon={TrendingUp} color="bg-green-500" />
          <StatItem value={50000} label="ASPIRANTS" sublabel="Community Members" icon={Users} color="bg-blue-500" />
          <StatItem value={15} label="YEARS LEGACY" sublabel="Of Trust & Quality" icon={Shield} color="bg-orange-500" />
        </div>
      </section>
      {/* Student Enquiry Form */}
      <section id="enquiry-form" className="py-8 md:py-12 relative scroll-mt-20" style={{ backgroundImage: 'url(/T2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Side - Image and Points */}
            <div>
              <div className="relative mb-6">
                <img
                  src="/harshit.webp"
                  alt="Students studying"
                  className="w-full max-w-md h-96 object-cover mx-auto rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md">
                  <div className="h-1 bg-navy rounded-full"></div>
                  <div className="h-8 bg-gradient-to-r from-orange to-yellow-400 rounded-b-2xl"></div>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <p className="text-foreground text-base mb-4 leading-relaxed">
                  IIT Medico Guide brings Free Guidance Sessions with Star Faculties of IIT Medico Guide. Join and get your all queries resolved.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-500 text-xl mt-1">✓</span>
                    <span className="text-foreground text-sm">Live session with IIT Medico Guide Star Faculties</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-500 text-xl mt-1">✓</span>
                    <span className="text-foreground text-sm">Get tips & tricks to crack IIT / NEET</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-500 text-xl mt-1">✓</span>
                    <span className="text-foreground text-sm">Get all your queries resolved</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-500 text-xl mt-1">✓</span>
                    <span className="text-foreground text-sm">Learn IIT Medico Guide offerings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10 border-t-[8px] border-t-[#F6A01A] border-b-[12px] border-b-[#0A2540]">
              <div className="text-center mb-8 px-2 mt-2">
                <h2 className="text-2xl md:text-[28px] font-bold text-navy leading-snug">
                  Student Enquiry Form!
                </h2>
              </div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Student Name *</label>
                    <input type="text" required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all shadow-sm" placeholder="Enter full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Parent Name *</label>
                    <input type="text" required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all shadow-sm" placeholder="Enter parent name" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all shadow-sm" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all shadow-sm" placeholder="10-digit number" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Class *</label>
                    <select required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all shadow-sm">
                      <option value="">Select Class</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Course Interest *</label>
                    <select required className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all shadow-sm">
                      <option value="">Select Course</option>
                      <option value="jee">JEE Advanced</option>
                      <option value="neet">NEET UG</option>
                      <option value="mht-cet">MHT-CET</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Message</label>
                  <textarea rows={3} className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition-all resize-none shadow-sm" placeholder="Any specific questions or requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0A2540] hover:bg-[#071a2e] text-white font-bold text-[1.1rem] py-4 rounded-xl transition-all duration-300 mt-6 shadow-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="pr-4 md:pr-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-10 text-[#1a202c]">
                What IIT Medico Guide Offers ?
              </h3>
              <div className="space-y-6">
                {[
                  "Integrated System-Coaching and College under one roof",
                  "Limited batch size of 40 students only",
                  "Complete set of IITian, NITian and Doctor faculties",
                  "11 hour study schedule",
                  "Daily 5 hours of Doubt Solving and Self Study Sessions",
                  "Periodic Tests and Regular Mentorship Sessions",
                  "Best quality study material",
                  "Holistic Growth",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#525CEB] flex items-center justify-center shadow-sm">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-[1.15rem] font-bold text-[#2d3748] tracking-tight">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/ramesh.webp"
                  alt="Students studying"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="/school.webp"
                  alt="Campus"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/parag.jpeg"
                  alt="Teacher"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="relative w-full h-80 bg-navy rounded-2xl shadow-lg overflow-hidden">
                  <div className="absolute top-6 left-6 right-6 z-10">
                    <p className="text-yellow-400 font-bold text-lg">IITian, NITian AND DOCTOR</p>
                    <p className="text-white font-bold text-xl">FACULTIES</p>
                  </div>
                  <img
                    src="/faculties.webp"
                    alt="Faculties"
                    className="absolute bottom-0 w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="pt-12 pb-6 md:pt-16 md:pb-8 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-orange-100/60 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-navy">
              Hear from Our Achievers
            </h2>
            <div className="w-24 h-1.5 bg-navy mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F6A01A] text-[#F6A01A]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic mb-6 text-sm">
                "The teaching staff provided deep understanding of concepts, not rote learning. The integrated approach with school academics was a game-changer."
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img
                  src="/AAGAM.webp"
                  alt="Aagam Kasliwal"
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Aagam Kasliwal</h4>
                  <p className="text-xs font-semibold text-[#525CEB]">IIT Bombay — AIR 61</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F6A01A] text-[#F6A01A]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic mb-6 text-sm">
                "Excellent faculty and study environment. The personalized attention and regular tests helped me improve significantly."
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img
                  src="/kaveri.png"
                  alt="Kaveri Bhadane"
                  className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-gray-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Kaveri Bhadane</h4>
                  <p className="text-xs font-semibold text-[#38A169]">JEE Student</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F6A01A] text-[#F6A01A]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic mb-6 text-sm">
                "The teachers provided excellent guidance in Physics, Chemistry, and Biology. Regular mock tests and doubt sessions were instrumental."
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img
                  src="/bhushan.webp"
                  alt="Bhushan Gharte"
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Bhushan Gharte</h4>
                  <p className="text-xs font-semibold text-[#3182CE]">NEET Score: 692</p>
                </div>
              </div>
            </div>
          </div>

          {/* Videos Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8 pb-2">
            {["N4ZGfHLR0SM", "kLzbTQuQ9Yw", "yJMRrw1Sucg", "OWxJl3hiuTk"].map((videoId) => (
              <VideoCard key={videoId} videoId={videoId} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <img
                  src="/faq.webp"
                  alt="Student"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Side - FAQ */}
            <div>
              <p className="text-teal-500 font-bold text-sm mb-2 uppercase tracking-wider">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy">
                Frequently Asked Questions and Answers
              </h2>

              <div className="space-y-4">
                <FaqItem
                  q="I did not take a session, how do I reschedule that..."
                  a="Drop a mail with your convenient timing to contact@iitmedicoguide.in. You will get a callback from your Student Account Manager for rescheduling the session."
                />
                <FaqItem
                  q="How frequently will I get my tests from teachers?"
                  a="You can request tests and assignments directly from your teacher as per your preparation pace."
                />
                <FaqItem
                  q="What if I miss a class without informing?"
                  a="Missing class without prior notice (at least 2 hours before) is treated as a late cancellation under our policy."
                />
              </div>

              <div className="mt-8 text-center">
                <div className="relative inline-block group mt-2">
                  {/* Floating dot */}
                  <span className="absolute -top-4 left-2 w-2 h-2 rounded-full bg-orange z-10 transition-transform group-hover:-translate-y-1"></span>

                  {/* Orange circle ring */}
                  <span className="absolute top-1/2 -left-4 -translate-y-1/2 w-14 h-14 rounded-full border border-orange z-0 transition-transform group-hover:-translate-x-1"></span>

                  {/* The Button */}
                  <Link
                    to="/faq"
                    className="relative z-10 inline-flex items-center gap-3 bg-white border border-gray-200 text-navy font-bold text-lg px-8 py-3.5 rounded-full hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
