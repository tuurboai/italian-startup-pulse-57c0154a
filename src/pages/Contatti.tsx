export default function Contatti() {
  return (
    <div className="container max-w-3xl py-20">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Contatti</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Scrivici</h2>
      <p className="text-lg leading-relaxed text-foreground/85 mb-4">
        Per proposte editoriali, segnalazioni di round, suggerimenti su aziende da raccontare o
        collaborazioni puoi scrivere alla redazione all'indirizzo <a href="mailto:redazione@founders.it" className="text-primary underline">redazione@founders.it</a>.
        Per richieste commerciali e partnership: <a href="mailto:business@founders.it" className="text-primary underline">business@founders.it</a>.
        La nostra sede è in Via Tortona 27, 20144 Milano. Leggiamo ogni messaggio e rispondiamo
        normalmente entro tre giorni lavorativi.
      </p>
      <form className="bg-paper p-8 mt-10 border border-border space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nome e cognome" className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <input type="email" placeholder="Email" className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <input type="text" placeholder="Oggetto" className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <textarea placeholder="Il tuo messaggio" rows={6} className="w-full bg-background border border-border px-4 py-3 rounded-sm" />
        <button type="submit" className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm hover:bg-primary/90">
          Invia
        </button>
      </form>
    </div>
  );
}
