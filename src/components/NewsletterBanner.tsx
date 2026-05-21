import { Link } from "react-router-dom";
import { useLocale, lp, t } from "@/i18n";

export default function NewsletterBanner() {
  const locale = useLocale();
  const n = t[locale].newsletterBanner;
  return (
    <section className="bg-foreground text-background py-14">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-background/60 mb-3 font-semibold">{n.eyebrow}</div>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">{n.title}</h3>
          <p className="text-background/70 leading-relaxed">{n.body}</p>
        </div>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={n.emailPlaceholder}
            className="flex-1 bg-background text-foreground px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Link to={lp("/newsletter", locale)} className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 text-center">
            {n.cta}
          </Link>
        </form>
      </div>
    </section>
  );
}
