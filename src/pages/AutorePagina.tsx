import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { autori } from "@/data/autori";
import { articoli } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";
import NotFound from "./NotFound";

export default function AutorePagina() {
  const { slug } = useParams<{ slug: string }>();
  const autore = autori.find((a) => a.slug === slug);

  useEffect(() => {
    if (autore) document.title = autore.nome;
  }, [autore]);

  if (!autore) return <NotFound />;

  const suoiArticoli = articoli.filter((a) => a.autoreSlug === autore.slug);

  return (
    <div>
      <section className="bg-paper py-16">
        <div className="container grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <img src={autore.foto} alt="" className="w-full aspect-square object-cover" />
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Autore</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">{autore.nome}</h2>
            <div className="text-primary font-semibold mb-6">{autore.ruolo}</div>
            <p className="text-foreground/85 leading-[1.85] text-[1.0625rem]">{autore.bioLunga}</p>
            <div className="mt-6 flex gap-4 text-sm">
              <a href="#" className="text-primary hover:underline">Twitter</a>
              <a href="#" className="text-primary hover:underline">LinkedIn</a>
              <span className="text-muted-foreground">{autore.articoli} articoli pubblicati</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <h3 className="font-display text-2xl font-semibold mb-8 pb-3 border-b border-border">
          Articoli di {autore.nome.split(" ")[0]}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {suoiArticoli.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
        </div>
      </section>
    </div>
  );
}
