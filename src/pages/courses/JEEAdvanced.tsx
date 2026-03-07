import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const JEEAdvanced = () => (
    <>
        <HeroSection
            compact
            bgImage="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600"
            title="JEE Advanced"
            subtitle="IIT-focused preparation by IIT alumni. Deep concepts. Real results."
        />

        <section className="py-8 md:py-16 bg-white">
            <div className="container mx-auto px-2 md:px-4 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
                    <div>
                        <span className="inline-block bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">Engineering</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-4 underline decoration-orange decoration-2 underline-offset-4">JEE Advanced Preparation Program</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our JEE Advanced Course is designed for students aiming to secure top ranks and gain admission to the prestigious IITs and other elite engineering institutes in India. With a focus on building conceptual clarity and advanced problem-solving skills, we guide students through a well-structured journey to crack the JEE Advanced with confidence.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-6">
                            <h3 className="font-bold text-navy text-lg mb-4">What's Included</h3>
                            <ul className="space-y-3">
                                {[
                                    "Complete coverage of PCM for JEE Advanced",
                                    "Expert faculty from IITs and NITs",
                                    "Focus on conceptual clarity and problem-solving",
                                    "Daily practice problems (DPPs) with high-order thinking",
                                    "Full-length tests modelled on JEE Advanced format",
                                    "Dedicated doubt-solving and analysis sessions",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1 w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6">Why Choose Us?</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#525CEB] flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <h4 className="text-lg md:text-xl font-bold text-navy">Proven track record of success in JEE Advanced</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#525CEB] flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <h4 className="text-lg md:text-xl font-bold text-navy">Personalized mentorship and guidance.</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#525CEB] flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <h4 className="text-lg md:text-xl font-bold text-navy">Batch size of only 40 students</h4>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/#enquiry-form"
                            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-md mt-4"
                        >
                            Enroll Now <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                    <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600" alt="JEE Advanced" className="w-full rounded-2xl shadow-lg object-cover h-64" />
                        <div className="bg-navy text-white rounded-2xl p-6">
                            <h3 className="font-bold text-yellow-400 mb-3 text-lg">Course Highlights</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><p className="text-gray-300">Duration</p><p className="font-bold">1–2 Years</p></div>
                                <div><p className="text-gray-300">Target</p><p className="font-bold">IITs & Elite Institutes</p></div>
                                <div><p className="text-gray-300">Mock Tests</p><p className="font-bold">Advanced Format</p></div>
                                <div><p className="text-gray-300">Doubt Sessions</p><p className="font-bold">Regular & Intensive</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default JEEAdvanced;
