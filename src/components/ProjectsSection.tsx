import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { title: "Titanic Disaster Prediction", description: "ML pipeline predicting passenger survival using Random Forest with GridSearchCV. Includes EDA, feature engineering (title extraction, family metrics), achieving ~83.4% CV accuracy.", tags: ["Python", "scikit-learn", "Pandas", "Random Forest"], github: "https://github.com/ather8/Titanic-Disaster-Project" },
  { title: "House Prices Prediction", description: "Linear Regression model predicting house sale prices on the Ames Housing dataset. Features neighborhood-based median imputation, one-hot encoding, and residual analysis.", tags: ["Python", "scikit-learn", "Seaborn", "Linear Regression"], github: "https://github.com/ather8/House-Prices-Project" },
  { title: "Adult Census Income Classification", description: "Comparing RandomForest & XGBoost classifiers with SMOTE for class imbalance. Includes custom feature engineering, GridSearchCV tuning, and 89% ROC AUC on test data.", tags: ["Python", "XGBoost", "SMOTE", "scikit-learn"], github: "https://github.com/ather8/Adult_Census_Income_Classification" },
  { title: "Credit Card Fraud Detection", description: "Anomaly detection on highly imbalanced credit card data using Isolation Forest and Autoencoders. Achieved 90% fraud recall and 92.6% ROC AUC.", tags: ["Python", "TensorFlow", "Isolation Forest", "Autoencoders"], github: "https://github.com/ather8/Anomaly_Detection_in_Credit_Card_Transactions" },
  { title: "Digit Recognizer with CNN", description: "CNN-based handwritten digit classifier on MNIST achieving ~99% test accuracy. Architecture includes Conv2D, MaxPooling, Dropout, and Softmax output layers.", tags: ["Python", "TensorFlow", "Keras", "CNN"], github: "https://github.com/ather8/Digit-Recognizer-with-CNN" },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Github className="h-3.5 w-3.5" /> View Code
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
