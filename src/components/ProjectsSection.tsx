import { useState } from "react";
import { Github, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Category = "Full-Stack" | "Deep Learning" | "Classical ML";

type Project = {
  title: string;
  category: Category;
  context: string;
  action: string;
  result: string;
  situation: string;
  task: string;
  tags: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Hospital Management System",
    category: "Full-Stack",
    context: "Live, production-deployed full-stack hospital platform with JWT/OAuth, RBAC across 5 roles, and embedded LLM/RAG features.",
    situation: "Hospitals need a unified system covering patients, doctors, scheduling, EMR, and billing — plus modern AI assistance for clinical workflows.",
    task: "Design and ship a production-grade, full-stack hospital management platform with role-based access and AI features baked in.",
    action: "Built a FastAPI + PostgreSQL backend with JWT auth, Google OAuth, and RBAC across admin/doctor/nurse/receptionist/patient. Implemented patients, appointments with conflict detection, EMR with audit trail, and line-item billing. Added a multi-turn triage chatbot, report summarization, structured clinical notes, and a RAG clinical search pipeline (FAISS + LLM) with OCR ingestion. Containerized with Docker Compose and deployed (Vercel, Railway, Supabase).",
    result: "Live, end-to-end product running in production with five role-scoped UIs, AI clinical features, and a reproducible Docker-based stack.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "FAISS", "RAG", "LLMs"],
    github: "https://github.com/ather8/AI-Powered-Hospital-System",
    live: "https://ai-powered-hospital-system.vercel.app",
  },
  {
    title: "Full-Stack Credit Card Fraud Detection",
    category: "Full-Stack",
    context: "End-to-end fraud detection platform pairing an unsupervised model with a real-time scoring API and analyst dashboard.",
    situation: "Needed a deployable fraud detection product — not just a notebook — combining ML, an API, and a user-facing dashboard.",
    task: "Design a full-stack system that scores transactions in real time, persists incidents for auditing, and surfaces them to analysts.",
    action: "Trained an Isolation Forest model and served it through a FastAPI scoring API that persists flagged events to a PostgreSQL Incident Log. Built a React + Vite + Tailwind + shadcn/ui dashboard for live monitoring and triage. Containerized the full stack with Docker Compose.",
    result: "Production-style fraud detection app with clean separation between ML, API, and UI layers — fully reproducible via Docker.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "TypeScript", "Isolation Forest"],
    github: "https://github.com/ather8/Fraud_Detection_System",
  },
  {
    title: "Game Hub — Game Discovery Web App",
    category: "Full-Stack",
    context: "Responsive, production-deployed web app for discovering games, with dynamic filtering, search, sorting, and platform/genre browsing.",
    situation: "Wanted to ship a polished, type-safe React app that consumes a real third-party API end-to-end.",
    task: "Build a responsive game discovery UI with filtering, search, sorting, and proper loading/error states.",
    action: "Architected reusable, type-safe React components and custom hooks in TypeScript, integrating a third-party REST API with Chakra UI styling and a robust loading/error model. Deployed to Vercel.",
    result: "Production-deployed web app with a clean component architecture and full type safety across the data layer.",
    tags: ["React", "TypeScript", "Vite", "Chakra UI", "REST APIs"],
    github: "https://github.com/ather8/game-hub",
  },
  {
    title: "Credit Card Fraud Detection",
    category: "Deep Learning",
    context: "Highly imbalanced dataset where fraud accounts for less than 0.2% of transactions.",
    situation: "Tasked with detecting fraud in a dataset where fraudulent transactions account for less than 0.2% of records.",
    task: "Build a model that maximizes fraud recall while minimizing false negatives on highly imbalanced data.",
    action: "Combined Isolation Forest for unsupervised anomaly detection with TensorFlow Autoencoders for learned representations. Applied SMOTE for resampling and tuned thresholds.",
    result: "Achieved 90% fraud recall and 92.6% ROC AUC — significantly outperforming baseline logistic regression.",
    tags: ["Python", "TensorFlow", "Isolation Forest", "Autoencoders"],
    github: "https://github.com/ather8/Anomaly_Detection_in_Credit_Card_Transactions",
  },
  {
    title: "Adult Census Income Classification",
    category: "Classical ML",
    context: "Census income prediction with class imbalance — compare ensemble methods rigorously.",
    situation: "Census data with significant class imbalance needed to predict income brackets accurately.",
    task: "Compare ensemble methods and find the optimal classifier with robust evaluation metrics.",
    action: "Compared RandomForest vs. XGBoost with SMOTE resampling. Custom feature engineering and GridSearchCV for hyperparameter tuning.",
    result: "89% ROC AUC on test data, with XGBoost outperforming after tuning.",
    tags: ["Python", "XGBoost", "SMOTE", "scikit-learn"],
    github: "https://github.com/ather8/Adult_Census_Income_Classification",
  },
  {
    title: "Titanic Disaster Prediction",
    category: "Classical ML",
    context: "Messy historical Titanic data with missing values and mixed feature types.",
    situation: "Limited, messy historical data on Titanic passengers with missing values and mixed feature types.",
    task: "Build an interpretable prediction pipeline with strong cross-validation performance.",
    action: "Built a Random Forest pipeline with feature engineering (title extraction, family size metrics) and GridSearchCV optimization.",
    result: "~83.4% cross-validation accuracy with interpretable feature importance rankings.",
    tags: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    github: "https://github.com/ather8/Titanic-Disaster-Project",
  },
  {
    title: "House Prices Prediction",
    category: "Classical ML",
    context: "Ames Housing dataset with 80+ features, heavy missing data, and multicollinearity.",
    situation: "Ames Housing dataset with 80+ features, significant missing data, and multicollinearity challenges.",
    task: "Predict sale prices accurately and identify key drivers of home value.",
    action: "Linear Regression with neighborhood-based median imputation, one-hot encoding, and residual analysis for model diagnostics.",
    result: "Strong predictive performance with clear residual patterns guiding further improvements.",
    tags: ["Python", "scikit-learn", "Seaborn", "Linear Regression"],
    github: "https://github.com/ather8/House-Prices-Project",
  },
  {
    title: "Breast Cancer Detection",
    category: "Deep Learning",
    context: "Histopathology image patches needing automated IDC detection with minimal false negatives.",
    situation: "Histopathology image patches needed automated analysis to detect Invasive Ductal Carcinoma (IDC) with minimal false negatives.",
    task: "Build a deep learning pipeline that achieves high recall for medical screening, critical for minimizing missed diagnoses.",
    action: "Leveraged InceptionResNetV2 with two-stage transfer learning — frozen feature extraction then fine-tuning from layer 600+. Applied data augmentation and exported to ONNX for deployment.",
    result: "Achieved ~94% accuracy, 0.96–0.99 AUC, and up to 98% IDC recall after fine-tuning.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "ONNX"],
    github: "https://github.com/ather8/Breast_Cancer_Detection",
  },
];

const filters: ("All" | Category)[] = ["All", "Deep Learning", "Classical ML", "Full-Stack"];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6" aria-labelledby="projects-heading">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-8 rounded-full" aria-hidden="true" />

        <div aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 min-h-[44px] text-sm font-medium rounded-full border transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border border-primary/30 text-primary bg-primary/5">
                  {p.category}
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
              <div className="flex gap-2">
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
