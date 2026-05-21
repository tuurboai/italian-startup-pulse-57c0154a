import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLocale, lp, t, stripLocale, LOCALES, categorySlug } from "@/i18n";

export default function Navbar() {
  const locale = useLocale();
  const nav = t[locale].nav;
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: lp("/articoli", locale), label: nav.articles, end: true },
    { to: lp(`/articoli/${categorySlug("interviews", locale)}`, locale), label: nav.interviews },
    { to: lp(`/articoli/${categorySlug("investments", locale)}`, locale), label: nav.investments },
    { to: lp(`/articoli/${categorySlug("guides", locale)}`, locale), label: nav.guides },
    { to: lp("/autori", locale), label: nav.authors },
    { to: lp("/chi-siamo", locale), label: nav.about },
  ];

  const switchLocale = (l: typeof locale) => {
    // strip current locale from path then re-prefix
    const base = stripLocale(location.pathname);
    navigate(lp(base, l));
  };

  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="container py-4 flex items-center justify-between gap-6">
        <Link to={lp("/", locale)} className="flex items-center gap-2 group">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Founders<span className="text-primary">.it</span>
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider">
            {LOCALES.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`px-1.5 py-0.5 rounded-sm transition-colors ${l === locale ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder={nav.searchPlaceholder}
              className="bg-muted/60 border border-border rounded-sm px-3 py-1.5 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <Link
            to={lp("/newsletter", locale)}
            className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-sm hover:bg-primary/90"
          >
            {nav.subscribe}
          </Link>
        </div>
      </div>
    </header>
  );
}
