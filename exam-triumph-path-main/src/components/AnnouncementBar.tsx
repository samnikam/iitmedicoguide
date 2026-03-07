import { Link } from "react-router-dom";

const AnnouncementBar = () => (
  <div className="bg-navy py-2 md:py-2.5 px-4 overflow-hidden border-b border-white/5 relative h-9 md:h-10 flex items-center">
    <div className="flex whitespace-nowrap animate-marquee absolute">
      <div className="flex items-center gap-4 px-4 text-[11px] md:text-sm font-bold text-navy-foreground">
        <span>Admissions Open for 2026–27 Session | Call:</span>
        <a href="tel:7030300666" className="text-orange hover:underline">7030300666</a>
      </div>
    </div>
  </div>
);

export default AnnouncementBar;
