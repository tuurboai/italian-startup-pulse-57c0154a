const sezioni = [
  {
    h: "Titolare del trattamento",
    p: "Il titolare del trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) è Founders Media S.r.l., con sede legale in Via Tortona 27, 20144 Milano (MI), iscritta al Registro delle Imprese di Milano con codice fiscale e partita IVA 11894720966. Il Titolare può essere contattato via email all'indirizzo privacy@founders.it oppure tramite raccomandata con avviso di ricevimento all'indirizzo della sede legale. Per qualsiasi questione relativa al trattamento dei dati, l'utente può rivolgersi direttamente al Titolare, che si impegna a fornire risposta entro i termini previsti dalla normativa applicabile.",
  },
  {
    h: "Tipologie di dati raccolti",
    p: "Founders.it raccoglie diverse tipologie di dati personali, sia in modo automatico durante la navigazione del sito (dati di traffico, indirizzi IP, informazioni sul browser e sul dispositivo, pagine visitate), sia attraverso l'interazione esplicita dell'utente, ad esempio in occasione dell'iscrizione alla newsletter (nome, indirizzo email), dell'invio di un messaggio attraverso il modulo di contatto (nome, email, contenuto del messaggio) o della partecipazione a eventi o iniziative promosse dalla redazione. Tutti i dati sono raccolti nel rispetto dei principi di minimizzazione e necessità previsti dalla normativa europea.",
  },
  {
    h: "Finalità del trattamento",
    p: "I dati personali raccolti sono trattati per le seguenti finalità: erogazione del servizio editoriale richiesto, invio della newsletter periodica agli utenti che ne hanno fatto esplicita richiesta, gestione delle richieste di contatto, adempimento di obblighi di legge, prevenzione di abusi e attività fraudolente, analisi statistiche aggregate sull'utilizzo del sito al fine di migliorarne i contenuti e la fruibilità. Per ciascuna finalità è prevista una specifica base giuridica, che può consistere nel consenso dell'interessato, nell'esecuzione di un contratto, nell'adempimento di obblighi di legge o nel perseguimento di un legittimo interesse del Titolare.",
  },
  {
    h: "Modalità del trattamento",
    p: "I dati personali sono trattati con strumenti elettronici e organizzati in banche dati protette da misure tecniche e organizzative adeguate al rischio, come previsto dall'articolo 32 del GDPR. L'accesso ai dati è limitato al personale autorizzato, opportunamente formato sul tema della protezione dei dati personali. Il sito utilizza protocolli di trasmissione sicuri (HTTPS) per tutte le comunicazioni e adotta procedure interne di gestione degli incidenti e di valutazione periodica della sicurezza dei sistemi.",
  },
  {
    h: "Conservazione dei dati",
    p: "I dati personali vengono conservati per il tempo strettamente necessario al perseguimento delle finalità per cui sono stati raccolti e comunque nel rispetto dei termini di conservazione previsti dalla normativa applicabile. In particolare, i dati relativi all'iscrizione alla newsletter sono conservati fino a quando l'utente non richieda la cancellazione, mentre i dati relativi alle richieste di contatto sono conservati per un periodo massimo di 24 mesi dall'ultima interazione, salvo diverse esigenze documentali o legali.",
  },
  {
    h: "Diritti dell'interessato",
    p: "L'utente ha il diritto, ai sensi degli articoli 15 e seguenti del GDPR, di ottenere dal Titolare l'accesso ai propri dati personali, la loro rettifica, la cancellazione (diritto all'oblio), la limitazione del trattamento, l'opposizione al trattamento per motivi legittimi e la portabilità dei dati. L'utente ha inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it) qualora ritenga che il trattamento dei propri dati avvenga in violazione della normativa applicabile.",
  },
  {
    h: "Comunicazione e diffusione",
    p: "I dati personali raccolti non vengono diffusi e sono comunicati esclusivamente a soggetti specificamente individuati, quali fornitori di servizi tecnici (hosting, invio newsletter, analisi statistiche), che agiscono in qualità di Responsabili del trattamento ai sensi dell'articolo 28 del GDPR sulla base di specifici contratti che impongono loro il rispetto delle medesime garanzie di sicurezza adottate dal Titolare.",
  },
  {
    h: "Modifiche alla privacy policy",
    p: "Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in qualsiasi momento, dandone comunicazione agli utenti tramite pubblicazione sul sito. La data dell'ultimo aggiornamento è indicata in calce. Si invita pertanto l'utente a consultare regolarmente questa pagina per essere sempre aggiornato sulle modalità di trattamento dei propri dati personali.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-3xl py-16">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Documento legale</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h2>
      <p className="text-sm text-muted-foreground mb-10">Ultimo aggiornamento: 15 marzo 2025</p>
      <div className="prose-editorial">
        {sezioni.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
