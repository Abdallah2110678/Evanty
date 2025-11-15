// src/pages/assessments/AssessmentDetail.jsx
import { useParams } from "react-router-dom";
import { getAssessmentById } from "../../data/assessments";
import { useState, useMemo } from "react";

export default function AssessmentDetail() {
  const { id } = useParams();
  const assessment = getAssessmentById(id);

  const [answers, setAnswers] = useState({}); // { questionId: score }

  if (!assessment) {
    return (
      <div className="min-h-screen bg-[#fef7ef] flex items-center justify-center">
        <p className="text-slate-700 text-lg">
          Assessment not found. Please go back to the assessments page.
        </p>
      </div>
    );
  }

  const handleOptionChange = (questionId, score) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: score,
    }));
  };

  const totalScore = useMemo(
    () =>
      Object.values(answers).reduce(
        (sum, score) => sum + Number(score || 0),
        0
      ),
    [answers]
  );

  return (
    <div className="min-h-screen bg-[#fef7ef]">
      <div className="mx-auto max-w-4xl px-6 py-10">
        {/* HEADER */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-600">
            Psychological Assessment
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {assessment.title}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Designed by{" "}
            <span className="font-medium text-slate-800">
              {assessment.therapistName}
            </span>{" "}
            • Estimated time: {assessment.estimatedTime}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            This tool is for educational and self-awareness purposes only and
            does not replace professional clinical diagnosis.
          </p>
        </div>

        {/* QUESTIONS */}
        <div className="space-y-6">
          {assessment.questions.map((q, idx) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900 mb-3">
                {idx + 1}. {q.text}
              </p>

              <div className="space-y-2">
                {q.options.map((opt) => (
                  <label
                    key={opt.id}
                    className="flex items-start gap-2 rounded-xl border border-slate-200/70 bg-slate-50/60 px-3 py-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-100"
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.score}
                      checked={answers[q.id] === opt.score}
                      onChange={() =>
                        handleOptionChange(q.id, opt.score)
                      }
                      className="mt-1 h-4 w-4"
                    />
                    <span>{opt.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY / SCORE */}
        <div className="mt-8 flex items-center justify-between bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Current total score
            </p>
            <p className="text-xs text-slate-500 mt-1">
              This is a simple sum of your selected options. Interpretation
              rules can be added later by your therapists team.
            </p>
          </div>
          <p className="text-3xl font-bold text-emerald-600">{totalScore}</p>
        </div>

        {/* LATER: submit button to send results to backend */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="rounded-full bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md shadow-indigo-500/30 transition"
          >
            Save result (coming soon)
          </button>
        </div>
      </div>
    </div>
  );
}
