import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container max-w-2xl py-32 text-center">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Errore 404</p>
      <h2 className="font-display text-5xl md:text-6xl font-bold mb-5">Pagina non trovata</h2>
      <p className="text-lg text-muted-foreground mb-8">
        L'articolo che cerchi è stato spostato o non esiste più. Torna in homepage o sfoglia l'archivio.
      </p>
      <div className="flex gap-4 justify-center">
        <Link to="/" className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-sm">
          Vai in homepage
        </Link>
        <Link to="/articoli" className="border border-border font-semibold px-5 py-3 rounded-sm hover:border-primary">
          Tutti gli articoli
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
