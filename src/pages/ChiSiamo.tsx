import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAutori } from "@/data/autori";
import { useLocale, lp, t } from "@/i18n";

export default function ChiSiamo() {
  const locale = useLocale();
  const ab = t[locale].about;
  const autori = getAutori(locale);

  useEffect(() => {
    document.title = ab.docTitle;
  }, [ab.docTitle]);

  return (
    <div>
      <section className="bg-paper py-20">
        <div className="container max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">{ab.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-8">{ab.title}</h2>
          <p className="text-xl leading-relaxed text-foreground/80 mb-6">{ab.lead}</p>
          <p className="text-lg leading-relaxed text-foreground/80">{ab.lead2}</p>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="text-center md:border-r border-border md:pr-10">
          <div className="font-display text-5xl font-bold text-primary">48k</div>
          <div className="text-sm text-muted-foreground mt-2">{ab.statReaders}</div>
        </div>
        <div className="text-center md:border-r border-border md:pr-10">
          <div className="font-display text-5xl font-bold text-primary">12.4k</div>
          <div className="text-sm text-muted-foreground mt-2">{ab.statNewsletter}</div>
        </div>
        <div className="text-center">
          <div className="font-display text-5xl font-bold text-primary">{ab.statYearsValue}</div>
          <div className="text-sm text-muted-foreground mt-2">{ab.statYears}</div>
        </div>
      </section>

      <section className="container max-w-3xl pb-16">
        <h3 className="font-display text-3xl font-bold mb-5">{ab.missionTitle}</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">{ab.mission1}</p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">{ab.mission2}</p>
        <p className="text-lg leading-relaxed text-foreground/85">{ab.mission3}</p>

        <h3 className="font-display text-3xl font-bold mt-12 mb-5">{ab.storyTitle}</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">{ab.story1}</p>
        <p className="text-lg leading-relaxed text-foreground/85">{ab.story2}</p>

        <h3 className="font-display text-3xl font-bold mt-12 mb-8">{ab.teamTitle}</h3>
        <div className="space-y-8">
          {autori.map((a) => (
            <div key={a.slug} className="flex gap-5 items-start">
              <img src={a.foto} alt="" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div>
                <Link to={lp(`/autore/${a.slug}`, locale)} className="font-display text-xl font-semibold hover:text-primary">
                  {a.nome}
                </Link>
                <div className="text-sm text-primary font-semibold mb-2">{a.ruolo}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
