import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const courseLinks = [
  { to: "/courses/jee-advanced", label: "JEE Advanced" },
  { to: "/courses/jee-mains", label: "JEE Mains" },
  { to: "/courses/neet", label: "NEET" },
  { to: "/courses/mht-cet", label: "MHT CET" },
  { to: "/courses/foundation", label: "Foundation Course For Competitive Exams" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { label: "Courses", hasDropdown: true },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about-exam", label: "About Exam" },
  { to: "/facilities", label: "Our Facilities" },
  { to: "/results", label: "Our Results" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileCoursesOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCoursesActive = location.pathname.startsWith("/courses");

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-card ${scrolled ? "shadow-card" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto w-full px-2 lg:px-4 flex items-center justify-between py-1 md:py-1.5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo1.svg" alt="IIT Medico Guide" className="h-12 lg:h-14" />
          <span className="font-bold text-lg lg:text-xl text-navy">
            iit<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">medico</span><span className="text-navy">guide</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 ml-4 pr-16 lg:pr-32">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isCoursesActive
                    ? "text-orange border-b-2 border-orange"
                    : "text-foreground hover:text-orange"
                    }`}
                >
                  Courses
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in-up">
                    {courseLinks.map((cl) => (
                      <Link
                        key={cl.to}
                        to={cl.to}
                        className={`block px-5 py-3 text-sm font-semibold transition-colors hover:bg-orange/5 hover:text-orange ${location.pathname === cl.to ? "text-orange bg-orange/5" : "text-foreground"
                          }`}
                      >
                        {cl.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${location.pathname === link.to
                  ? "text-orange border-b-2 border-orange"
                  : "text-foreground hover:text-orange"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-card px-4 pb-4 animate-fade-in-up">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className={`flex w-full items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold ${isCoursesActive ? "text-orange bg-orange-light" : "text-foreground hover:bg-muted"
                    }`}
                >
                  Courses
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCoursesOpen && (
                  <div className="ml-4 border-l-2 border-orange/30 pl-3 space-y-1">
                    {courseLinks.map((cl) => (
                      <Link
                        key={cl.to}
                        to={cl.to}
                        className="block py-2 px-2 text-sm font-semibold text-foreground hover:text-orange transition-colors"
                      >
                        {cl.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`block py-3 px-3 rounded-lg text-sm font-semibold ${location.pathname === link.to
                  ? "text-orange bg-orange-light"
                  : "text-foreground hover:bg-muted"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
