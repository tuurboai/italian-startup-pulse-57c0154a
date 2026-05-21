import { Link } from "react-router-dom";
import { getAutori } from "@/data/autori";
import { useLocale, lp, t } from "@/i18n";

export default function Autori() {
  const locale = useLocale();
  const ap = t[locale].authorsPage;
  const autori = getAutori(locale);
  return (
    <div className="container py-14">
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{ap.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">{ap.title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{ap.body}</p>
      </header>
      <div className="grid md:grid-cols-3 gap-10">
        {autori.map((a) => (
          <Link key={a.slug} to={lp(`/autore/${a.slug}`, locale)} className="group">
            <img src={a.foto} alt="" className="w-full aspect-square object-cover mb-5 grayscale group-hover:grayscale-0 transition-all" />
            <h3 className="font-display text-2xl font-semibold mb-1 group-hover:text-primary">{a.nome}</h3>
            <div className="text-sm text-primary font-semibold mb-3">{a.ruolo}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
            <div className="mt-4 text-xs text-muted-foreground">{ap.articlesCount(a.articoli)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
