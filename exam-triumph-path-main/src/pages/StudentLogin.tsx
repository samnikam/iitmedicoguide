import { useState } from "react";
import { Link } from "react-router-dom";
import { Atom, Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality coming soon! Please contact us for access.");
  };

  return (
    <div className="min-h-screen flex bg-gray-50/50">
      {/* Left panel - Modern Glassmorphism */}
      <div
        className="hidden lg:flex lg:w-3/5 relative items-center justify-center p-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200)`,
        }}
      >
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/90 via-navy/60 to-transparent" />

        {/* Animated background blobs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#525CEB]/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-12">
            <span className="inline-block bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-md">
              A-List Academy
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
              Unlock Your <span className="text-orange">True</span> Potential.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">Join 14,000+ students navigating their path to India's top medical and engineering colleges.</p>
          </div>

          <div className="grid grid-cols-3 gap-8 p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl">
            {[
              { value: "14k+", label: "Achievers" },
              { value: "95%", label: "Success Rate" },
              { value: "20+", label: "IIT Masters" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-orange mb-1">{s.value}</div>
                <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - Floating Card */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl -mr-32 -mt-32" />

        <div className="w-full max-w-[480px] relative">
          <div className="bg-white rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] p-8 md:p-14 border border-gray-100">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center gap-3 mb-10 group">
              <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center shadow-lg group-hover:bg-orange transition-colors">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <span className="font-black text-xl text-navy tracking-tight">
                IIT MEDICO <span className="text-orange">GUIDE</span>
              </span>
            </Link>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-navy mb-3">Portal Login</h2>
              <p className="text-gray-400 font-medium">Welcome back! Please enter your details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Email or Student ID</label>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange transition-colors" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full rounded-[24px] border-2 border-gray-100 bg-gray-50/50 pl-16 pr-6 py-5 text-sm font-bold text-navy focus:outline-none focus:ring-4 focus:ring-orange/10 focus:border-orange transition-all placeholder:text-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Secure Password</label>
                <div className="relative group">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-[24px] border-2 border-gray-100 bg-gray-50/50 pl-16 pr-16 py-5 text-sm font-bold text-navy focus:outline-none focus:ring-4 focus:ring-orange/10 focus:border-orange transition-all placeholder:text-gray-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <label className="flex items-center gap-3 text-xs font-bold text-gray-500 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-5 h-5 rounded-lg border-2 border-gray-200 checked:bg-orange checked:border-orange transition-all cursor-pointer"
                  />
                  Remember Me
                </label>
                <a href="#" className="text-xs font-bold text-orange hover:text-navy transition-colors">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-[24px] bg-navy py-5 text-white font-black text-lg hover:bg-orange transition-all duration-300 shadow-xl shadow-navy/20 hover:-translate-y-1 active:scale-[0.98]"
              >
                Sign In to Dashboard
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm font-medium mb-6">Don't have an account yet?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-navy hover:text-orange font-black transition-colors"
              >
                Register as a New Student <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col items-center gap-4">
              <p className="text-xs text-gray-400 font-medium">Need immediate assistance?</p>
              <div className="flex gap-6">
                <a href="tel:7030300666" className="text-sm font-black text-navy hover:text-orange transition-colors">7030300666</a>
                <a href="mailto:contact@iitmedicoguide.in" className="text-sm font-black text-navy hover:text-orange transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
