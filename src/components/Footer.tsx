import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo1.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-heading text-lg font-bold">
              IIT MEDICO <span className="text-orange">GUIDE</span>
            </span>
          </div>
          <p className="text-sm opacity-80 mb-5 leading-relaxed">
            One of India's Most Opted Platforms for JEE & NEET Preparation
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-foreground/10 hover:bg-orange transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "JEE Advanced", to: "/courses/jee-advanced" },
              { label: "JEE Mains", to: "/courses/jee-mains" },
              { label: "NEET UG", to: "/courses/neet" },
              { label: "MHT-CET", to: "/courses/mht-cet" },
              { label: "Foundation Course", to: "/courses/foundation" },
            ].map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="hover:text-orange transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { to: "/", label: "Home" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/about-exam", label: "About Exam" },
              { to: "/facilities", label: "Our Facilities" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-orange transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm opacity-80">
            <p>
              📞 <a href="tel:7030300666" className="hover:text-orange">7030300666</a>
            </p>
            <p>📧 <a href="mailto:contact@iitmedicoguide.in" className="hover:text-orange">contact@iitmedicoguide.in</a></p>
            <p>📍 Ashoka Universal School, Ashoka Road, Nashik — 422011</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-navy-foreground/10">
      <div className="container mx-auto px-4 py-4 text-center text-xs opacity-60">
        © 2025 IIT Medico Guide. All Rights Reserved. | Privacy Policy | Terms of Use
      </div>
    </div>
  </footer>
);

export default Footer;
