import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";
import { z } from "zod";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Mail, label: "athersayed8@gmail.com", href: "mailto:athersayed8@gmail.com", external: false },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ather-sayed", external: true },
  { icon: Github, label: "GitHub", href: "https://github.com/ather8", external: true },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => { if (i.path[0]) fieldErrors[i.path[0] as string] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio contact from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:athersayed8@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Your message is ready to send." });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/50" aria-labelledby="contact-heading">
      <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="contact-heading" className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-8 rounded-full" aria-hidden="true" />
        <p className="text-muted-foreground text-lg mb-10 text-center">
          I'm currently open to new opportunities. Send a message below or reach out on any of these channels.
        </p>

        <form onSubmit={onSubmit} noValidate className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-5 mb-8">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} maxLength={100} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
              {errors.name && <p id="name-err" className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} maxLength={255} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
              {errors.email && <p id="email-err" className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} value={form.message} maxLength={1000} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
            {errors.message && <p id="message-err" className="text-xs text-destructive">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto min-h-[48px] gap-2">
            <Send className="h-4 w-4" aria-hidden="true" /> Send Message
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-3 px-6 py-4 min-h-[48px] bg-card border border-border rounded-xl hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors group"
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
