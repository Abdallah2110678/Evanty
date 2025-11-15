// src/components/NavBar.jsx
import logo from "../assets/logo.png";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo + Branding */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Eventy platform logo"
            className="h-12 w-12 rounded-full border border-slate-200 object-cover shadow-sm"
          />
          <div>
            <p className="text-xl font-bold text-slate-900 tracking-tight">
              Eventy
            </p>
            <p className="text-xs uppercase tracking-[0.20em] text-slate-500">
              Psychology & Skills
            </p>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isHashLink =
              link.href.startsWith("#") || link.href.includes("#");

            if (isHashLink) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-all hover:text-slate-900 hover:font-semibold"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                className="transition-all hover:text-slate-900 hover:font-semibold"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Call To Action */}
        <a
          href="/#courses"
          className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:opacity-90 transition"
        >
          Explore Courses
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
