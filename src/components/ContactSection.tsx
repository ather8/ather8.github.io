import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactLinks = [
  { icon: Mail, label: "athersayed8@gmail.com", href: "mailto:athersayed8@gmail.com", external: false },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ather-sayed", external: true },
  { icon: Github, label: "GitHub", href: "https://github.com/ather8", external: true },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-card/50" aria-labelledby="contact-heading">
      <div ref={ref} className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="contact-heading" className="text-3xl font-bold mb-4">Get In Touch</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-8 rounded-full" aria-hidden="true" />
        <p className="text-muted-foreground text-base sm:text-lg mb-12">
          I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-3 px-5 sm:px-6 py-4 min-h-[48px] bg-card border border-border rounded-xl hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors group"
              aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
            >
              <link.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-foreground font-medium">{link.label}</span>
              {link.external && <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
