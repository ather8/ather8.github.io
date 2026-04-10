import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    problem: "Detecting fraudulent transactions in a highly imbalanced dataset where fraud accounts for <0.2% of records.",
    process: "Combined Isolation Forest for unsupervised anomaly detection with TensorFlow Autoencoders for learned representations. Applied SMOTE for resampling.",
    result: "Achieved 90% fraud recall and 92.6% ROC AUC, significantly reducing false negatives.",
    tags: ["Python", "TensorFlow", "Isolation Forest", "Autoencoders"],
    github: "https://github.com/ather8/Anomaly_Detection_in_Credit_Card_Transactions",
  },
  {
    title: "Digit Recognizer with CNN",
    problem: "Building a robust handwritten digit classifier for the MNIST benchmark.",
    process: "Designed a CNN with Conv2D, MaxPooling, and Dropout layers. Used data augmentation and learning rate scheduling for generalization.",
    result: "~99% test accuracy on MNIST, demonstrating strong generalization with minimal overfitting.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    github: "https://github.com/ather8/Digit-Recognizer-with-CNN",
  },
  {
    title: "Adult Census Income Classification",
    problem: "Predicting income brackets from census data with significant class imbalance.",
    process: "Compared RandomForest vs. XGBoost with SMOTE resampling. Custom feature engineering and GridSearchCV for hyperparameter tuning.",
    result: "89% ROC AUC on test data, with XGBoost outperforming after tuning.",
    tags: ["Python", "XGBoost", "SMOTE", "scikit-learn"],
    github: "https://github.com/ather8/Adult_Census_Income_Classification",
  },
  {
    title: "Titanic Disaster Prediction",
    problem: "Predicting passenger survival from limited, messy historical data.",
    process: "Built a Random Forest pipeline with feature engineering (title extraction, family size metrics) and GridSearchCV optimization.",
    result: "~83.4% cross-validation accuracy with interpretable feature importance.",
    tags: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    github: "https://github.com/ather8/Titanic-Disaster-Project",
  },
  {
    title: "House Prices Prediction",
    problem: "Predicting sale prices on the Ames Housing dataset with 80+ features and missing data.",
    process: "Linear Regression with neighborhood-based median imputation, one-hot encoding, and residual analysis for model diagnostics.",
    result: "Strong predictive performance with clear residual patterns guiding further improvements.",
    tags: ["Python", "scikit-learn", "Seaborn", "Linear Regression"],
    github: "https://github.com/ather8/House-Prices-Project",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6" aria-labelledby="projects-heading">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="projects-heading" className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" aria-hidden="true" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
              
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{p.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">Approach</p>
                  <p className="text-sm text-muted-foreground">{p.process}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-1">Result</p>
                  <p className="text-sm text-muted-foreground font-medium">{p.result}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${p.title}`}>
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{t}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" className="gap-1.5 min-h-[44px]" asChild>
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
