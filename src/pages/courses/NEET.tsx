import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

const NEET = () => (
    <>
        <HeroSection
            compact
            bgImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600"
            title="NEET UG"
            subtitle="Your dream medical college is closer than you think."
        />

        <section className="py-8 md:py-16 bg-white">
            <div className="container mx-auto px-2 md:px-4 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
                    <div>
                        <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">Medical</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-4 underline decoration-orange decoration-2 underline-offset-4">NEET Preparation Program</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Comprehensive NEET preparation with expert Doctor and IITian faculty. Covers Physics, Chemistry, and Biology
                            from NCERT to advanced level. Our Biology specialists ensure maximum marks in the most scoring subject.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                            <h3 className="font-bold text-navy text-lg mb-4">What's Included</h3>
                            <ul className="space-y-3">
                                {[
                                    "Subject-wise classes: Physics, Chemistry, Biology",
                                    "NCERT-based deep learning",
                                    "Chapter-wise tests + Full mock tests",
                                    "Biology special focus sessions",
                                    "One-on-one doubt clearing",
                                    "Revision crash programs",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-700">
                                        <span className="mt-1 w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 mb-8">
                            <h2 className="text-3xl font-bold text-navy mb-6">Why Choose Us?</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#525CEB] flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <h4 className="text-xl font-bold text-navy">Proven track record of success in NEET</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#525CEB] flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <h4 className="text-xl font-bold text-navy">Personalized mentorship and guidance.</h4>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#525CEB] flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <h4 className="text-xl font-bold text-navy">Batch size of only 40 students</h4>
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
                        <img src="/neet.jpg" alt="NEET" className="w-full rounded-2xl shadow-lg object-cover h-64" />
                        <div className="bg-navy text-white rounded-2xl p-6">
                            <h3 className="font-bold text-yellow-400 mb-3 text-lg">Course Highlights</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><p className="text-gray-300">Duration</p><p className="font-bold">1–2 Years</p></div>
                                <div><p className="text-gray-300">Total Marks</p><p className="font-bold">720 marks</p></div>
                                <div><p className="text-gray-300">Questions</p><p className="font-bold">180 questions</p></div>
                                <div><p className="text-gray-300">Doubt Sessions</p><p className="font-bold">5 hrs/day</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default NEET;
