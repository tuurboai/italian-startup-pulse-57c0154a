const sezioni = [
  {
    h: "Cosa sono i cookie",
    p: "I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano e registrano sul suo dispositivo (computer, tablet, smartphone), per essere poi ritrasmessi agli stessi siti alla successiva visita. I cookie consentono al sito di ricordare le azioni e le preferenze dell'utente (come, ad esempio, i dati di login, la lingua preferita, le dimensioni dei caratteri, altre impostazioni di visualizzazione, eccetera) in modo che non debbano essere indicate nuovamente quando l'utente torni a visitare il medesimo sito o navighi tra le sue pagine.",
  },
  {
    h: "Tipologie di cookie utilizzati",
    p: "Founders.it utilizza diverse tipologie di cookie, ciascuna con una funzione specifica. I cookie tecnici sono indispensabili per il corretto funzionamento del sito e per consentire all'utente di navigare e utilizzare le funzionalità messe a disposizione. Senza questi cookie il sito non potrebbe funzionare correttamente. I cookie di funzionalità permettono al sito di ricordare le scelte effettuate dall'utente per fornire una versione personalizzata del servizio. I cookie analitici, sia di prima che di terza parte, vengono utilizzati per raccogliere informazioni in forma aggregata sul numero di visitatori e su come questi navigano il sito.",
  },
  {
    h: "Cookie di terze parti",
    p: "Il sito Founders.it utilizza alcuni servizi di terze parti che possono installare cookie sul dispositivo dell'utente. In particolare vengono utilizzati i servizi di analisi statistica forniti da Google Analytics, configurato con anonimizzazione dell'indirizzo IP, e i servizi di gestione della newsletter forniti da MailerLite. Per ciascun servizio di terze parti, l'utente è invitato a consultare la specifica informativa privacy del fornitore, raggiungibile attraverso i link riportati in questa pagina. Founders.it non ha accesso diretto ai dati raccolti tramite questi servizi e non è responsabile delle politiche privacy dei singoli fornitori.",
  },
  {
    h: "Durata dei cookie",
    p: "I cookie utilizzati dal sito hanno durate diverse a seconda della loro tipologia e finalità. I cookie di sessione vengono cancellati automaticamente alla chiusura del browser. I cookie persistenti, invece, rimangono memorizzati sul dispositivo dell'utente fino alla loro scadenza o cancellazione manuale. La durata dei cookie persistenti utilizzati dal sito Founders.it varia da 30 giorni a 24 mesi, in funzione della specifica finalità del cookie. L'utente può in qualsiasi momento cancellare i cookie dal proprio browser attraverso le impostazioni dello stesso.",
  },
  {
    h: "Come gestire i cookie",
    p: "L'utente può gestire le preferenze relative ai cookie attraverso le impostazioni del proprio browser. La maggior parte dei browser consente di accettare o rifiutare tutti i cookie, di accettarne solo alcune tipologie, o di essere avvisati ogni volta che un sito propone l'installazione di un cookie. È inoltre possibile cancellare in qualsiasi momento i cookie già memorizzati sul dispositivo. Si segnala tuttavia che la disabilitazione dei cookie tecnici può compromettere il corretto funzionamento del sito e impedire all'utente di accedere ad alcune funzionalità.",
  },
  {
    h: "Istruzioni per i principali browser",
    p: "Per gestire i cookie nei principali browser è possibile consultare le seguenti pagine di assistenza ufficiali. Per Google Chrome: support.google.com/chrome/answer/95647. Per Mozilla Firefox: support.mozilla.org/it/kb/Gestione%20dei%20cookie. Per Safari: support.apple.com/it-it/guide/safari/sfri11471. Per Microsoft Edge: support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge. Si invita l'utente a verificare periodicamente queste impostazioni per assicurarsi che corrispondano alle proprie preferenze.",
  },
  {
    h: "Aggiornamenti alla cookie policy",
    p: "La presente cookie policy può essere soggetta ad aggiornamenti, anche in conseguenza dell'evoluzione della normativa applicabile o dell'aggiunta di nuovi servizi sul sito. L'utente è invitato a consultare regolarmente questa pagina per essere informato di eventuali modifiche. La data dell'ultimo aggiornamento è sempre riportata in calce alla pagina. In caso di modifiche sostanziali, il Titolare del trattamento provvederà a informare gli utenti tramite avviso pubblicato sul sito.",
  },
  {
    h: "Contatti",
    p: "Per qualsiasi domanda o richiesta di chiarimento relativa alla presente cookie policy, l'utente può contattare il Titolare del trattamento all'indirizzo privacy@founders.it. Per informazioni più generali sul trattamento dei dati personali si rimanda alla sezione Privacy Policy del sito. Il Titolare si impegna a rispondere a ogni richiesta nel più breve tempo possibile e comunque entro i termini previsti dalla normativa applicabile in materia di protezione dei dati personali.",
  },
];

export default function CookiePolicy() {
  return (
    <div className="container max-w-3xl py-16">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Documento legale</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h2>
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
