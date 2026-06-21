import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Server, Brain, Sparkles, Wrench, BookOpen } from "lucide-react";

type Level = "Core" | "Proficient" | "Familiar";

const skillCategories: { icon: typeof Code2; title: string; skills: { name: string; level: Level }[] }[] = [
  {
    icon: Code2,
    title: "Languages & Web",
    skills: [
      { name: "Python", level: "Core" },
      { name: "TypeScript", level: "Core" },
      { name: "JavaScript", level: "Core" },
      { name: "SQL", level: "Core" },
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "React", level: "Core" },
      { name: "Vite", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "shadcn/ui", level: "Proficient" },
      { name: "Chakra UI", level: "Proficient" },
      { name: "REST APIs", level: "Core" },
      { name: "Node.js", level: "Familiar" },
    ],
  },
  {
    icon: Server,
    title: "Backend & MLOps",
    skills: [
      { name: "FastAPI", level: "Core" },
      { name: "PostgreSQL", level: "Core" },
      { name: "Docker", level: "Core" },
      { name: "Docker Compose", level: "Core" },
      { name: "Git & GitHub", level: "Core" },
      { name: "Linux", level: "Proficient" },
      { name: "CI/CD", level: "Proficient" },
      { name: "Model Deployment", level: "Proficient" },
      { name: "Redis", level: "Familiar" },
    ],
  },
  {
    icon: Wrench,
    title: "Software Engineering",
    skills: [
      { name: "Object-Oriented Programming", level: "Core" },
      { name: "Data Structures & Algorithms", level: "Core" },
      { name: "Software Design", level: "Core" },
      { name: "Code Review", level: "Proficient" },
      { name: "Testing", level: "Proficient" },
      { name: "Agile / Scrum", level: "Proficient" },
    ],
  },
  {
    icon: Sparkles,
    title: "Generative AI & NLP",
    skills: [
      { name: "LLMs", level: "Core" },
      { name: "RAG (FAISS)", level: "Core" },
      { name: "Transformers", level: "Proficient" },
      { name: "Foundational Models", level: "Proficient" },
      { name: "NLP", level: "Proficient" },
      { name: "Hugging Face", level: "Proficient" },
      { name: "Generative AI", level: "Proficient" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & Deep Learning",
    skills: [
      { name: "Supervised Learning", level: "Core" },
      { name: "Unsupervised Learning", level: "Proficient" },
      { name: "Deep Learning", level: "Core" },
      { name: "CNNs", level: "Core" },
      { name: "Transfer Learning", level: "Core" },
      { name: "TensorFlow", level: "Core" },
      { name: "Keras", level: "Core" },
      { name: "PyTorch", level: "Proficient" },
      { name: "scikit-learn", level: "Core" },
      { name: "XGBoost", level: "Proficient" },
      { name: "Anomaly Detection", level: "Core" },
      { name: "Model Evaluation", level: "Core" },
      { name: "Hyperparameter Tuning", level: "Proficient" },
      { name: "Reinforcement Learning", level: "Familiar" },
    ],
  },
  {
    icon: BookOpen,
    title: "Foundations & Computer Vision",
    skills: [
      { name: "Linear Algebra", level: "Core" },
      { name: "Calculus", level: "Proficient" },
      { name: "Probability & Statistics", level: "Core" },
      { name: "Feature Engineering", level: "Core" },
      { name: "Data Preprocessing", level: "Core" },
      { name: "OpenCV", level: "Proficient" },
      { name: "Medical Imaging", level: "Proficient" },
      { name: "Data Augmentation", level: "Proficient" },
      { name: "ONNX Inference", level: "Familiar" },
    ],
  },
];

const levelStyles: Record<Level, string> = {
  Core: "bg-primary/15 text-primary border-primary/40",
  Proficient: "bg-secondary text-secondary-foreground border-border",
  Familiar: "bg-transparent text-muted-foreground border-border/70",
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-card/50" aria-labelledby="skills-heading">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="skills-heading" className="text-3xl font-bold text-center mb-4">Skills</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-6 rounded-full" aria-hidden="true" />
        <div className="flex flex-wrap justify-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground mb-10" aria-label="Proficiency legend">
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Core</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-secondary border border-border" /> Proficient</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full border border-border" /> Familiar</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-primary">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`${cat.title} skills`}>
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-colors cursor-default ${levelStyles[skill.level]}`}
                    title={`${skill.level} proficiency`}
                  >
                    {skill.name}
                    <span className="sr-only"> ({skill.level} proficiency)</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
