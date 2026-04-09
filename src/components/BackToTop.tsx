import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const start = window.scrollY;
    const duration = 800;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - easeInOutCubic(progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg min-h-[44px] min-w-[44px] bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </Button>
  );
};

export default BackToTop;
