import { Link } from "react-router-dom";
import type { Articolo } from "@/data/articoli";
import CategoryBadge from "./CategoryBadge";
import { useLocale, lp } from "@/i18n";

export default function ArticleCard({ articolo }: { articolo: Articolo }) {
  const locale = useLocale();
  const href = lp(`/articolo/${articolo.slug}`, locale);
  return (
    <article className="group">
      <Link to={href} className="block overflow-hidden bg-muted">
        <img
          src={articolo.immagine}
          alt=""
          className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </Link>
      <div className="pt-4">
        <CategoryBadge categoria={articolo.categoria} categoriaKey={articolo.categoriaKey} />
        <h3 className="font-display text-xl md:text-[1.4rem] font-semibold leading-snug mt-3 mb-2">
          <Link to={href} className="hover:text-primary transition-colors">
            {articolo.titolo}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{articolo.intro}</p>
        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
          <span>{articolo.data} · {articolo.tempoLettura} min</span>
          <Link to={href} className="text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
