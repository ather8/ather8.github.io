import { Github, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Project = {
  title: string;
  context: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Hospital Management System",
    context: "Live, production-deployed full-stack hospital platform with JWT/OAuth, RBAC across 5 roles, and embedded LLM/RAG features.",
    situation: "Hospitals need a unified system covering patients, doctors, scheduling, EMR, and billing — plus modern AI assistance for clinical workflows.",
    task: "Design and ship a production-grade, full-stack hospital management platform with role-based access and AI features baked in.",
    action: "Built a FastAPI + PostgreSQL backend with JWT auth, Google OAuth, and RBAC across admin/doctor/nurse/receptionist/patient. Implemented patients, appointments with conflict detection, EMR with audit trail, and line-item billing. Added a multi-turn triage chatbot, report summarization, structured clinical notes, and a RAG clinical search pipeline (FAISS + LLM) with OCR ingestion. Containerized with Docker Compose and deployed (Vercel, Railway, Supabase).",
    result: "Live, end-to-end product running in production with five role-scoped UIs, AI clinical features, and a reproducible Docker-based stack.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "FAISS", "RAG", "LLMs"],
    github: "https://github.com/ather8/AI-Powered-Hospital-System",
    live: "https://ai-powered-hospital-system.vercel.app/",
  },
  {
    title: "PizzaStore — Full-Stack Restaurant Management",
    context: "Production-deployed restaurant management platform with role-based POS, XGBoost demand forecasting, and a Gemini-powered natural language query interface.",
    situation: "Restaurants need a single system for POS, inventory, transactions, and demand planning — with AI assistance for both forecasting and ad-hoc data questions.",
    task: "Build and deploy a full-stack management platform with strict role-based access, atomic checkout, and two distinct AI layers.",
    action: "Built a FastAPI + PostgreSQL + SQLAlchemy backend with JWT/bcrypt auth and per-endpoint RBAC (Admin/Manager/Cashier), atomic bulk checkout, and price/product snapshots for audit. Trained an XGBoost demand forecaster on 48k orders (MAE 1.74) with lag/rolling features and 7-day recursive forecasting, auto-retrained weekly via APScheduler. Added a Gemini-powered NL→SQL query interface backed by template SQL and a read-only PostgreSQL user for defense-in-depth. Built a role-aware React + TypeScript + Tailwind frontend with route guards, JWT auth context, and full mobile responsiveness.",
    result: "Live full-stack app with a role-scoped POS, self-retraining forecasting model, and safe NL query interface — deployed on Vercel + Railway.",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "XGBoost", "Gemini", "React", "TypeScript", "Tailwind", "Docker"],
    github: "https://github.com/ather8/Full-Stack-Pizza-Store",
    live: "https://pizza-store-frontend-ruby.vercel.app/",
  },
  {
    title: "Full-Stack Credit Card Fraud Detection",
    context: "End-to-end fraud detection platform pairing an unsupervised model with a real-time scoring API and analyst dashboard, deployed on Railway.",
    situation: "Needed a deployable fraud detection product — not just a notebook — combining ML, an API, and a user-facing dashboard.",
    task: "Design a full-stack system that scores transactions in real time, persists incidents for auditing, and surfaces them to analysts.",
    action: "Trained an Isolation Forest model and served it through a FastAPI scoring API that persists flagged events to a PostgreSQL Incident Log. Built a React + Vite + Tailwind + shadcn/ui dashboard for live monitoring and triage. Containerized the full stack with Docker Compose and deployed to Railway.",
    result: "Production-style fraud detection app with clean separation between ML, API, and UI layers — live and fully reproducible via Docker.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "TypeScript", "Isolation Forest"],
    github: "https://github.com/ather8/Fraud_Detection_System",
    live: "https://endearing-courage-production-a097.up.railway.app/",
  },
  {
    title: "Game Hub — Game Discovery Web App",
    context: "Responsive, production-deployed web app for discovering games, with dynamic filtering, search, sorting, and platform/genre browsing.",
    situation: "Wanted to ship a polished, type-safe React app that consumes a real third-party API end-to-end.",
    task: "Build a responsive game discovery UI with filtering, search, sorting, and proper loading/error states.",
    action: "Architected reusable, type-safe React components and custom hooks in TypeScript, integrating a third-party REST API with Chakra UI styling and a robust loading/error model. Deployed to Vercel.",
    result: "Production-deployed web app with a clean component architecture and full type safety across the data layer.",
    tags: ["React", "TypeScript", "Vite", "Chakra UI", "REST APIs"],
    github: "https://github.com/ather8/game-hub",
    live: "https://game-hub-six-tau.vercel.app/",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6" aria-labelledby="projects-heading">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-10 rounded-full" aria-hidden="true" />

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
                  Full-Stack
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{p.context}</p>

              <div className="space-y-2">
                <div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">▸ Action</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.action}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">▸ Result</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.result}</p>
                </div>
              </div>

              <Collapsible>
                <CollapsibleTrigger className="group/c text-xs font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Read full STAR
                  <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]/c:rotate-180" aria-hidden="true" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-2">
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">▸ Situation</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.situation}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">▸ Task</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.task}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <ul className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto" aria-label={`Technologies used in ${p.title}`}>
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{t}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.live && (
                  <Button size="sm" className="gap-1.5 min-h-[44px] text-sm" asChild>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo of ${p.title} (opens in new tab)`}>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm" className="gap-1.5 min-h-[44px] text-sm" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} source code on GitHub (opens in new tab)`}>
                    <Github className="h-3.5 w-3.5" aria-hidden="true" /> View Code
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
