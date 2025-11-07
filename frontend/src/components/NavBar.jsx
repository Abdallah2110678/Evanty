import logo from '../assets/logo.png';
import { navLinks } from '../data/navLinks';

function NavBar() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Evanty Psychology logo"
            className="h-12 w-12 rounded-full border border-slate-200 object-cover"
          />
          <div>
            <p className="text-lg font-semibold text-slate-900">Evanty</p>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Psychology
            </p>
          </div>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>
        <button className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90">
          Book a Session
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
