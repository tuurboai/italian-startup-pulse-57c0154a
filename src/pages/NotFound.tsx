import { Link } from "react-router-dom";
import { useLocale, lp, t } from "@/i18n";

const NotFound = () => {
  const locale = useLocale();
  const n = t[locale].notFound;
  return (
    <div className="container max-w-2xl py-32 text-center">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{n.code}</p>
      <h2 className="font-display text-5xl md:text-6xl font-bold mb-5">{n.title}</h2>
      <p className="text-lg text-muted-foreground mb-8">{n.body}</p>
      <div className="flex gap-4 justify-center">
        <Link to={lp("/", locale)} className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-sm">
          {n.home}
        </Link>
        <Link to={lp("/articoli", locale)} className="border border-border font-semibold px-5 py-3 rounded-sm hover:border-primary">
          {n.archive}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
