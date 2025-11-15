// src/components/AssessmentCard.jsx
import { Link } from "react-router-dom";

export default function AssessmentCard({ assessment }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition overflow-hidden">
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-slate-900 min-h-[52px]">
          {assessment.title}
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          Therapist:{" "}
          <span className="text-slate-700">{assessment.therapistName}</span>
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Estimated time: {assessment.estimatedTime}
        </p>

        <p className="text-sm text-slate-600 mt-3 flex-1">
          {assessment.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-bold text-emerald-600">
            {assessment.price}
          </span>
          <Link
            to={`/assessments/${assessment.id}`}
            className="rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 text-sm font-medium transition"
          >
            Start assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
