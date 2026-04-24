import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-border mt-24">
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="font-display text-2xl font-bold mb-3">
            Founders<span className="text-primary">.it</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Founders.it è il magazine indipendente sull'ecosistema startup italiano.
            Storie, dati e analisi sulle aziende che stanno costruendo l'Italia di domani.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Sezioni</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/articoli" className="hover:text-primary">Tutti gli articoli</Link></li>
            <li><Link to="/articoli/interviste" className="hover:text-primary">Interviste</Link></li>
            <li><Link to="/articoli/investimenti" className="hover:text-primary">Investimenti</Link></li>
            <li><Link to="/articoli/guide" className="hover:text-primary">Guide</Link></li>
            <li><Link to="/articoli/trend" className="hover:text-primary">Trend</Link></li>
            <li><Link to="/articoli/casi-studio" className="hover:text-primary">Casi Studio</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Magazine</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/chi-siamo" className="hover:text-primary">Chi siamo</Link></li>
            <li><Link to="/autori" className="hover:text-primary">Autori</Link></li>
            <li><Link to="/newsletter" className="hover:text-primary">Newsletter</Link></li>
            <li><Link to="/contatti" className="hover:text-primary">Contatti</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-primary">Cookie</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Founders Media S.r.l. — Via Tortona 27, 20144 Milano — P.IVA 11894720966</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
