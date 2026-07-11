import { Code2, Server, Brain } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Code2, label: "Full-Stack Engineering", desc: "React, TypeScript, Vite, Tailwind, shadcn/ui — type-safe, responsive UIs" },
  { icon: Server, label: "Backend & MLOps", desc: "Python, FastAPI, PostgreSQL, Docker Compose, CI/CD — shipped to production" },
  { icon: Brain, label: "Applied AI", desc: "LLMs, RAG (FAISS), CNNs, transfer learning — embedded into real products" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6" aria-labelledby="about-heading">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 id="about-heading" className="text-3xl font-bold text-center mb-4">About Me</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" aria-hidden="true" />

        <div className="mb-12">
          <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              I'm a Software Engineer who enjoys shipping the whole product — backend, frontend, and the AI layer in between. My path started with Electrical Engineering (Computer & Systems) at Ain Shams University, where I built strong foundations in <span className="text-foreground font-medium">data structures, algorithms, OOP, and software design</span>.
            </p>
            <p>
              Since then I've gone deep on full-stack and applied AI: a <span className="text-foreground font-medium">live, production-deployed AI-powered hospital management platform</span> with FastAPI, React, PostgreSQL, JWT/OAuth auth, and RAG-based clinical search; a <span className="text-foreground font-medium">restaurant management system</span> with role-based POS, an XGBoost demand forecaster (auto-retrained weekly) and a Gemini-powered natural-language query interface; and a real-time fraud detection dashboard pairing an Isolation Forest model with a FastAPI scoring API and a React/Tailwind UI.
            </p>
            <p>
              I hold 13 AI/ML certifications from Stanford, DeepLearning.AI, and IBM — but what I care about most is turning that knowledge into <span className="text-foreground font-medium">clean code, sound architecture, and software people actually use</span>.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" aria-label="Headline project metrics">
          {[
            { v: "4", l: "Live production apps" },
            { v: "5", l: "Roles in hospital RBAC" },
            { v: "48k", l: "Orders used to train forecaster" },
            { v: "13", l: "AI / ML certifications" },
          ].map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-xl p-4 text-center">
              <dt className="sr-only">{s.l}</dt>
              <dd className="text-2xl sm:text-3xl font-bold text-primary leading-none">{s.v}</dd>
              <p className="text-xs text-muted-foreground mt-2 leading-snug">{s.l}</p>
            </div>
          ))}
        </dl>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <h.icon className="h-10 w-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-semibold text-foreground mb-2">{h.label}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
