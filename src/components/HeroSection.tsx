import { ArrowDown, Download, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6" aria-label="Introduction">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8 animate-fade-in">
        <div className="relative">
          <Avatar className="h-28 w-28 sm:h-36 sm:w-36 border-4 border-primary/30 ring-4 ring-primary/10">
            <AvatarImage src={profileImg} alt="Ather Sayed – Software Engineer" className="object-cover object-top" />
            <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-secondary text-primary">AS</AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-primary/15 border border-primary/30 text-primary text-xs font-semibold rounded-full whitespace-nowrap backdrop-blur-sm">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Open to Opportunities
          </span>
        </div>
        <div className="space-y-4 mt-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Software Engineer</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Hi, I'm <span className="text-primary">Ather Sayed</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build full-stack AI products end-to-end — from a <strong className="text-foreground font-semibold">live, production-deployed AI-powered hospital management platform</strong> (FastAPI, React, PostgreSQL, RAG/LLMs) to a <strong className="text-foreground font-semibold">real-time fraud detection system</strong> and <strong className="text-foreground font-semibold">medical imaging CNNs reaching 0.99 AUC</strong>. Python · TypeScript · React · FastAPI · Docker.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> Cairo, Egypt
          </span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for hire
          </span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>13 certifications · 7 shipped projects</span>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="min-h-[48px] w-full sm:w-auto text-base">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="ghost" size="lg" className="gap-2 min-h-[48px] w-full sm:w-auto text-base" asChild>
            <a href="/Ather_Sayed_Resume.pdf" target="_blank" rel="noopener noreferrer" download aria-label="Download CV (opens PDF in new tab)">
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild className="min-h-[48px] w-full sm:w-auto text-base">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <a href="#about" className="mt-8 sm:mt-12 animate-bounce text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
