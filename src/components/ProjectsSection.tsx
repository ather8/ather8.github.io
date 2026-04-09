import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    situation: "Fraudulent transactions made up <0.2% of records in a highly imbalanced financial dataset — traditional models failed to flag most fraud.",
    task: "Build a hybrid detection system that maximizes fraud recall without overwhelming false positives.",
    action: "Combined Isolation Forest (unsupervised anomaly detection) with TensorFlow Autoencoders for learned representations. Applied SMOTE resampling to balance training data.",
    result: "Achieved 90% fraud recall and 92.6% ROC AUC, significantly reducing undetected fraud cases.",
    tags: ["Python", "TensorFlow", "Isolation Forest", "Autoencoders"],
    github: "https://github.com/ather8/Anomaly_Detection_in_Credit_Card_Transactions",
  },
  {
    title: "Digit Recognizer with CNN",
    situation: "The MNIST benchmark needed a robust classifier to handle diverse handwriting styles.",
    task: "Design a CNN architecture that generalizes well beyond the training set.",
    action: "Built a CNN with Conv2D, MaxPooling, and Dropout layers. Augmented data with rotations and shifts, and applied learning rate scheduling.",
    result: "~99% test accuracy on MNIST with minimal overfitting, validated on unseen data.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    github: "https://github.com/ather8/Digit-Recognizer-with-CNN",
  },
  {
    title: "Adult Census Income Classification",
    situation: "Census income data had significant class imbalance and mixed categorical/numerical features.",
    task: "Predict income brackets accurately while handling imbalance and noisy features.",
    action: "Compared RandomForest vs. XGBoost with SMOTE. Custom feature engineering and GridSearchCV for hyperparameter tuning.",
    result: "89% ROC AUC on test data, with XGBoost outperforming after systematic tuning.",
    tags: ["Python", "XGBoost", "SMOTE", "scikit-learn"],
    github: "https://github.com/ather8/Adult_Census_Income_Classification",
  },
  {
    title: "Titanic Disaster Prediction",
    situation: "Limited, messy historical data from the Titanic disaster with missing values across critical columns.",
    task: "Predict passenger survival using interpretable ML with robust feature engineering.",
    action: "Built a Random Forest pipeline with title extraction, family size metrics, and GridSearchCV optimization.",
    result: "~83.4% cross-validation accuracy with clear, interpretable feature importance rankings.",
    tags: ["Python", "scikit-learn", "Pandas", "Random Forest"],
    github: "https://github.com/ather8/Titanic-Disaster-Project",
  },
  {
    title: "House Prices Prediction",
    situation: "The Ames Housing dataset had 80+ features with extensive missing data and multicollinearity.",
    task: "Build a regression model with robust imputation and feature selection strategies.",
    action: "Applied Linear Regression with neighborhood-based median imputation, one-hot encoding, and residual analysis for diagnostics.",
    result: "Strong predictive performance with clear residual patterns guiding iterative improvements.",
    tags: ["Python", "scikit-learn", "Seaborn", "Linear Regression"],
    github: "https://github.com/ather8/House-Prices-Project",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6" aria-labelledby="projects-heading">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="projects-heading" className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" aria-hidden="true" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group bg-card border border-border rounded-xl p-5 sm:p-6 flex flex-col gap-3 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>

              <div className="space-y-2.5 flex-1 text-sm">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Situation</p>
                  <p className="text-muted-foreground leading-relaxed">{p.situation}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Task</p>
                  <p className="text-muted-foreground leading-relaxed">{p.task}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Action</p>
                  <p className="text-muted-foreground leading-relaxed">{p.action}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">Result</p>
                  <p className="text-foreground font-medium leading-relaxed">{p.result}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${p.title}`}>
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{t}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-1">
                <Button variant="outline" size="sm" className="gap-1.5 min-h-[44px]" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} source code on GitHub (opens in new tab)`}>
                    <Github className="h-3.5 w-3.5" aria-hidden="true" /> Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1.5 min-h-[44px]" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} live demo (opens in new tab)`}>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Demo
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
