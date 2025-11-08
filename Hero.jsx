import heroImage from '../assets/hero.jpeg'

function Hero() {
  return (
    <main className="relative isolate overflow-hidden bg-[#fef7ef]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-emerald-200 blur-[140px]" />
        <div className="absolute top-12 right-12 h-72 w-72 rounded-full bg-orange-200 blur-[160px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2.5rem] bg-[#fdf3e7] p-10 shadow-[0_15px_40px_-18px_rgba(15,23,42,0.35)]">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-500">Evanty calm lab</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Shape calmer weeks with a therapist who adapts to your rhythm.
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We weave therapist check-ins, audio lessons, and tactile routines so your mental fitness
            practice fits between video calls, classes, or the school run.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-inner shadow-slate-200/60">
              <p className="text-3xl font-semibold text-slate-900">48 hrs</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">Average match time</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-inner shadow-slate-200/60">
              <p className="text-3xl font-semibold text-slate-900">92%</p>
              <p className="text-xs uppercase tracking-wide text-slate-500">Finish weekly practice</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#therapists"
              className="rounded-full bg-[#f07a4b] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f07a4b]/30 transition hover:opacity-90"
            >
              Start therapist match
            </a>
            <a
              href="#programs"
              className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
            >
              See learning paths
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>Private video rooms</span>
            <span>-</span>
            <span>Licensed multilingual care</span>
            <span>-</span>
            <span>Flexible payment plans</span>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[3rem] bg-[#0f332e] shadow-[0_20px_45px_-20px_rgba(15,23,42,0.55)]">
          <img
            src={heroImage}
            alt="Warm therapy studio with natural light"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f332e]/30 via-transparent to-transparent" />

          <div className="absolute right-8 top-8 w-72 rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/15">
            <p className="text-sm font-semibold text-slate-700">Quick access</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-white">
              <button className="rounded-2xl bg-emerald-400/90 p-4 text-left shadow-inner shadow-emerald-700/20">
                Reserve studio visit
              </button>
              <button className="rounded-2xl bg-orange-400/90 p-4 text-left shadow-inner shadow-orange-700/20">
                Join live video room
              </button>
              <button className="col-span-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-orange-400 p-4 text-left shadow-inner shadow-emerald-900/20">
                Order comfort kit
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/60 bg-white/90 px-6 py-4 text-slate-700 shadow-xl shadow-slate-900/15 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-slate-400">Studio status</p>
            <p className="text-lg font-semibold text-slate-900">Sunlight on, playlist Calm Waves</p>
          </div>
          <button className="absolute bottom-8 right-10 h-12 w-12 rounded-full bg-rose-400 text-white shadow-lg shadow-rose-500/40">
            ^
          </button>
        </section>
      </div>
    </main>
  )
}

export default Hero
