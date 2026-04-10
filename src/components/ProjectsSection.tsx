import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    situation: "Tasked with detecting fraud in a dataset where fraudulent transactions account for less than 0.2% of records.",
    task: "Build a model that maximizes fraud recall while minimizing false negatives on highly imbalanced data.",
    action: "Combined Isolation Forest for unsupervised anomaly detection with TensorFlow Autoencoders for learned representations. Applied SMOTE for resampling and tuned thresholds.",
    result: "Achieved 90% fraud recall and 92.6% ROC AUC — significantly outperforming baseline logistic regression.",
    tags: ["Python", "TensorFlow", "Isolation Forest", "Autoencoders"],
    github: "https://github.com/ather8/Anomaly_Detection_in_Credit_Card_Transactions",
  },
  {
    title: "Digit Recognizer with CNN",
    situation: "Needed a robust handwritten digit classifier for the MNIST benchmark dataset.",
    task: "Design a CNN architecture that generalizes well beyond training data while achieving near-perfect accuracy.",
    action: "Built a CNN with Conv2D, MaxPooling, and Dropout layers. Applied data augmentation and learning rate scheduling to prevent overfitting.",
    result: "~99% test accuracy on MNIST with strong generalization and minimal overfitting.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    github: "https://github.com/ather8/Digit-Recognizer-with-CNN",
  },
  {
    title: "Adult Census Income Classification",
    situation: "Census data with significant class imbalance needed to predict income brackets accurately.",
    task: "Compare ensemble methods and find the optimal classifier with robust evaluation metrics.",
    action: "Compared RandomForest vs. XGBoost with SMOTE resampling. Custom feature engineering and GridSearchCV for hyperparameter tuning.",
    result: "89% ROC AUC on test data, with XGBoost outperforming after tuning.",
    tags: ["Python", "XGBoost", "SMOTE", "scikit-learn"],
    github: "https://github.com/ather8/Adult_Census_Income_Classification",
  },
  {
    title: "Titanic Disaster Prediction",
    situation: "Limited, messy historical data on Titanic passengers with missing values and mixed feature types.",
    task: "Build an interpretable prediction pipeline with strong cross-validation performance.",
    action: "Built a Random Forest pipeline with feature engineering (title extraction, family size metrics) and GridSearchCV optimization.",
    result: "~83.4% cross-validation accuracy with interpretable feature importance rankings.",
    tags: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    github: "https://github.com/ather8/Titanic-Disaster-Project",
  },
  {
    title: "House Prices Prediction",
    situation: "Ames Housing dataset with 80+ features, significant missing data, and multicollinearity challenges.",
    task: "Predict sale prices accurately and identify key drivers of home value.",
    action: "Linear Regression with neighborhood-based median imputation, one-hot encoding, and residual analysis for model diagnostics.",
    result: "Strong predictive performance with clear residual patterns guiding further improvements.",
    tags: ["Python", "scikit-learn", "Seaborn", "Linear Regression"],
    github: "https://github.com/ather8/House-Prices-Project",
  },
];

const starLabels = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
  { key: "result", label: "Result" },
] as const;

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6" aria-labelledby="projects-heading">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-10 sm:mb-12 rounded-full" aria-hidden="true" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group bg-card border border-border rounded-xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>

              <div className="space-y-2.5 flex-1">
                {starLabels.map(({ key, label }) => (
                  <div key={key}>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p[key]}</p>
                  </div>
                ))}
              </div>

              <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label={`Technologies used in ${p.title}`}>
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{t}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-1 sm:mt-2">
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
