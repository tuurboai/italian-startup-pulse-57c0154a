import { useLocale, t } from "@/i18n";

export default function Contatti() {
  const locale = useLocale();
  const c = t[locale].contact;
  return (
    <div className="container max-w-3xl py-20">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{c.eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{c.title}</h2>
      <p className="text-lg leading-relaxed text-foreground/85 mb-4">{c.body}</p>
      <form className="bg-paper p-8 mt-10 border border-border space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={c.name} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <input type="email" placeholder={c.email} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <input type="text" placeholder={c.subject} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <textarea placeholder={c.message} rows={6} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <button type="submit" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90">
          {c.send}
        </button>
      </form>
    </div>
  );
}
