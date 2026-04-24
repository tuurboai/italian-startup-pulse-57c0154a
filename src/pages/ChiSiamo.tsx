import { useEffect } from "react";
import { Link } from "react-router-dom";
import { autori } from "@/data/autori";

export default function ChiSiamo() {
  useEffect(() => {
    document.title = "Chi siamo — Founders.it";
  }, []);

  return (
    <div>
      <section className="bg-paper py-20">
        <div className="container max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Chi siamo</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-8">
            Raccontiamo l'innovazione italiana con il rigore che merita.
          </h2>
          <p className="text-xl leading-relaxed text-foreground/80 mb-6">
            Founders.it nasce a Milano nel 2021 dall'idea di Giulia Marchetti, ex giornalista del Sole 24 Ore,
            di costruire un magazine indipendente interamente dedicato all'ecosistema startup italiano.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            All'epoca il mercato editoriale italiano dedicato all'innovazione era diviso tra grandi testate
            generaliste, in cui le startup occupavano qualche colonna ogni tanto, e blog di settore spesso
            poco indipendenti, finanziati da accordi commerciali con le aziende di cui scrivevano. In mezzo,
            mancava uno spazio per fare giornalismo serio: con tempo, con metodo, con accesso diretto alle
            persone, ai numeri, ai documenti. Founders.it è nato per riempire quello spazio.
          </p>
        </div>
      </section>

      <section className="container py-20 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="text-center md:border-r border-border md:pr-10">
          <div className="font-display text-5xl font-bold text-primary">48k</div>
          <div className="text-sm text-muted-foreground mt-2">lettori mensili</div>
        </div>
        <div className="text-center md:border-r border-border md:pr-10">
          <div className="font-display text-5xl font-bold text-primary">12.4k</div>
          <div className="text-sm text-muted-foreground mt-2">iscritti newsletter</div>
        </div>
        <div className="text-center">
          <div className="font-display text-5xl font-bold text-primary">4 anni</div>
          <div className="text-sm text-muted-foreground mt-2">di pubblicazione continua</div>
        </div>
      </section>

      <section className="container max-w-3xl pb-16">
        <h3 className="font-display text-3xl font-bold mb-5">La nostra mission</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Crediamo che l'Italia abbia bisogno di un giornalismo dell'innovazione che sia all'altezza delle
          aziende che vuole raccontare. Per questo lavoriamo solo con autori specializzati, manteniamo un
          rapporto diretto con le fonti e ci finanziamo attraverso la nostra community di lettori e le poche
          collaborazioni pubblicitarie che accettiamo, sempre dichiarate in modo trasparente.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Le aziende di cui parliamo non pagano per essere coperte, e non hanno alcun diritto di prelettura
          sui nostri articoli. Quando intervistiamo un founder, lo facciamo con domande preparate dalla
          redazione, non concordate con uffici stampa. Quando analizziamo un round di investimento, lo
          facciamo con i numeri ufficiali e con il commento di operatori indipendenti del settore.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
          Pubblichiamo nuovi contenuti tre volte alla settimana, oltre alla newsletter del weekend. Tutto
          il nostro archivio è e rimarrà liberamente accessibile online: crediamo che la conoscenza sul mondo
          startup italiano debba essere un bene pubblico, non un servizio premium per pochi.
        </p>

        <h3 className="font-display text-3xl font-bold mt-12 mb-5">La nostra storia</h3>
        <p className="text-lg leading-relaxed text-foreground/85 mb-5">
          Il primo articolo di Founders.it è stato pubblicato il 4 ottobre 2021: un'intervista a una founder
          torinese che aveva appena chiuso il primo seed round della sua carriera. Da allora abbiamo
          pubblicato oltre duecento articoli, costruito una redazione di tre persone a tempo pieno, lanciato
          la newsletter settimanale che oggi conta oltre dodicimila iscritti, organizzato eventi a Milano,
          Roma e Torino, e collaborato con istituzioni come CDP Venture Capital, Italian Tech Alliance e
          le principali università italiane.
        </p>
        <p className="text-lg leading-relaxed text-foreground/85">
          Founders.it è oggi una società editoriale a tutti gli effetti, con sede a Milano in via Tortona,
          che riteniamo il quartiere giusto per chi racconta innovazione. Continuiamo a crescere ascoltando
          la nostra community: se hai una storia da raccontarci o un suggerimento, scrivi alla redazione.
        </p>

        <h3 className="font-display text-3xl font-bold mt-12 mb-8">La redazione</h3>
        <div className="space-y-8">
          {autori.map((a) => (
            <div key={a.slug} className="flex gap-5 items-start">
              <img src={a.foto} alt="" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div>
                <Link to={`/autore/${a.slug}`} className="font-display text-xl font-semibold hover:text-primary">
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
