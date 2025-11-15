// src/pages/assessments/Assessments.jsx
import AssessmentCard from "../../components/AssessmentCard";
import { assessments } from "../../data/assessments";

export default function Assessments() {
  return (
    <div className="min-h-screen bg-[#fef7ef]">

      {/* HERO / TOP TEXT */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-100 via-amber-50 to-sky-100 py-16">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

        <div className="relative mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.3em] text-emerald-600 uppercase">
            Eventy • Psychological Assessments
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 max-w-3xl">
            Explore simple, guided psychological assessments.
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
            These digital tools are designed by specialists to help you reflect
            on your mood, thinking patterns, and daily functioning. They are
            educational and do not replace professional diagnosis.
          </p>
        </div>
      </section>

      {/* GRID OF ASSESSMENTS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Available Assessments
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {assessments.map((assessment) => (
            <AssessmentCard key={assessment.id} assessment={assessment} />
          ))}
        </div>
      </section>
    </div>
  );
}
