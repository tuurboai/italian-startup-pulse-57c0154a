import { Link } from "react-router-dom";
import { autori } from "@/data/autori";

export default function Autori() {
  return (
    <div className="container py-14">
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">La redazione</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Le persone che scrivono Founders.it</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Una redazione piccola ma specializzata. Ogni autore ha una storia professionale alle spalle
          nel mondo del giornalismo economico, della finanza o dell'innovazione. Conosci chi firma gli
          articoli che leggi ogni settimana.
        </p>
      </header>
      <div className="grid md:grid-cols-3 gap-10">
        {autori.map((a) => (
          <Link key={a.slug} to={`/autore/${a.slug}`} className="group">
            <img src={a.foto} alt="" className="w-full aspect-square object-cover mb-5 grayscale group-hover:grayscale-0 transition-all" />
            <h3 className="font-display text-2xl font-semibold mb-1 group-hover:text-primary">{a.nome}</h3>
            <div className="text-sm text-primary font-semibold mb-3">{a.ruolo}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
            <div className="mt-4 text-xs text-muted-foreground">{a.articoli} articoli pubblicati</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
