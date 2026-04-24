import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <div className="container max-w-3xl py-20">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Newsletter</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">La domenica delle startup italiane.</h2>
      <p className="text-lg leading-relaxed text-foreground/85 mb-5">
        Ogni domenica mattina, dodicimila tra founder, investitori, advisor e operatori dell'ecosistema
        ricevono nella loro inbox la newsletter di Founders.it. Una sintesi curata di tutto quello che è
        successo nella settimana sul fronte dell'innovazione italiana: i round chiusi, le interviste più
        lette, i casi studio del momento, le scadenze delle call pubbliche, gli eventi da segnare in agenda.
      </p>
      <p className="text-lg leading-relaxed text-foreground/85 mb-5">
        Non vendiamo il tuo indirizzo a nessuno, non inviamo spam, non sponsorizziamo aziende attraverso
        la newsletter. La curiamo personalmente in redazione e la consideriamo il nostro filo diretto con
        chi ci legge. Iscriverti è gratis e puoi cancellarti in qualsiasi momento con un click in fondo a
        ogni invio.
      </p>
      <form
        className="bg-paper p-8 mt-8 border border-border"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        {done ? (
          <div className="text-primary font-semibold">Grazie! Hai chiesto di iscriverti alla newsletter.</div>
        ) : (
          <div className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
            <input type="email" placeholder="Email" className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
            <button type="submit" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 w-full sm:w-auto">
              Iscriviti
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
