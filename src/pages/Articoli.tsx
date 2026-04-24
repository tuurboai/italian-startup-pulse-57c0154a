import { useEffect } from "react";
import { articoli, categorie } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";

export default function Articoli() {
  useEffect(() => {
    document.title = "Tutti gli articoli";
  }, []);

  return (
    <div className="container py-14">
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Archivio</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Tutti gli articoli</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Da quando abbiamo lanciato Founders.it nel 2021, abbiamo pubblicato oltre duecento storie
          dedicate all'ecosistema startup italiano. Interviste ai founder che stanno costruendo le
          aziende del futuro, analisi rigorose dei round di investimento, guide pratiche pensate per
          chi vuole avviare un progetto di impresa, casi studio approfonditi su scaleup italiane di
          riferimento. Ogni articolo nasce da un lavoro di reporting sul campo: incontri di persona,
          telefonate con investitori e operatori, dati verificati con le fonti dirette.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          In questa pagina trovi l'archivio completo, ordinato per data di pubblicazione. Puoi filtrare
          per categoria usando i tag qui sotto, oppure esplorare tematicamente le nostre rubriche.
          Buona lettura.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mr-3 self-center">Filtra:</span>
        <button className="px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-sm">Tutte</button>
        {categorie.map((c) => (
          <button key={c} className="px-3 py-1.5 bg-muted text-foreground text-xs font-semibold rounded-sm hover:bg-muted/70">
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articoli.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
      </div>
    </div>
  );
}
