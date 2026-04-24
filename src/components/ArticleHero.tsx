import { useEffect, useState } from "react";
import type { Articolo } from "@/data/articoli";
import CategoryBadge from "./CategoryBadge";

export default function ArticleHero({ articolo }: { articolo: Articolo }) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setImgSrc(articolo.immagine);
    }, 1200);
    return () => clearTimeout(t);
  }, [articolo.slug]);

  return (
    <section className="relative bg-foreground text-background">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-foreground/80">
        {imgSrc ? (
          <img src={imgSrc} alt="" className="w-full h-full object-cover opacity-80" />
        ) : (
          <div className="w-full h-full bg-foreground/70" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
      </div>
      <div className="container relative -mt-32 md:-mt-44 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <CategoryBadge categoria={articolo.categoria} />
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mt-4 mb-5 text-background">
            {articolo.titolo}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-background/80">
            <span className="font-semibold text-background">{articolo.autore}</span>
            <span>·</span>
            <span>{articolo.data}</span>
            <span>·</span>
            <span>{articolo.tempoLettura} min di lettura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
