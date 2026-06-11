import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border" role="contentinfo">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Ather Sayed. Built with React, Tailwind & shadcn/ui.</p>
      <div className="flex items-center gap-4">
        <a href="mailto:athersayed8@gmail.com" aria-label="Email" className="hover:text-primary transition-colors p-2">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/ather-sayed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="hover:text-primary transition-colors p-2">
          <Linkedin className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href="https://github.com/ather8" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className="hover:text-primary transition-colors p-2">
          <Github className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
