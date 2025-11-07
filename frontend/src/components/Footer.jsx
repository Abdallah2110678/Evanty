import logo from '../assets/logo.png';
import { navLinks } from '../data/navLinks';

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Evanty Psychology logo"
              className="h-10 w-10 rounded-full border border-slate-800 object-cover"
            />
            <div>
              <p className="text-lg font-semibold">Evanty</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Psychology
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Compassionate therapy education, crafted by licensed mental health professionals.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <a className="hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</p>
          <p className="text-sm text-slate-300">
            hello@evantypsychology.com
            <br />
            (555) 214-0890
          </p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Evanty Psychology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
