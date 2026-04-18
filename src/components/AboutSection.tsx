import { Brain, Code, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Brain, label: "Deep Learning", desc: "CNNs, transfer learning, PyTorch & Keras neural networks" },
  { icon: Code, label: "ML Engineering", desc: "Python, TensorFlow, FastAPI, Docker, end-to-end deployment" },
  { icon: Database, label: "Data Science", desc: "Imbalanced data, feature engineering, model optimization" },
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
              It started with a simple question: <span className="text-foreground font-medium italic">"Can a machine actually learn to think?"</span> That curiosity led me from studying Electrical Engineering at Ain Shams University to diving headfirst into the world of machine learning — and I haven't looked back since.
            </p>
            <p>
              Through specialized training with DeepLearning.AI, Stanford, IBM, and KodeKloud, I went from understanding the math behind neural networks to shipping real systems — a full-stack fraud detection app containerized with Docker, deep learning models for medical imaging, and PyTorch-based neural networks that turn messy datasets into actionable insights.
            </p>
            <p>
              What drives me isn't just the technology — it's the moment when a model clicks, when data reveals a pattern no one expected, and when AI solves a problem that genuinely matters. I'm always looking for the next challenge where I can make that happen.
            </p>
          </div>
        </div>

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
