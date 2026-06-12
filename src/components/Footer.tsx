import { Linkedin, Github, Mail } from "lucide-react";

const LAST_UPDATED = "June 2026";

const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
        <p>© 2026 Ather Sayed. Built with React, Tailwind & shadcn/ui.</p>
        <span aria-hidden="true" className="hidden sm:inline">·</span>
        <p className="text-xs">Last updated {LAST_UPDATED}</p>
      </div>
      <div className="flex items-center gap-2">
        <a href="mailto:athersayed8@gmail.com" aria-label="Email Ather Sayed" className="hover:text-primary transition-colors inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/ather-sayed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="hover:text-primary transition-colors inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md">
          <Linkedin className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href="https://github.com/ather8" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className="hover:text-primary transition-colors inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md">
          <Github className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
