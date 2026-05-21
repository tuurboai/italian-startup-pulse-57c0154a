import { useParams } from "react-router-dom";
import { getArticoli } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";
import NotFound from "./NotFound";
import { useLocale, t, categoryFromSlug, categoryLabel } from "@/i18n";

export default function ArticoliCategoria() {
  const locale = useLocale();
  const { categoria } = useParams<{ categoria: string }>();
  const key = categoryFromSlug(categoria || "", locale);

  if (!key) return <NotFound />;

  const items = getArticoli(locale).filter((a) => a.categoriaKey === key);
  const label = categoryLabel(key, locale);

  return (
    <div className="container py-14">
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{t[locale].category.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">{label}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{t[locale].categoryDescriptions[key]}</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
      </div>
    </div>
  );
}
