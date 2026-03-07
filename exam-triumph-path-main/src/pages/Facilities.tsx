import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import {
  Home, Utensils, Bus, ShieldCheck, ArrowRight, Shield
} from "lucide-react";

const Facilities = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      <HeroSection
        compact
        bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600"
        title="Our Facilities"
        subtitle="State-of-the-art infrastructure and holistic support for your ultimate success."
      />

      {/* Main Feature: Hostel & Meals */}
      <section className="py-6 md:py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange/5 rounded-full blur-3xl -mr-32 md:-mr-64 -mt-16 md:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#525CEB]/5 rounded-full blur-3xl -ml-32 md:-ml-64 -mb-16 md:-mb-32"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-orange font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Premium Living</span>
            <h2 className="text-2xl md:text-4xl font-bold text-navy mb-6 leading-tight underline decoration-orange decoration-2 underline-offset-4">Residential Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4 md:px-0">Experience comfort, security, and nutritious dining designed to safeguard your focus and optimize your studies.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex gap-4 items-start group bg-orange/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-orange/10">
                <div className="w-14 h-14 rounded-xl bg-orange/20 flex items-center justify-center flex-shrink-0 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Home className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Hostel Facility</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Experience comfort and security in our well-furnished hostel. Enjoy 24/7 security.
                  </p>
                  <div className="bg-white border-l-4 border-orange p-3 rounded-lg flex items-start gap-2">
                    <Shield className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm font-medium">
                      "Hostel facility for all students to safeguard them from glamorous city life."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group bg-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-emerald-100">
                <div className="w-14 h-14 rounded-xl bg-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Utensils className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Healthy & Balanced Meals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Savor balanced meals that cater to your tastes and nutritional needs, ensuring you stay energized for your rigorous study system.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-blue-100">
                <div className="w-14 h-14 rounded-xl bg-blue-200 flex items-center justify-center flex-shrink-0 text-blue-700 group-hover:bg-[#525CEB] group-hover:text-white transition-colors">
                  <Bus className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Reliable Transport</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Travel hassle-free with our reliable and punctual transport services, designed to save your valuable time.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/hostel.jpeg"
                    alt="Hostel Facility"
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/meal.jpeg"
                    alt="Healthy Meals"
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Holistic Support Systems */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-orange font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">Our Methodology & Support</span>
            <h2 className="text-2xl md:text-4xl font-bold text-navy mb-6 leading-tight underline decoration-orange decoration-2 underline-offset-4">Academic & Holistic Support Systems</h2>
            <div className="text-navy text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed px-2">
              <span className="text-[#00BCD4] font-black uppercase underline underline-offset-[6px] md:underline-offset-8 decoration-[2px] md:decoration-[3px]">SUCCESS</span>
              {" is more than luck, it's about "}
              <span className="text-[#00BCD4] font-black uppercase underline underline-offset-[6px] md:underline-offset-8 decoration-[2px] md:decoration-[3px]">PLANNING</span>
              {" towards it."}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* List Content */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              {[
                "Batch size of only 40 students to guarantee individualized attention.",
                "Safe and Secure Campus with extra safety measures for girl students.",
                "11 Hours Dedicated System including lectures, DPP solving, and doubt sessions.",
                "Classes by Top IITian and Doctor Educators who remain constant throughout the course.",
                "State-of-the-Art Infrastructure with modern, library-equipped classrooms.",
                "Daily 5 Hours Dedicated Doubt Sessions for one-to-one problem solving.",
                "Mobile Use Strictly Prohibited to avoid digital distractions (Xerox material provided).",
                "360° Care including Career Counseling, Psychological & Medical Support.",
                "Motivational lectures, Resilience training, and Stress Buster sessions.",
                "Extracurricular activities like Meditation, Sports, and Field Trips.",
                "Our philosophy: Every child is unique and deserves equal attention."
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4FAFF] border-l-4 border-orange px-6 py-4 text-base md:text-lg text-slate-800 font-medium"
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Image Collection */}
            <div className="lg:col-span-5 flex flex-col gap-6 h-full lg:min-h-[600px] mt-8 lg:mt-0">
              {/* Big Image Section - Fixed Circle */}
              <div className="flex items-center justify-center py-4 lg:py-6">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 md:border-8 border-white relative transition-all duration-500 hover:scale-[1.02] group bg-white">
                  <img
                    src="/counselling.png"
                    alt="Student Counselling"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
                </div>
              </div>

              {/* Static Building Image Section */}
              <div className="h-48 md:h-64 rounded-2xl md:rounded-[32px] overflow-hidden shadow-xl border-2 md:border-4 border-white bg-gray-50">
                <img
                  src="/School Building.avif"
                  alt="Our High-End Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
