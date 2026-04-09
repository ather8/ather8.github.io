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

  if (!visible) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg min-h-[44px] min-w-[44px] bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </Button>
  );
};

export default BackToTop;
