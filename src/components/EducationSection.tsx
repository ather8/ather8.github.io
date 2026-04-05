import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-24 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
        <div className="h-1 w-16 bg-primary mx-auto mb-12 rounded-full" />
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-xl p-8 flex gap-6 items-start">
            <div className="h-16 w-16 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center shrink-0">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">B.Sc. in Electrical Engineering</h3>
              <p className="text-primary font-medium">Computer and Systems Engineering Specialization</p>
              <p className="text-muted-foreground">Faculty of Engineering — Ain Shams University</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Graduated June 2024</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Cairo, Egypt</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 flex gap-6 items-start">
            <div className="h-16 w-16 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center shrink-0">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Military Service</h3>
              <p className="text-muted-foreground">Completed national military service</p>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> Completed Dec 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
