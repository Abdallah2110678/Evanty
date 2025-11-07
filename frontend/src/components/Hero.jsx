function Hero() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">
        Therapeutic e-Learning
      </p>
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
        Grow emotional resilience with guided therapy programs.
      </h1>
      <p className="max-w-2xl text-base text-slate-600">
        Evanty Psychology blends therapist-led lessons, mindfulness micro-courses, and personalized
        practice plans so your clients can continue their healing journey between sessions.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#programs"
          className="rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
        >
          Explore programs
        </a>
        <a
          href="#therapists"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Meet therapy team
        </a>
      </div>
    </main>
  );
}

export default Hero;
