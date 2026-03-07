import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-orange text-accent-foreground shadow-lg hover:bg-orange-hover transition-all animate-fade-in-up"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
