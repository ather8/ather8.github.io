import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Recommender Systems", "Regression & Classification", "Clustering", "Anomaly Detection"],
  },
  {
    title: "Deep Learning",
    skills: ["Neural Networks", "CNNs", "Keras", "TensorFlow", "Backpropagation", "Transfer Learning", "Model Optimization"],
  },
  {
    title: "Programming & Tools",
    skills: ["Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib", "Jupyter Notebooks", "Git"],
  },
  {
    title: "Core Concepts",
    skills: ["Linear Algebra", "Calculus", "Probability & Statistics", "Feature Engineering", "Data Preprocessing", "Model Evaluation", "Hyperparameter Tuning"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" />
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`bg-card border border-border rounded-xl p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
