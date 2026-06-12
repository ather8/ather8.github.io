import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Code, Wrench, BookOpen } from "lucide-react";

type Level = "Core" | "Proficient" | "Familiar";

const skillCategories: { icon: typeof Brain; title: string; skills: { name: string; level: Level }[] }[] = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      { name: "Supervised Learning", level: "Core" },
      { name: "Regression & Classification", level: "Core" },
      { name: "Anomaly Detection", level: "Core" },
      { name: "Unsupervised Learning", level: "Proficient" },
      { name: "Clustering", level: "Proficient" },
      { name: "Recommender Systems", level: "Familiar" },
      { name: "Reinforcement Learning", level: "Familiar" },
    ],
  },
  {
    icon: Code,
    title: "Deep Learning",
    skills: [
      { name: "Neural Networks", level: "Core" },
      { name: "CNNs", level: "Core" },
      { name: "TensorFlow", level: "Core" },
      { name: "Keras", level: "Core" },
      { name: "Transfer Learning", level: "Core" },
      { name: "PyTorch", level: "Proficient" },
      { name: "Backpropagation", level: "Proficient" },
      { name: "Model Optimization", level: "Proficient" },
    ],
  },
  {
    icon: Wrench,
    title: "Programming & Tools",
    skills: [
      { name: "Python", level: "Core" },
      { name: "NumPy", level: "Core" },
      { name: "Pandas", level: "Core" },
      { name: "scikit-learn", level: "Core" },
      { name: "Matplotlib", level: "Proficient" },
      { name: "Jupyter Notebooks", level: "Core" },
      { name: "Git", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
      { name: "OpenCV", level: "Familiar" },
      { name: "ONNX", level: "Familiar" },
    ],
  },
  {
    icon: BookOpen,
    title: "Core Concepts",
    skills: [
      { name: "Linear Algebra", level: "Core" },
      { name: "Probability & Statistics", level: "Core" },
      { name: "Feature Engineering", level: "Core" },
      { name: "Data Preprocessing", level: "Core" },
      { name: "Model Evaluation", level: "Core" },
      { name: "Hyperparameter Tuning", level: "Proficient" },
      { name: "Calculus", level: "Proficient" },
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
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" aria-hidden="true" />
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
                  <li key={skill} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                    {skill}
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
