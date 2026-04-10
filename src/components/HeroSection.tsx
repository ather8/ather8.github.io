import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6" aria-label="Introduction">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in">
        <div className="relative">
          <Avatar className="h-36 w-36 border-4 border-primary/30 ring-4 ring-primary/10">
            <AvatarImage src={profileImg} alt="Ather Sayed – Machine Learning Engineer" className="object-cover object-top" />
            <AvatarFallback className="text-4xl font-bold bg-secondary text-primary">AS</AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-primary/15 border border-primary/30 text-primary text-xs font-medium rounded-full whitespace-nowrap backdrop-blur-sm">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Open to Opportunities
          </span>
        </div>
        <div className="space-y-4 mt-4">
          <p className="text-primary text-sm font-medium tracking-widest uppercase">Machine Learning Engineer</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Hi, I'm <span className="text-primary">Ather Sayed</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build intelligent systems that turn raw data into real-world impact — from fraud detection models with 92% AUC to CNNs achieving 99% accuracy. Specialized in Python, TensorFlow, and end-to-end ML pipelines.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="min-h-[48px]">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="min-h-[48px]">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="secondary" size="lg" className="gap-2 min-h-[48px]" asChild>
            <a href="/Ather_Sayed_Resume.pdf" target="_blank" rel="noopener noreferrer" download aria-label="Download CV (opens PDF in new tab)">
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
          </Button>
        </div>
        <a href="#about" className="mt-12 animate-bounce text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
