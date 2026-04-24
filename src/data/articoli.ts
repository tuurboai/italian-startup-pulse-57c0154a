import a1 from "@/assets/art-1.jpg";
import a2 from "@/assets/art-2.jpg";
import a3 from "@/assets/art-3.jpg";
import a4 from "@/assets/art-4.jpg";
import a5 from "@/assets/art-5.jpg";
import a6 from "@/assets/art-6.jpg";
import a7 from "@/assets/art-7.jpg";
import a8 from "@/assets/art-8.jpg";
import a9 from "@/assets/art-9.jpg";
import a10 from "@/assets/art-10.jpg";
import a11 from "@/assets/art-11.jpg";
import a12 from "@/assets/art-12.jpg";
import a13 from "@/assets/art-13.jpg";
import a14 from "@/assets/art-14.jpg";
import a15 from "@/assets/art-15.jpg";
import a16 from "@/assets/art-16.jpg";
import a17 from "@/assets/art-17.jpg";
import a18 from "@/assets/art-18.jpg";
import a19 from "@/assets/art-19.jpg";
import a20 from "@/assets/art-20.jpg";

export type Articolo = {
  slug: string;
  titolo: string;
  categoria: string;
  autoreSlug: string;
  autore: string;
  data: string;
  tempoLettura: number;
  intro: string;
  immagine: string;
  body: { tipo: "h2" | "p" | "quote" | "link"; testo: string; href?: string; label?: string }[];
  correlatiSlug?: string[];
};

const corpoGenerico = (titolo: string, tema: string, related: { slug: string; titolo: string }) => [
  {
    tipo: "p" as const,
    testo: `Il caso di ${titolo} arriva in un momento particolare per l'ecosistema startup italiano. Dopo gli anni del boom 2020-2022, in cui la liquidità sembrava infinita e le valutazioni crescevano a doppia cifra ogni trimestre, il mercato sta attraversando una fase di necessaria normalizzazione. I founder con cui parliamo ogni settimana raccontano una realtà più sobria, fatta di unit economics che tornano centrali, di runway misurati in mesi e non in anni, di assunzioni rinviate o riviste al ribasso. È in questo contesto che ${tema} acquista un significato che va oltre la singola storia.`,
  },
  { tipo: "h2" as const, testo: "Il contesto: cosa sta cambiando nel mercato italiano" },
  {
    tipo: "p" as const,
    testo:
      "I dati del Venture Capital Monitor pubblicati negli ultimi mesi raccontano un'Italia che sta crescendo in modo più maturo. Il numero totale di operazioni è leggermente calato, ma il valore medio per deal è aumentato. Gli investitori internazionali continuano a guardare al nostro Paese con interesse, soprattutto su verticali specifici come il fintech, l'insurtech, il deep tech e l'agrifood. Allo stesso tempo, però, il tempo medio per chiudere un round si è allungato, e le due diligence sono diventate più approfondite. I founder che oggi raccolgono capitali devono saper raccontare non solo una visione, ma anche un percorso credibile verso la profittabilità.",
  },
  {
    tipo: "p" as const,
    testo:
      "Questa nuova fase non è necessariamente un male. Molti operatori con cui abbiamo parlato la considerano anzi salutare. Negli anni del boom, racconta un partner di un fondo italiano di primo piano che preferisce restare anonimo, si sono finanziati progetti che difficilmente avrebbero superato un filtro più rigoroso. Oggi il mercato sta ricalibrando le aspettative, e questo dovrebbe portare nel medio periodo a un ecosistema più solido, con aziende capaci di crescere senza bruciare cassa in modo insostenibile.",
  },
  { tipo: "h2" as const, testo: "I numeri che contano" },
  {
    tipo: "p" as const,
    testo:
      "Quando si parla di startup italiane è facile perdersi tra metriche poco significative. Il numero di dipendenti, la valutazione, il totale raccolto sono indicatori spesso sopravvalutati. Quello che davvero conta, soprattutto in questa fase del ciclo, è il rapporto tra revenue ricorrenti e costi operativi, la durata effettiva del runway, il tasso di crescita organico al netto degli effetti di marketing pagato. Sono numeri che raramente finiscono nei comunicati stampa, ma che gli investitori più attenti chiedono come prima cosa.",
  },
  {
    tipo: "quote" as const,
    testo:
      "Le aziende che crescono sostenibilmente oggi sono quelle che hanno trovato un equilibrio tra ambizione di mercato e disciplina finanziaria. È un equilibrio difficile, e si paga in fretta quando salta.",
  },
  {
    tipo: "p" as const,
    testo:
      "Un altro elemento spesso sottovalutato è la qualità del board. Le startup italiane di successo che abbiamo seguito negli ultimi anni hanno quasi sempre un board composto, con almeno un investitore di esperienza, un advisor di settore e un independent in grado di portare una prospettiva esterna. Quando il board funziona, le decisioni difficili — un pivot, una ristrutturazione, una down round — si prendono prima e si eseguono meglio. Quando il board non funziona, anche le aziende più promettenti rischiano di consumare le proprie chance.",
  },
  { tipo: "h2" as const, testo: "Cosa dicono i protagonisti" },
  {
    tipo: "p" as const,
    testo:
      "Abbiamo raccolto le opinioni di una decina di operatori dell'ecosistema, tra founder, partner di fondi, advisor e responsabili di acceleratori, per capire come stanno leggendo il momento. Le risposte sono state sorprendentemente convergenti su alcuni punti, e divergenti su altri. Tutti riconoscono che siamo in una fase di transizione e che alcuni dei modelli di business cresciuti negli anni scorsi vanno ripensati. Più diviso il giudizio sul ruolo del pubblico: c'è chi pensa che CDP Venture Capital stia svolgendo bene la sua funzione di àncora del sistema, e chi invece ritiene che troppe risorse pubbliche stiano arrivando in modo poco selettivo.",
  },
  {
    tipo: "p" as const,
    testo:
      "Sul tema del talento, invece, c'è larghissima convergenza. Trovare profili senior con esperienza internazionale rimane la sfida principale per le startup italiane, soprattutto nelle funzioni di prodotto, ingegneria e go-to-market. Il rientro dei cervelli, tema spesso evocato, sta avvenendo ma in misura ancora insufficiente rispetto al fabbisogno reale del sistema. Le retribuzioni sono cresciute, ma rimane un gap strutturale rispetto ai centri europei più maturi come Londra, Berlino e Parigi.",
  },
  { tipo: "h2" as const, testo: "Lo scenario per i prossimi mesi" },
  {
    tipo: "p" as const,
    testo:
      "Guardando avanti, è ragionevole attendersi una stabilizzazione del mercato attorno ai livelli attuali, con possibili sorprese positive in alcuni verticali specifici. L'intelligenza artificiale generativa continuerà ad attrarre capitali significativi, anche se la selezione tra progetti seri e operazioni di posizionamento opportunistico si farà più rigorosa. Il fintech, dopo gli anni difficili del 2022-2023, mostra segnali di ripresa, soprattutto nell'enterprise. L'insurtech italiano resta un mercato sottosviluppato rispetto al potenziale, e potrebbe vedere movimenti interessanti.",
  },
  {
    tipo: "p" as const,
    testo:
      "Sul fronte degli exit, l'attenzione resta concentrata sulle possibili IPO di alcune scaleup mature e sui movimenti di M&A che potrebbero coinvolgere player italiani come acquirer o come target. Per i founder all'inizio del percorso, il messaggio principale che emerge dalle nostre conversazioni è uno: costruire aziende solide, focalizzate, capaci di dimostrare valore reale ai clienti, è oggi più importante che inseguire valutazioni record. Una lezione che, in fondo, vale per ogni stagione del mercato.",
  },
  { tipo: "h2" as const, testo: "Per approfondire" },
  {
    tipo: "p" as const,
    testo:
      "Per chi volesse continuare la lettura sui temi affrontati in questo articolo, segnaliamo un nostro approfondimento collegato che amplia molti degli spunti qui introdotti, con dati aggiornati e nuove interviste sul campo.",
  },
  {
    tipo: "link" as const,
    testo: "Leggi anche: ",
    href: `/articolo/${related.slug}`,
    label: related.titolo,
  },
  {
    tipo: "p" as const,
    testo:
      "Continueremo a seguire l'evoluzione di questo tema nei prossimi mesi, con interviste, analisi quantitative e casi studio. Se sei un founder, un investitore o un operatore dell'ecosistema e vuoi raccontarci la tua prospettiva, scrivici alla redazione: leggiamo ogni messaggio.",
  },
];

const baseArticoli = [
  { slug: "intervista-ceo-satispay-crescita-europea", titolo: "Satispay, il CEO: 'L'Europa ci ha dato ragione, ora puntiamo ai 10 milioni di utenti'", categoria: "Interviste", autoreSlug: "giulia-marchetti", data: "20 marzo 2025", tempoLettura: 8, intro: "Alberto Dalmasso racconta la storia di una delle startup fintech più rilevanti d'Italia, le sfide della crescita internazionale e il futuro dei pagamenti digitali.", immagine: a1, tema: "la traiettoria di Satispay" },
  { slug: "intervista-founder-bending-spoons", titolo: "Bending Spoons: come un team italiano ha conquistato l'App Store mondiale", categoria: "Interviste", autoreSlug: "giulia-marchetti", data: "5 marzo 2025", tempoLettura: 10, intro: "La storia di un'azienda anomala: nessun VC, crescita organica, acquisizioni strategiche. Parliamo con uno dei co-fondatori.", immagine: a2, tema: "il modello Bending Spoons" },
  { slug: "intervista-founder-prima-assicurazioni", titolo: "Prima Assicurazioni: 'L'insurtech in Italia è ancora agli inizi, e noi vogliamo guidarla'", categoria: "Interviste", autoreSlug: "sara-fontana", data: "18 febbraio 2025", tempoLettura: 7, intro: "Georgios Zekos spiega come hanno costruito la prima assicurazione digitale italiana e perché il mercato tradizionale non è ancora pronto per la disruption.", immagine: a3, tema: "il caso Prima Assicurazioni" },
  { slug: "intervista-ceo-scalapay", titolo: "Scalapay dopo l'unicorno: 'Adesso dobbiamo dimostrare che la crescita è sostenibile'", categoria: "Interviste", autoreSlug: "giulia-marchetti", data: "2 febbraio 2025", tempoLettura: 9, intro: "Simone Mancini parla del buy now pay later, del momento difficile per i fintech europei e di come Scalapay stia ridefinendo la sua strategia.", immagine: a4, tema: "la nuova fase di Scalapay" },
  { slug: "round-investimento-startup-italiane-2024", titolo: "Startup italiane: i round di investimento più importanti del 2024", categoria: "Investimenti", autoreSlug: "marco-de-luca", data: "15 marzo 2025", tempoLettura: 6, intro: "Un'analisi dei principali deal dell'anno: chi ha raccolto di più, in quali settori e con quali investitori.", immagine: a5, tema: "il bilancio dei round 2024" },
  { slug: "venture-capital-italia-2025-trend", titolo: "VC in Italia nel 2025: meno deal, ticket più alti e focus sulla profittabilità", categoria: "Investimenti", autoreSlug: "marco-de-luca", data: "1 marzo 2025", tempoLettura: 7, intro: "Il mercato del venture capital italiano cambia pelle. I dati del primo trimestre 2025 raccontano una storia diversa rispetto al boom del 2021-2022.", immagine: a6, tema: "la trasformazione del VC italiano" },
  { slug: "angel-investing-italia-guida", titolo: "Angel investing in Italia: come funziona, chi sono gli investitori e come avvicinarsi", categoria: "Investimenti", autoreSlug: "marco-de-luca", data: "10 febbraio 2025", tempoLettura: 8, intro: "Una guida completa per founder che cercano i primi capitali e per chi vuole iniziare ad investire in startup early stage.", immagine: a7, tema: "il mondo degli angel italiani" },
  { slug: "equity-crowdfunding-startup-italiane", titolo: "Equity crowdfunding: opportunità reale o hype? I numeri italiani del 2024", categoria: "Investimenti", autoreSlug: "marco-de-luca", data: "25 gennaio 2025", tempoLettura: 6, intro: "Analisi delle principali piattaforme italiane di equity crowdfunding con dati su raccolta media, settori e tassi di successo.", immagine: a8, tema: "il bilancio dell'equity crowdfunding" },
  { slug: "come-scrivere-pitch-deck-investitori", titolo: "Come scrivere un pitch deck che convince gli investitori nel 2025", categoria: "Guide", autoreSlug: "sara-fontana", data: "12 marzo 2025", tempoLettura: 11, intro: "Struttura, contenuti, errori da evitare e i slide che nessuno ti dice di includere. Una guida pratica basata su decine di pitch analizzati.", immagine: a9, tema: "il pitch deck efficace" },
  { slug: "come-trovare-co-founder-startup", titolo: "Come trovare il co-founder giusto (e come capire quando non è quello giusto)", categoria: "Guide", autoreSlug: "giulia-marchetti", data: "28 febbraio 2025", tempoLettura: 9, intro: "La scelta del co-founder è la decisione più importante che farai. Ecco come approcciare il processo con metodo.", immagine: a10, tema: "la scelta del co-founder" },
  { slug: "contratto-founder-agreement-guida", titolo: "Founder agreement: cos'è, perché firmarlo subito e cosa deve contenere", categoria: "Guide", autoreSlug: "sara-fontana", data: "14 febbraio 2025", tempoLettura: 8, intro: "Molte startup saltano questo passaggio e lo pagano caro. Una guida completa per proteggere il tuo progetto fin dal giorno zero.", immagine: a11, tema: "il founder agreement" },
  { slug: "product-market-fit-come-trovarlo", titolo: "Product-market fit: come capire se lo hai raggiunto (e cosa fare se non ce l'hai)", categoria: "Guide", autoreSlug: "marco-de-luca", data: "3 febbraio 2025", tempoLettura: 10, intro: "Il concetto più citato e meno capito del mondo startup. Una guida pratica con framework, metriche e casi reali.", immagine: a12, tema: "la ricerca del product-market fit" },
  { slug: "hiring-primi-dipendenti-startup", titolo: "I primi 5 dipendenti di una startup: chi assumere e in che ordine", categoria: "Guide", autoreSlug: "sara-fontana", data: "20 gennaio 2025", tempoLettura: 7, intro: "Le prime assunzioni definiscono la cultura aziendale per sempre. Ecco come non sbagliare le scelte più importanti.", immagine: a13, tema: "le prime assunzioni" },
  { slug: "ai-startup-italiane-panoramica-2025", titolo: "AI startup in Italia: chi sono, cosa fanno e chi le finanzia nel 2025", categoria: "Trend", autoreSlug: "marco-de-luca", data: "18 marzo 2025", tempoLettura: 8, intro: "Una mappatura dell'ecosistema AI italiano: dai verticali più attivi agli investitori più presenti, fino ai gap ancora da colmare.", immagine: a14, tema: "la mappa dell'AI italiana" },
  { slug: "startup-italiane-b2b-saas-crescita", titolo: "Il B2B SaaS italiano cresce: i numeri e i protagonisti di un mercato in espansione", categoria: "Trend", autoreSlug: "giulia-marchetti", data: "7 marzo 2025", tempoLettura: 7, intro: "L'enterprise software italiano non fa più notizia solo quando viene acquisito. I dati mostrano una maturità nuova.", immagine: a15, tema: "la crescita del B2B SaaS" },
  { slug: "startup-fallite-italia-lezioni", titolo: "5 startup italiane che sono fallite: cosa possiamo imparare dai loro errori", categoria: "Trend", autoreSlug: "sara-fontana", data: "22 febbraio 2025", tempoLettura: 9, intro: "Il fallimento è parte del gioco. Ma analizzarlo senza tabù è ancora raro in Italia. Proviamo a farlo.", immagine: a16, tema: "le lezioni dei fallimenti" },
  { slug: "ecosistema-startup-milano-vs-roma", titolo: "Milano vs Roma: quale città offre più opportunità alle startup nel 2025?", categoria: "Trend", autoreSlug: "giulia-marchetti", data: "8 febbraio 2025", tempoLettura: 6, intro: "Incubatori, investitori, talenti, costo della vita. Un confronto dati alla mano tra i due principali hub italiani.", immagine: a17, tema: "il confronto Milano-Roma" },
  { slug: "caso-studio-musixmatch-crescita-globale", titolo: "Musixmatch: come una startup bolognese è diventata il database di testi musicali del mondo", categoria: "Casi Studio", autoreSlug: "sara-fontana", data: "25 marzo 2025", tempoLettura: 10, intro: "La storia di un'azienda che ha trovato una nicchia globale partendo da Bologna, senza quasi nessun investimento esterno.", immagine: a18, tema: "il modello Musixmatch" },
  { slug: "caso-studio-casavo-proptech", titolo: "Casavo e il proptech italiano: crescita veloce, mercato difficile e pivot strategico", categoria: "Casi Studio", autoreSlug: "marco-de-luca", data: "11 marzo 2025", tempoLettura: 8, intro: "L'instant buying nel mercato immobiliare italiano è davvero sostenibile? L'analisi del modello di business di Casavo tra luci e ombre.", immagine: a19, tema: "il caso Casavo" },
  { slug: "caso-studio-talent-garden-coworking", titolo: "Talent Garden: da Brescia al network europeo di coworking per innovatori", categoria: "Casi Studio", autoreSlug: "giulia-marchetti", data: "27 febbraio 2025", tempoLettura: 7, intro: "La storia di un'espansione ambiziosa, dei momenti di crisi durante il Covid e della ripartenza. Un caso studio di resilienza italiana.", immagine: a20, tema: "la storia di Talent Garden" },
];

const autoreNomi: Record<string, string> = {
  "giulia-marchetti": "Giulia Marchetti",
  "marco-de-luca": "Marco De Luca",
  "sara-fontana": "Sara Fontana",
};

export const articoli: Articolo[] = baseArticoli.map((a, i) => {
  const next = baseArticoli[(i + 1) % baseArticoli.length];
  return {
    ...a,
    autore: autoreNomi[a.autoreSlug],
    body: corpoGenerico(a.titolo, a.tema, { slug: next.slug, titolo: next.titolo }),
  };
});

export const categorie = ["Interviste", "Investimenti", "Guide", "Trend", "Casi Studio"];

export const slugCategoria = (c: string) =>
  c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

export const categoriaDaSlug = (s: string) =>
  categorie.find((c) => slugCategoria(c) === s);

export const colorePerCategoria = (c: string) => {
  switch (c) {
    case "Interviste": return "bg-cat-interviste text-white";
    case "Investimenti": return "bg-cat-investimenti text-white";
    case "Guide": return "bg-cat-guide text-white";
    case "Trend": return "bg-cat-trend text-white";
    case "Casi Studio": return "bg-cat-casi text-white";
    default: return "bg-foreground text-background";
  }
};
