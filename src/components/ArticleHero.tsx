import { useEffect, useState } from "react";
import type { Articolo } from "@/data/articoli";
import CategoryBadge from "./CategoryBadge";
import { useLocale, t } from "@/i18n";

export default function ArticleHero({ articolo }: { articolo: Articolo }) {
  const locale = useLocale();
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const tm = setTimeout(() => setImgSrc(articolo.immagine), 1200);
    return () => clearTimeout(tm);
  }, [articolo.slug]);

  return (
    <section className="relative bg-foreground text-background">
      <div className="container relative pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <CategoryBadge categoria={articolo.categoria} categoriaKey={articolo.categoriaKey} />
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mt-4 mb-5 text-background">
            {articolo.titolo}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-background/80">
            <span className="font-semibold text-background">{articolo.autore}</span>
            <span>·</span>
            <span>{articolo.data}</span>
            <span>·</span>
            <span>{articolo.tempoLettura} {t[locale].article.minRead}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
