import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in">
        <Avatar className="h-36 w-36 border-4 border-primary/30">
          <AvatarImage src={profileImg} alt="Ather Sayed" className="object-cover object-top" />
          <AvatarFallback className="text-4xl font-bold bg-secondary text-primary">AS</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <p className="text-primary text-sm font-medium tracking-widest uppercase">Machine Learning Engineer</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Hi, I'm <span className="text-primary">Ather Sayed</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building intelligent systems with deep learning, neural networks, and data-driven solutions. Specialized in Python, TensorFlow, Keras, and modern ML frameworks.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="secondary" className="gap-2" asChild>
            <a href="/Ather_Sayed_Resume.pdf" download>
              <Download className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
        <a href="#about" className="mt-12 animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
