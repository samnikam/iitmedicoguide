import { Link } from "react-router-dom";

const AnnouncementBar = () => (
  <div className="bg-navy py-2 md:py-2.5 px-2 md:px-4 overflow-hidden border-b border-white/5 relative h-10 md:h-10 flex items-center z-50">
    <div className="flex whitespace-nowrap animate-marquee absolute">
      <div className="flex items-center gap-2 md:gap-4 px-2 md:px-4 text-xs md:text-sm font-bold text-white">
        <span>Admissions Open for 2026–27 Session | Call:</span>
        <a href="tel:7030300666" className="text-orange hover:underline">7030300666</a>
      </div>
    </div>
  </div>
);

export default AnnouncementBar;
