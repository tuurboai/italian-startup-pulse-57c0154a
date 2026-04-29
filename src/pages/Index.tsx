import { useEffect } from "react";
import { Link } from "react-router-dom";
import { articoli, categorie, slugCategoria } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";
import ArticleHero from "@/components/ArticleHero";
import NewsletterBanner from "@/components/NewsletterBanner";
import CategoryBadge from "@/components/CategoryBadge";
import DynamicSlider from "@/components/DynamicSlider";

const Index = () => {
  useEffect(() => {
    document.title = "Founders.it — Storie e numeri delle startup italiane";
  }, []);

  const heroArticolo = articoli[0];
  const inEvidenza = articoli.slice(1, 4);
  const ultimi = articoli.slice(4, 10);

  return (
    <div>
      <DynamicSlider />
      <ArticleHero articolo={heroArticolo} />

      <section className="container py-16">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Magazine indipendente · dal 2021</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
            Storie e numeri delle startup italiane.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founders.it racconta l'ecosistema dell'innovazione italiana attraverso interviste ai founder,
            analisi dei round di investimento, guide pratiche per chi costruisce impresa e casi studio
            sulle aziende che stanno cambiando il modo in cui lavoriamo, paghiamo, viaggiamo, abitiamo.
            Lavoriamo da Milano con lo sguardo rivolto a tutto il Paese, a Bologna come a Bari, a Torino
            come a Catania. Ogni settimana pubblichiamo nuovi contenuti, frutto di reporting sul campo
            e conversazioni dirette con chi quel mercato lo costruisce ogni giorno. Crediamo che parlare
            di startup significhi prima di tutto parlare di persone, scelte e rischi reali, non solo di
            valutazioni e comunicati stampa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {inEvidenza.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Ultime pubblicazioni</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Cosa leggere questa settimana</h2>
            </div>
            <Link to="/articoli" className="hidden md:inline text-sm font-semibold text-primary hover:underline">
              Tutti gli articoli →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ultimi.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Perché leggerci</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Tre principi che guidano la nostra redazione.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founders.it è un progetto editoriale indipendente. Non riceviamo soldi dalle aziende di cui
            scriviamo, non vendiamo articoli sponsorizzati e non lavoriamo come ufficio stampa per nessuno.
            Quello che ci tiene in piedi è il rapporto di fiducia con i nostri lettori e il sostegno della
            nostra community di abbonati.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-border p-8 bg-background hover:border-primary transition-colors">
            <div className="text-primary text-3xl font-display font-bold mb-3">01</div>
            <h3 className="font-display text-xl font-semibold mb-3">Indipendenza editoriale</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Non pubblichiamo contenuti sponsorizzati travestiti da articoli e non scriviamo
              su aziende solo perché ci vengono raccomandate. Le nostre scelte editoriali sono nostre.
            </p>
          </div>
          <div className="border border-border p-8 bg-background hover:border-primary transition-colors">
            <div className="text-primary text-3xl font-display font-bold mb-3">02</div>
            <h3 className="font-display text-xl font-semibold mb-3">Reporting sul campo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ogni inchiesta nasce da incontri di persona, telefonate, dati verificati. Niente
              riassunti di comunicati stampa: solo storie raccontate dopo averle viste con i nostri occhi.
            </p>
          </div>
          <div className="border border-border p-8 bg-background hover:border-primary transition-colors">
            <div className="text-primary text-3xl font-display font-bold mb-3">03</div>
            <h3 className="font-display text-xl font-semibold mb-3">Numeri verificati</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quando citiamo un round, una valuation o una metrica, indichiamo sempre la fonte e
              il contesto. Crediamo che senza dati seri non si possa fare giornalismo serio.
            </p>
          </div>
        </div>
      </section>

      <NewsletterBanner />

      <section className="container py-20">
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Esplora per categoria</h2>
          <p className="text-muted-foreground">Cinque sezioni, cinque modi diversi di raccontare l'innovazione italiana.</p>
        </div>
        <div className="space-y-12">
          {categorie.map((cat) => {
            const items = articoli.filter((a) => a.categoria === cat).slice(0, 3);
            return (
              <div key={cat}>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <CategoryBadge categoria={cat} />
                    <h3 className="font-display text-2xl font-semibold">{cat}</h3>
                  </div>
                  <Link to={`/articoli/${slugCategoria(cat)}`} className="text-sm text-primary font-semibold hover:underline">
                    Vedi tutti →
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
