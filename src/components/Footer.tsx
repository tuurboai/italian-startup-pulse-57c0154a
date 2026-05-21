import { Link } from "react-router-dom";
import { useLocale, lp, t, categorySlug } from "@/i18n";

export default function Footer() {
  const locale = useLocale();
  const f = t[locale].footer;
  return (
    <footer className="bg-paper border-t border-border mt-24">
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <div className="font-display text-2xl font-bold mb-3">
            Founders<span className="text-primary">.it</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">{f.description}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">{f.sectionsTitle}</div>
          <ul className="space-y-2 text-sm">
            <li><Link to={lp("/articoli", locale)} className="hover:text-primary">{f.allArticles}</Link></li>
            <li><Link to={lp(`/articoli/${categorySlug("interviews", locale)}`, locale)} className="hover:text-primary">{f.interviews}</Link></li>
            <li><Link to={lp(`/articoli/${categorySlug("investments", locale)}`, locale)} className="hover:text-primary">{f.investments}</Link></li>
            <li><Link to={lp(`/articoli/${categorySlug("guides", locale)}`, locale)} className="hover:text-primary">{f.guides}</Link></li>
            <li><Link to={lp(`/articoli/${categorySlug("trends", locale)}`, locale)} className="hover:text-primary">{f.trends}</Link></li>
            <li><Link to={lp(`/articoli/${categorySlug("case-studies", locale)}`, locale)} className="hover:text-primary">{f.caseStudies}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">{f.magazineTitle}</div>
          <ul className="space-y-2 text-sm">
            <li><Link to={lp("/chi-siamo", locale)} className="hover:text-primary">{f.about}</Link></li>
            <li><Link to={lp("/autori", locale)} className="hover:text-primary">{f.authors}</Link></li>
            <li><Link to={lp("/newsletter", locale)} className="hover:text-primary">{f.newsletter}</Link></li>
            <li><Link to={lp("/contatti", locale)} className="hover:text-primary">{f.contact}</Link></li>
            <li><Link to={lp("/privacy-policy", locale)} className="hover:text-primary">{f.privacy}</Link></li>
            <li><Link to={lp("/cookie-policy", locale)} className="hover:text-primary">{f.cookie}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {f.legalLine}</div>
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
