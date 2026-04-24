import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/articoli", label: "Articoli" },
  { to: "/articoli/interviste", label: "Interviste" },
  { to: "/articoli/investimenti", label: "Investimenti" },
  { to: "/articoli/guide", label: "Guide" },
  { to: "/autori", label: "Autori" },
  { to: "/chi-siamo", label: "Chi siamo" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="container py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo intentionally an h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Founders<span className="text-primary">.it</span>
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/articoli"}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <input
              type="search"
              placeholder="Cerca un articolo…"
              className="bg-muted/60 border border-border rounded-sm px-3 py-1.5 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <Link
            to="/newsletter"
            className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-sm hover:bg-primary/90"
          >
            Iscriviti
          </Link>
        </div>
      </div>
    </header>
  );
}
