import { useState } from "react";
import { useLocale, t } from "@/i18n";

export default function Newsletter() {
  const locale = useLocale();
  const n = t[locale].newsletter;
  const [done, setDone] = useState(false);
  return (
    <div className="container max-w-3xl py-20">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{n.eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{n.title}</h2>
      <p className="text-lg leading-relaxed text-foreground/85 mb-5">{n.p1}</p>
      <p className="text-lg leading-relaxed text-foreground/85 mb-5">{n.p2}</p>
      <form
        className="bg-paper p-8 mt-8 border border-border"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        {done ? (
          <div className="text-primary font-semibold">{n.done}</div>
        ) : (
          <div className="space-y-4">
            <input type="text" placeholder={n.namePlaceholder} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
            <input type="email" placeholder={n.emailPlaceholder} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
            <button type="submit" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 w-full sm:w-auto">
              {n.cta}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
