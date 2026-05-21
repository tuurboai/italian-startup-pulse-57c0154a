import { useEffect } from "react";
import { getArticoli, getCategorie } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";
import { useLocale, t } from "@/i18n";

export default function Articoli() {
  const locale = useLocale();
  const a = t[locale].articlesPage;
  const articoli = getArticoli(locale);
  const categorie = getCategorie(locale);

  useEffect(() => {
    document.title = a.docTitle;
  }, [a.docTitle]);

  return (
    <div className="container py-14">
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{a.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">{a.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">{a.body1}</p>
        <p className="text-muted-foreground leading-relaxed">{a.body2}</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mr-3 self-center">{a.filter}</span>
        <button className="px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-sm">{a.all}</button>
        {categorie.map((c) => (
          <button key={c.key} className="px-3 py-1.5 bg-muted text-foreground text-xs font-semibold rounded-sm hover:bg-muted/70">
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articoli.map((x) => <ArticleCard key={x.slug} articolo={x} />)}
      </div>
    </div>
  );
}
