import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { articoli, slugCategoria } from "@/data/articoli";
import { autori } from "@/data/autori";
import ArticleHero from "@/components/ArticleHero";
import ArticleCard from "@/components/ArticleCard";
import CategoryBadge from "@/components/CategoryBadge";
import NotFound from "./NotFound";

export default function ArticoloSingolo() {
  const { slug } = useParams<{ slug: string }>();
  const articolo = articoli.find((a) => a.slug === slug);

  useEffect(() => {
    if (articolo) document.title = articolo.titolo;
  }, [articolo]);

  if (!articolo) return <NotFound />;

  const autore = autori.find((a) => a.slug === articolo.autoreSlug)!;
  const correlati = articoli
    .filter((a) => a.categoria === articolo.categoria && a.slug !== articolo.slug)
    .slice(0, 3);
  const popolari = articoli.filter((a) => a.slug !== articolo.slug).slice(0, 4);

  return (
    <article>
      <ArticleHero articolo={articolo} />

      <div className="container py-14 grid lg:grid-cols-[1fr_300px] gap-14">
        <div className="prose-editorial max-w-3xl">
          <p className="text-xl md:text-2xl font-display text-foreground/80 leading-relaxed mb-10">
            {articolo.intro}
          </p>

          {articolo.body.map((b, i) => {
            if (b.tipo === "h2") return <h2 key={i}>{b.testo}</h2>;
            if (b.tipo === "quote") return <blockquote key={i}>{b.testo}</blockquote>;
            if (b.tipo === "link") {
              return (
                <p key={i}>
                  {b.testo}
                  <Link to={b.href!} className="text-primary underline">{b.label}</Link>
                </p>
              );
            }
            return <p key={i}>{b.testo}</p>;
          })}

          <div className="mt-12 pt-10 border-t border-border flex items-start gap-5">
            <img src={autore.foto} alt="" className="w-20 h-20 rounded-full object-cover" />
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-semibold">Scritto da</div>
              <Link to={`/autore/${autore.slug}`} className="font-display text-xl font-semibold hover:text-primary">
                {autore.nome}
              </Link>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{autore.bio}</p>
            </div>
          </div>
        </div>

        <aside>
          <h3 className="font-display text-lg font-semibold mb-4 pb-3 border-b border-border">Sull'autore</h3>
          <Link to={`/autore/${autore.slug}`} className="flex items-center gap-3 mb-8 group">
            <img src={autore.foto} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="font-semibold group-hover:text-primary">{autore.nome}</div>
              <div className="text-xs text-muted-foreground">{autore.ruolo}</div>
            </div>
          </Link>

          <h4 className="font-display text-lg font-semibold mb-4 pb-3 border-b border-border">Categorie</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            <Link to={`/articoli/${slugCategoria(articolo.categoria)}`}>
              <CategoryBadge categoria={articolo.categoria} />
            </Link>
          </div>

          <h4 className="font-display text-lg font-semibold mb-4 pb-3 border-b border-border">Articoli popolari</h4>
          <ul className="space-y-5">
            {popolari.map((a) => (
              <li key={a.slug}>
                <Link to={`/articolo/${a.slug}`} className="block group">
                  <div className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1">{a.categoria}</div>
                  <div className="font-display text-base leading-snug font-semibold group-hover:text-primary">{a.titolo}</div>
                  <div className="text-xs text-muted-foreground mt-1">{a.data}</div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="bg-paper py-16">
        <div className="container">
          <h2 className="font-display text-3xl font-bold mb-10">Articoli correlati</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {correlati.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
          </div>
        </div>
      </section>
    </article>
  );
}
