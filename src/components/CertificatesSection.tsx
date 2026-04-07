import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import certSupervisedML from "@/assets/certificates/cert-supervised-ml.jpg";
import certAdvancedLearning from "@/assets/certificates/cert-advanced-learning.jpg";
import certUnsupervisedML from "@/assets/certificates/cert-unsupervised-ml.jpg";
import certNNDeepLearning from "@/assets/certificates/cert-nn-deep-learning.jpg";
import certMLPython from "@/assets/certificates/cert-ml-python.jpg";
import certIntroDLKeras from "@/assets/certificates/cert-intro-dl-keras.jpg";
import certDLKerasTF from "@/assets/certificates/cert-dl-keras-tf.jpg";

const certificates = [
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI & Stanford University", instructor: "Andrew Ng", date: "Dec 2025", image: certSupervisedML, link: "https://coursera.org/verify/2M8Y6KVACWCN" },
  { title: "Advanced Learning Algorithms", issuer: "DeepLearning.AI & Stanford University", instructor: "Andrew Ng", date: "Jan 2026", image: certAdvancedLearning, link: "https://coursera.org/verify/XGUEQRD9IL53" },
  { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", issuer: "DeepLearning.AI & Stanford University", instructor: "Andrew Ng", date: "Jan 2026", image: certUnsupervisedML, link: "https://coursera.org/verify/740LOK704GG2" },
  { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", instructor: "Andrew Ng", date: "Feb 2026", image: certNNDeepLearning, link: "https://coursera.org/verify/MB1901TQOOXL" },
  { title: "Machine Learning with Python", issuer: "IBM", instructor: "Multiple Instructors", date: "Mar 2026", image: certMLPython, link: "https://coursera.org/verify/WCZCDDFTHVSC" },
  { title: "Introduction to Deep Learning & Neural Networks with Keras", issuer: "IBM", instructor: "Alex Aklson, Ph.D.", date: "Mar 2026", image: certIntroDLKeras, link: "https://coursera.org/verify/WK40ZAUFNVZU" },
  { title: "Deep Learning with Keras and TensorFlow", issuer: "IBM", instructor: "Multiple Instructors", date: "Apr 2026", image: certDLKerasTF, link: "https://coursera.org/verify/ZWMFZU5RQ7M7" },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certificates" className="py-24 px-6 bg-card/50" aria-labelledby="certificates-heading">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 id="certificates-heading" className="text-3xl font-bold text-center mb-4">Certificates</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" aria-hidden="true" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer group duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelected(i); } }}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={cert.image} alt={`${cert.title} certificate from ${cert.issuer}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-sm text-foreground leading-tight">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary">{cert.date}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary p-1"
                    aria-label={`Verify ${cert.title} certificate (opens in new tab)`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-2 bg-card border-border">
          {selected !== null && (
            <img src={certificates[selected].image} alt={`${certificates[selected].title} certificate full view`} className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
