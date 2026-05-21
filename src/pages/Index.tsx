import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticoli, getCategorie } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";

import NewsletterBanner from "@/components/NewsletterBanner";
import CategoryBadge from "@/components/CategoryBadge";
import DynamicSlider from "@/components/DynamicSlider";
import { useLocale, lp, t, categorySlug } from "@/i18n";

const Index = () => {
  const locale = useLocale();
  const h = t[locale].home;
  const articoli = getArticoli(locale);
  const categorie = getCategorie(locale);

  useEffect(() => {
    document.title = h.docTitle;
  }, [h.docTitle]);

  const inEvidenza = articoli.slice(1, 4);
  const ultimi = articoli.slice(4, 10);

  return (
    <div>
      <DynamicSlider />

      <section className="container py-16">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{h.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">{h.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{h.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {inEvidenza.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{h.latestEyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">{h.latestTitle}</h2>
            </div>
            <Link to={lp("/articoli", locale)} className="hidden md:inline text-sm font-semibold text-primary hover:underline">
              {h.allArticles}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ultimi.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{h.whyReadEyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{h.whyReadTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{h.whyReadBody}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "01", t: h.pillar1Title, b: h.pillar1Body },
            { n: "02", t: h.pillar2Title, b: h.pillar2Body },
            { n: "03", t: h.pillar3Title, b: h.pillar3Body },
          ].map((p) => (
            <div key={p.n} className="border border-border p-8 bg-background hover:border-primary transition-colors">
              <div className="text-primary text-3xl font-display font-bold mb-3">{p.n}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterBanner />

      <section className="container py-20">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">{h.exploreTitle}</h2>
          <p className="text-muted-foreground">{h.exploreBody}</p>
        </div>
        <div className="space-y-12">
          {categorie.map((cat) => {
            const items = articoli.filter((a) => a.categoriaKey === cat.key).slice(0, 3);
            return (
              <div key={cat.key}>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <CategoryBadge categoria={cat.label} categoriaKey={cat.key} />
                    <h3 className="font-display text-2xl font-semibold">{cat.label}</h3>
                  </div>
                  <Link to={lp(`/articoli/${categorySlug(cat.key, locale)}`, locale)} className="text-sm text-primary font-semibold hover:underline">
                    {h.seeAll}
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {items.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;
