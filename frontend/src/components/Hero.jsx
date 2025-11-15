import heroImage from "../assets/hero.jpeg";

function Hero() {
  return (
    <main className="relative isolate overflow-hidden bg-[#fef7ef]">
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-emerald-200 blur-[140px]" />
        <div className="absolute top-12 right-12 h-72 w-72 rounded-full bg-orange-200 blur-[160px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT SIDE – TEXT */}
        <section className="rounded-[2.5rem] bg-[#fdf3e7] p-10 shadow-[0_15px_40px_-18px_rgba(15,23,42,0.35)]">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-500">
            Eventy • Psychology & Skills
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Learn psychology and life skills
            <br />
            in a calm, structured way.
          </h1>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Eventy is an Arabic platform that offers recorded courses, practical
            programs, and digital psychological assessments to help you
            understand yourself and manage life better.
          </p>

          {/* Simple buttons only */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-full bg-[#5b3df5] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5b3df5]/30 transition hover:opacity-90"
            >
              Browse courses
            </a>
            <a
              href="#assessments"
              className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
            >
              Take a free assessment
            </a>
          </div>

          {/* Small supportive text instead of stats */}
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>Recorded & live sessions</span>
            <span>•</span>
            <span>Practical worksheets</span>
            <span>•</span>
            <span>Arabic content</span>
          </div>
        </section>

        {/* RIGHT SIDE – IMAGE ONLY, SIMPLE */}
        <section className="relative overflow-hidden rounded-[3rem] bg-[#0f332e] shadow-[0_20px_45px_-20px_rgba(15,23,42,0.55)]">
          <img
            src={heroImage}
            alt="Calm learning space with natural light"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f332e]/35 via-transparent to-transparent" />

          {/* Small label, no extra buttons/cards */}
          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/60 bg-white/90 px-6 py-4 text-slate-700 shadow-xl shadow-slate-900/15 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Learning mood
            </p>
            <p className="text-lg font-semibold text-slate-900">
              Quiet space • Focused mind
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Hero;
