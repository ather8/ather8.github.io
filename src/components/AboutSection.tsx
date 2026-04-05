import { Brain, Code, Database, User } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Brain, label: "Deep Learning", desc: "Neural networks, CNNs, reinforcement learning" },
  { icon: Code, label: "ML Engineering", desc: "Python, TensorFlow, Keras, scikit-learn" },
  { icon: Database, label: "Data Science", desc: "Data analysis, feature engineering, model optimization" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" />

        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
          <div className="md:w-16 flex-shrink-0 flex justify-center">
            <div className="h-14 w-14 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center">
              <User className="h-7 w-7 text-primary" />
            </div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm Ather Sayed — a Machine Learning Engineer and Ain Shams University graduate (B.Sc. Electrical Engineering, Computer & Systems). I'm driven by curiosity to understand how machines can learn from data and make intelligent decisions. With specialized training from DeepLearning.AI, Stanford, and IBM, I bring hands-on experience across supervised/unsupervised learning, deep neural networks, and end-to-end ML pipelines. I'm always looking for opportunities to apply AI to real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <h.icon className="h-10 w-10 text-primary mx-auto mb-4" />
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
