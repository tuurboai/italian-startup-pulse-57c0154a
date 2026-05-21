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

import {
  type Locale,
  type CategoryKey,
  categoryLabel,
  categorySlug,
  t,
  lp,
} from "@/i18n";

export type Articolo = {
  slug: string;
  titolo: string;
  categoria: string; // localized label
  categoriaKey: CategoryKey;
  autoreSlug: string;
  autore: string;
  data: string;
  tempoLettura: number;
  intro: string;
  immagine: string;
  body: { tipo: "h2" | "p" | "quote" | "link"; testo: string; href?: string; label?: string }[];
};

// ---------------- Base articles (locale-neutral metadata) ----------------

type BaseArticolo = {
  slug: string;
  categoriaKey: CategoryKey;
  autoreSlug: string;
  // ISO date used for locale-aware formatting
  iso: string; // YYYY-MM-DD
  tempoLettura: number;
  immagine: string;
};

const baseArticoli: BaseArticolo[] = [
  { slug: "intervista-ceo-satispay-crescita-europea", categoriaKey: "interviews", autoreSlug: "giulia-marchetti", iso: "2025-03-20", tempoLettura: 8, immagine: a1 },
  { slug: "intervista-founder-bending-spoons", categoriaKey: "interviews", autoreSlug: "giulia-marchetti", iso: "2025-03-05", tempoLettura: 10, immagine: a2 },
  { slug: "intervista-founder-prima-assicurazioni", categoriaKey: "interviews", autoreSlug: "sara-fontana", iso: "2025-02-18", tempoLettura: 7, immagine: a3 },
  { slug: "intervista-ceo-scalapay", categoriaKey: "interviews", autoreSlug: "giulia-marchetti", iso: "2025-02-02", tempoLettura: 9, immagine: a4 },
  { slug: "round-investimento-startup-italiane-2024", categoriaKey: "investments", autoreSlug: "marco-de-luca", iso: "2025-03-15", tempoLettura: 6, immagine: a5 },
  { slug: "venture-capital-italia-2025-trend", categoriaKey: "investments", autoreSlug: "marco-de-luca", iso: "2025-03-01", tempoLettura: 7, immagine: a6 },
  { slug: "angel-investing-italia-guida", categoriaKey: "investments", autoreSlug: "marco-de-luca", iso: "2025-02-10", tempoLettura: 8, immagine: a7 },
  { slug: "equity-crowdfunding-startup-italiane", categoriaKey: "investments", autoreSlug: "marco-de-luca", iso: "2025-01-25", tempoLettura: 6, immagine: a8 },
  { slug: "come-scrivere-pitch-deck-investitori", categoriaKey: "guides", autoreSlug: "sara-fontana", iso: "2025-03-12", tempoLettura: 11, immagine: a9 },
  { slug: "come-trovare-co-founder-startup", categoriaKey: "guides", autoreSlug: "giulia-marchetti", iso: "2025-02-28", tempoLettura: 9, immagine: a10 },
  { slug: "contratto-founder-agreement-guida", categoriaKey: "guides", autoreSlug: "sara-fontana", iso: "2025-02-14", tempoLettura: 8, immagine: a11 },
  { slug: "product-market-fit-come-trovarlo", categoriaKey: "guides", autoreSlug: "marco-de-luca", iso: "2025-02-03", tempoLettura: 10, immagine: a12 },
  { slug: "hiring-primi-dipendenti-startup", categoriaKey: "guides", autoreSlug: "sara-fontana", iso: "2025-01-20", tempoLettura: 7, immagine: a13 },
  { slug: "ai-startup-italiane-panoramica-2025", categoriaKey: "trends", autoreSlug: "marco-de-luca", iso: "2025-03-18", tempoLettura: 8, immagine: a14 },
  { slug: "startup-italiane-b2b-saas-crescita", categoriaKey: "trends", autoreSlug: "giulia-marchetti", iso: "2025-03-07", tempoLettura: 7, immagine: a15 },
  { slug: "startup-fallite-italia-lezioni", categoriaKey: "trends", autoreSlug: "sara-fontana", iso: "2025-02-22", tempoLettura: 9, immagine: a16 },
  { slug: "ecosistema-startup-milano-vs-roma", categoriaKey: "trends", autoreSlug: "giulia-marchetti", iso: "2025-02-08", tempoLettura: 6, immagine: a17 },
  { slug: "caso-studio-musixmatch-crescita-globale", categoriaKey: "case-studies", autoreSlug: "sara-fontana", iso: "2025-03-25", tempoLettura: 10, immagine: a18 },
  { slug: "caso-studio-casavo-proptech", categoriaKey: "case-studies", autoreSlug: "marco-de-luca", iso: "2025-03-11", tempoLettura: 8, immagine: a19 },
  { slug: "caso-studio-talent-garden-coworking", categoriaKey: "case-studies", autoreSlug: "giulia-marchetti", iso: "2025-02-27", tempoLettura: 7, immagine: a20 },
];

// ---------------- Per-locale titles, intro and "tema" ----------------

type LocalizedMeta = { titolo: string; intro: string; tema: string };

const META: Record<Locale, Record<string, LocalizedMeta>> = {
  it: {
    "intervista-ceo-satispay-crescita-europea": { titolo: "Satispay, il CEO: 'L'Europa ci ha dato ragione, ora puntiamo ai 10 milioni di utenti'", intro: "Alberto Dalmasso racconta la storia di una delle startup fintech più rilevanti d'Italia, le sfide della crescita internazionale e il futuro dei pagamenti digitali.", tema: "la traiettoria di Satispay" },
    "intervista-founder-bending-spoons": { titolo: "Bending Spoons: come un team italiano ha conquistato l'App Store mondiale", intro: "La storia di un'azienda anomala: nessun VC, crescita organica, acquisizioni strategiche. Parliamo con uno dei co-fondatori.", tema: "il modello Bending Spoons" },
    "intervista-founder-prima-assicurazioni": { titolo: "Prima Assicurazioni: 'L'insurtech in Italia è ancora agli inizi, e noi vogliamo guidarla'", intro: "Georgios Zekos spiega come hanno costruito la prima assicurazione digitale italiana e perché il mercato tradizionale non è ancora pronto per la disruption.", tema: "il caso Prima Assicurazioni" },
    "intervista-ceo-scalapay": { titolo: "Scalapay dopo l'unicorno: 'Adesso dobbiamo dimostrare che la crescita è sostenibile'", intro: "Simone Mancini parla del buy now pay later, del momento difficile per i fintech europei e di come Scalapay stia ridefinendo la sua strategia.", tema: "la nuova fase di Scalapay" },
    "round-investimento-startup-italiane-2024": { titolo: "Startup italiane: i round di investimento più importanti del 2024", intro: "Un'analisi dei principali deal dell'anno: chi ha raccolto di più, in quali settori e con quali investitori.", tema: "il bilancio dei round 2024" },
    "venture-capital-italia-2025-trend": { titolo: "VC in Italia nel 2025: meno deal, ticket più alti e focus sulla profittabilità", intro: "Il mercato del venture capital italiano cambia pelle. I dati del primo trimestre 2025 raccontano una storia diversa rispetto al boom del 2021-2022.", tema: "la trasformazione del VC italiano" },
    "angel-investing-italia-guida": { titolo: "Angel investing in Italia: come funziona, chi sono gli investitori e come avvicinarsi", intro: "Una guida completa per founder che cercano i primi capitali e per chi vuole iniziare ad investire in startup early stage.", tema: "il mondo degli angel italiani" },
    "equity-crowdfunding-startup-italiane": { titolo: "Equity crowdfunding: opportunità reale o hype? I numeri italiani del 2024", intro: "Analisi delle principali piattaforme italiane di equity crowdfunding con dati su raccolta media, settori e tassi di successo.", tema: "il bilancio dell'equity crowdfunding" },
    "come-scrivere-pitch-deck-investitori": { titolo: "Come scrivere un pitch deck che convince gli investitori nel 2025", intro: "Struttura, contenuti, errori da evitare e i slide che nessuno ti dice di includere. Una guida pratica basata su decine di pitch analizzati.", tema: "il pitch deck efficace" },
    "come-trovare-co-founder-startup": { titolo: "Come trovare il co-founder giusto (e come capire quando non è quello giusto)", intro: "La scelta del co-founder è la decisione più importante che farai. Ecco come approcciare il processo con metodo.", tema: "la scelta del co-founder" },
    "contratto-founder-agreement-guida": { titolo: "Founder agreement: cos'è, perché firmarlo subito e cosa deve contenere", intro: "Molte startup saltano questo passaggio e lo pagano caro. Una guida completa per proteggere il tuo progetto fin dal giorno zero.", tema: "il founder agreement" },
    "product-market-fit-come-trovarlo": { titolo: "Product-market fit: come capire se lo hai raggiunto (e cosa fare se non ce l'hai)", intro: "Il concetto più citato e meno capito del mondo startup. Una guida pratica con framework, metriche e casi reali.", tema: "la ricerca del product-market fit" },
    "hiring-primi-dipendenti-startup": { titolo: "I primi 5 dipendenti di una startup: chi assumere e in che ordine", intro: "Le prime assunzioni definiscono la cultura aziendale per sempre. Ecco come non sbagliare le scelte più importanti.", tema: "le prime assunzioni" },
    "ai-startup-italiane-panoramica-2025": { titolo: "AI startup in Italia: chi sono, cosa fanno e chi le finanzia nel 2025", intro: "Una mappatura dell'ecosistema AI italiano: dai verticali più attivi agli investitori più presenti, fino ai gap ancora da colmare.", tema: "la mappa dell'AI italiana" },
    "startup-italiane-b2b-saas-crescita": { titolo: "Il B2B SaaS italiano cresce: i numeri e i protagonisti di un mercato in espansione", intro: "L'enterprise software italiano non fa più notizia solo quando viene acquisito. I dati mostrano una maturità nuova.", tema: "la crescita del B2B SaaS" },
    "startup-fallite-italia-lezioni": { titolo: "5 startup italiane che sono fallite: cosa possiamo imparare dai loro errori", intro: "Il fallimento è parte del gioco. Ma analizzarlo senza tabù è ancora raro in Italia. Proviamo a farlo.", tema: "le lezioni dei fallimenti" },
    "ecosistema-startup-milano-vs-roma": { titolo: "Milano vs Roma: quale città offre più opportunità alle startup nel 2025?", intro: "Incubatori, investitori, talenti, costo della vita. Un confronto dati alla mano tra i due principali hub italiani.", tema: "il confronto Milano-Roma" },
    "caso-studio-musixmatch-crescita-globale": { titolo: "Musixmatch: come una startup bolognese è diventata il database di testi musicali del mondo", intro: "La storia di un'azienda che ha trovato una nicchia globale partendo da Bologna, senza quasi nessun investimento esterno.", tema: "il modello Musixmatch" },
    "caso-studio-casavo-proptech": { titolo: "Casavo e il proptech italiano: crescita veloce, mercato difficile e pivot strategico", intro: "L'instant buying nel mercato immobiliare italiano è davvero sostenibile? L'analisi del modello di business di Casavo tra luci e ombre.", tema: "il caso Casavo" },
    "caso-studio-talent-garden-coworking": { titolo: "Talent Garden: da Brescia al network europeo di coworking per innovatori", intro: "La storia di un'espansione ambiziosa, dei momenti di crisi durante il Covid e della ripartenza. Un caso studio di resilienza italiana.", tema: "la storia di Talent Garden" },
  },
  en: {
    "intervista-ceo-satispay-crescita-europea": { titolo: "Satispay, the CEO: 'Europe proved us right, now we aim at 10 million users'", intro: "Alberto Dalmasso tells the story of one of Italy's most important fintech startups, the challenges of international growth and the future of digital payments.", tema: "the Satispay trajectory" },
    "intervista-founder-bending-spoons": { titolo: "Bending Spoons: how an Italian team conquered the global App Store", intro: "The story of an unusual company: no VCs, organic growth, strategic acquisitions. We talk with one of the co-founders.", tema: "the Bending Spoons model" },
    "intervista-founder-prima-assicurazioni": { titolo: "Prima Assicurazioni: 'Insurtech in Italy is still in its infancy, and we want to lead it'", intro: "Georgios Zekos explains how they built the first Italian digital insurance company and why the traditional market is not yet ready for disruption.", tema: "the Prima Assicurazioni case" },
    "intervista-ceo-scalapay": { titolo: "Scalapay after the unicorn: 'Now we have to prove that growth is sustainable'", intro: "Simone Mancini talks about buy now pay later, the difficult moment for European fintech and how Scalapay is redefining its strategy.", tema: "the new phase of Scalapay" },
    "round-investimento-startup-italiane-2024": { titolo: "Italian startups: the most important funding rounds of 2024", intro: "An analysis of the main deals of the year: who raised the most, in which sectors and from which investors.", tema: "the 2024 rounds recap" },
    "venture-capital-italia-2025-trend": { titolo: "VC in Italy in 2025: fewer deals, larger tickets and a focus on profitability", intro: "The Italian venture capital market is changing skin. The Q1 2025 data tells a different story compared to the 2021-2022 boom.", tema: "the transformation of Italian VC" },
    "angel-investing-italia-guida": { titolo: "Angel investing in Italy: how it works, who the investors are and how to get involved", intro: "A complete guide for founders looking for their first capital and for those who want to start investing in early-stage startups.", tema: "the world of Italian angels" },
    "equity-crowdfunding-startup-italiane": { titolo: "Equity crowdfunding: real opportunity or hype? The Italian numbers of 2024", intro: "An analysis of the main Italian equity crowdfunding platforms with data on average raises, sectors and success rates.", tema: "the equity crowdfunding recap" },
    "come-scrivere-pitch-deck-investitori": { titolo: "How to write a pitch deck that convinces investors in 2025", intro: "Structure, content, mistakes to avoid and the slides nobody tells you to include. A practical guide based on dozens of pitches analysed.", tema: "the effective pitch deck" },
    "come-trovare-co-founder-startup": { titolo: "How to find the right co-founder (and how to tell when it isn't the right one)", intro: "Choosing a co-founder is the most important decision you will make. Here is how to approach the process with method.", tema: "choosing a co-founder" },
    "contratto-founder-agreement-guida": { titolo: "Founder agreement: what it is, why to sign it immediately and what it should contain", intro: "Many startups skip this step and pay a high price for it. A complete guide to protect your project from day zero.", tema: "the founder agreement" },
    "product-market-fit-come-trovarlo": { titolo: "Product-market fit: how to tell if you have reached it (and what to do if you haven't)", intro: "The most cited and least understood concept in the startup world. A practical guide with frameworks, metrics and real cases.", tema: "the search for product-market fit" },
    "hiring-primi-dipendenti-startup": { titolo: "The first 5 employees of a startup: who to hire and in what order", intro: "The first hires shape company culture forever. Here is how not to get the most important choices wrong.", tema: "the first hires" },
    "ai-startup-italiane-panoramica-2025": { titolo: "AI startups in Italy: who they are, what they do and who funds them in 2025", intro: "A mapping of the Italian AI ecosystem: from the most active verticals to the most present investors, including the gaps still to fill.", tema: "the map of Italian AI" },
    "startup-italiane-b2b-saas-crescita": { titolo: "Italian B2B SaaS is growing: the numbers and players of an expanding market", intro: "Italian enterprise software no longer makes news only when it gets acquired. The data shows a new maturity.", tema: "the growth of B2B SaaS" },
    "startup-fallite-italia-lezioni": { titolo: "5 Italian startups that failed: what we can learn from their mistakes", intro: "Failure is part of the game. But analysing it without taboos is still rare in Italy. Let's try.", tema: "the lessons of failures" },
    "ecosistema-startup-milano-vs-roma": { titolo: "Milan vs Rome: which city offers more opportunities to startups in 2025?", intro: "Incubators, investors, talent, cost of living. A data-driven comparison between the two main Italian hubs.", tema: "the Milan-Rome comparison" },
    "caso-studio-musixmatch-crescita-globale": { titolo: "Musixmatch: how a Bologna startup became the world's music lyrics database", intro: "The story of a company that found a global niche starting from Bologna, with almost no external investment.", tema: "the Musixmatch model" },
    "caso-studio-casavo-proptech": { titolo: "Casavo and Italian proptech: fast growth, hard market and strategic pivot", intro: "Is instant buying in the Italian real estate market really sustainable? An analysis of Casavo's business model between lights and shadows.", tema: "the Casavo case" },
    "caso-studio-talent-garden-coworking": { titolo: "Talent Garden: from Brescia to the European coworking network for innovators", intro: "The story of an ambitious expansion, the crisis moments during Covid and the restart. A case study of Italian resilience.", tema: "the Talent Garden story" },
  },
  de: {
    "intervista-ceo-satispay-crescita-europea": { titolo: "Satispay, der CEO: 'Europa hat uns Recht gegeben, jetzt zielen wir auf 10 Millionen Nutzer'", intro: "Alberto Dalmasso erzählt die Geschichte eines der wichtigsten italienischen Fintech-Startups, die Herausforderungen des internationalen Wachstums und die Zukunft digitaler Zahlungen.", tema: "die Entwicklung von Satispay" },
    "intervista-founder-bending-spoons": { titolo: "Bending Spoons: Wie ein italienisches Team den weltweiten App Store eroberte", intro: "Die Geschichte eines ungewöhnlichen Unternehmens: keine VCs, organisches Wachstum, strategische Übernahmen. Wir sprechen mit einem der Mitgründer.", tema: "das Modell Bending Spoons" },
    "intervista-founder-prima-assicurazioni": { titolo: "Prima Assicurazioni: 'Insurtech in Italien steckt noch in den Kinderschuhen — und wir wollen es anführen'", intro: "Georgios Zekos erklärt, wie sie die erste italienische Digitalversicherung aufgebaut haben und warum der traditionelle Markt noch nicht bereit für die Disruption ist.", tema: "der Fall Prima Assicurazioni" },
    "intervista-ceo-scalapay": { titolo: "Scalapay nach dem Unicorn: 'Jetzt müssen wir beweisen, dass das Wachstum nachhaltig ist'", intro: "Simone Mancini spricht über Buy Now Pay Later, den schwierigen Moment für europäische Fintechs und wie Scalapay seine Strategie neu definiert.", tema: "die neue Phase von Scalapay" },
    "round-investimento-startup-italiane-2024": { titolo: "Italienische Startups: Die wichtigsten Finanzierungsrunden 2024", intro: "Eine Analyse der wichtigsten Deals des Jahres: Wer hat am meisten gesammelt, in welchen Sektoren und von welchen Investoren.", tema: "die Bilanz der Runden 2024" },
    "venture-capital-italia-2025-trend": { titolo: "VC in Italien 2025: weniger Deals, größere Tickets und Fokus auf Profitabilität", intro: "Der italienische Venture-Capital-Markt verändert sich. Die Daten des ersten Quartals 2025 erzählen eine andere Geschichte als der Boom 2021-2022.", tema: "die Transformation des italienischen VC" },
    "angel-investing-italia-guida": { titolo: "Angel Investing in Italien: Wie es funktioniert, wer die Investoren sind und wie man einsteigt", intro: "Ein vollständiger Leitfaden für Gründer, die ihr erstes Kapital suchen, und für alle, die in Early-Stage-Startups investieren wollen.", tema: "die Welt der italienischen Angels" },
    "equity-crowdfunding-startup-italiane": { titolo: "Equity Crowdfunding: echte Chance oder Hype? Die italienischen Zahlen 2024", intro: "Eine Analyse der wichtigsten italienischen Equity-Crowdfunding-Plattformen mit Daten zu Durchschnittsraises, Sektoren und Erfolgsquoten.", tema: "die Bilanz des Equity Crowdfunding" },
    "come-scrivere-pitch-deck-investitori": { titolo: "Wie man 2025 ein Pitch Deck schreibt, das Investoren überzeugt", intro: "Struktur, Inhalt, zu vermeidende Fehler und die Folien, von denen dir niemand sagt, dass du sie einbauen sollst. Ein praktischer Leitfaden, basierend auf Dutzenden analysierter Pitches.", tema: "das wirksame Pitch Deck" },
    "come-trovare-co-founder-startup": { titolo: "Wie man den richtigen Co-Founder findet (und erkennt, wenn er nicht der richtige ist)", intro: "Die Wahl des Co-Founders ist die wichtigste Entscheidung, die du treffen wirst. So gehst du den Prozess methodisch an.", tema: "die Wahl des Co-Founders" },
    "contratto-founder-agreement-guida": { titolo: "Founder Agreement: Was es ist, warum man es sofort unterschreiben sollte und was es enthalten muss", intro: "Viele Startups überspringen diesen Schritt und zahlen einen hohen Preis dafür. Ein vollständiger Leitfaden, um dein Projekt vom ersten Tag an zu schützen.", tema: "das Founder Agreement" },
    "product-market-fit-come-trovarlo": { titolo: "Product-Market Fit: Wie du erkennst, ob du ihn erreicht hast (und was zu tun ist, wenn nicht)", intro: "Das am häufigsten zitierte und am wenigsten verstandene Konzept der Startup-Welt. Ein praktischer Leitfaden mit Frameworks, Kennzahlen und realen Fällen.", tema: "die Suche nach Product-Market Fit" },
    "hiring-primi-dipendenti-startup": { titolo: "Die ersten 5 Mitarbeiter eines Startups: Wen man wann einstellt", intro: "Die ersten Einstellungen prägen die Unternehmenskultur für immer. So triffst du die wichtigsten Entscheidungen richtig.", tema: "die ersten Einstellungen" },
    "ai-startup-italiane-panoramica-2025": { titolo: "KI-Startups in Italien: Wer sie sind, was sie tun und wer sie 2025 finanziert", intro: "Eine Übersicht des italienischen KI-Ökosystems: von den aktivsten Verticals bis zu den präsentesten Investoren und den noch zu schließenden Lücken.", tema: "die Karte der italienischen KI" },
    "startup-italiane-b2b-saas-crescita": { titolo: "Italienisches B2B SaaS wächst: Zahlen und Protagonisten eines expandierenden Marktes", intro: "Italienische Enterprise-Software ist nicht mehr nur dann eine Nachricht, wenn sie übernommen wird. Die Daten zeigen eine neue Reife.", tema: "das Wachstum von B2B SaaS" },
    "startup-fallite-italia-lezioni": { titolo: "5 gescheiterte italienische Startups: Was wir aus ihren Fehlern lernen können", intro: "Scheitern gehört zum Spiel. Aber es ohne Tabus zu analysieren ist in Italien noch selten. Versuchen wir es.", tema: "die Lehren aus dem Scheitern" },
    "ecosistema-startup-milano-vs-roma": { titolo: "Mailand vs. Rom: Welche Stadt bietet Startups 2025 mehr Chancen?", intro: "Inkubatoren, Investoren, Talente, Lebenshaltungskosten. Ein datenbasierter Vergleich zwischen den beiden wichtigsten italienischen Hubs.", tema: "der Vergleich Mailand-Rom" },
    "caso-studio-musixmatch-crescita-globale": { titolo: "Musixmatch: Wie ein Startup aus Bologna zur weltweiten Datenbank für Songtexte wurde", intro: "Die Geschichte eines Unternehmens, das aus Bologna eine globale Nische gefunden hat, fast ohne externe Investitionen.", tema: "das Modell Musixmatch" },
    "caso-studio-casavo-proptech": { titolo: "Casavo und das italienische Proptech: schnelles Wachstum, schwieriger Markt und strategischer Pivot", intro: "Ist Instant Buying im italienischen Immobilienmarkt wirklich nachhaltig? Eine Analyse des Geschäftsmodells von Casavo zwischen Licht und Schatten.", tema: "der Fall Casavo" },
    "caso-studio-talent-garden-coworking": { titolo: "Talent Garden: von Brescia zum europäischen Coworking-Netzwerk für Innovatoren", intro: "Die Geschichte einer ehrgeizigen Expansion, der Krisenmomente während Covid und des Neustarts. Eine Fallstudie italienischer Resilienz.", tema: "die Geschichte von Talent Garden" },
  },
};

// ---------------- Body template per locale ----------------

type Block = Articolo["body"][number];

const corpoGenerico = (
  locale: Locale,
  titolo: string,
  tema: string,
  related: { slug: string; titolo: string }
): Block[] => {
  const relHref = lp(`/articolo/${related.slug}`, locale);

  if (locale === "en") {
    return [
      { tipo: "p", testo: `The case of ${titolo} comes at a particular moment for the Italian startup ecosystem. After the boom years of 2020-2022, when liquidity seemed infinite and valuations grew at double digits every quarter, the market is going through a necessary normalisation phase. The founders we talk to every week describe a more sober reality, where unit economics are once again central, runways are measured in months not years, and hires are postponed or revised downwards. It is in this context that ${tema} takes on a meaning that goes beyond a single story.` },
      { tipo: "h2", testo: "The context: what is changing in the Italian market" },
      { tipo: "p", testo: "The Venture Capital Monitor data published in recent months describes an Italy that is growing in a more mature way. The total number of deals is slightly down, but the average value per deal is up. International investors continue to look at our country with interest, especially in specific verticals such as fintech, insurtech, deep tech and agrifood. At the same time, the average time to close a round has lengthened, and due diligences have become deeper. Founders raising capital today must be able to tell not only a vision, but also a credible path to profitability." },
      { tipo: "p", testo: "This new phase is not necessarily bad. Many operators we spoke to actually consider it healthy. During the boom years, says a partner at a leading Italian fund who prefers to remain anonymous, projects were funded that would hardly have survived a stricter filter. Today the market is recalibrating expectations, and this should lead in the medium term to a more solid ecosystem, with companies able to grow without burning cash unsustainably." },
      { tipo: "h2", testo: "The numbers that matter" },
      { tipo: "p", testo: "When talking about Italian startups it is easy to get lost in meaningless metrics. The number of employees, the valuation, the total raised are often overrated indicators. What really matters, especially in this phase of the cycle, is the ratio between recurring revenue and operating costs, the actual runway length, the organic growth rate net of paid marketing effects. These are numbers that rarely make it into press releases, but that the most careful investors ask for first." },
      { tipo: "quote", testo: "The companies growing sustainably today are the ones that have found a balance between market ambition and financial discipline. It is a difficult balance, and you pay quickly when it breaks." },
      { tipo: "p", testo: "Another often underestimated element is the quality of the board. The successful Italian startups we have followed in recent years almost always have a balanced board, with at least one experienced investor, an industry advisor and an independent capable of bringing an external perspective. When the board works, difficult decisions — a pivot, a restructuring, a down round — are taken earlier and executed better. When the board does not work, even the most promising companies risk wasting their chances." },
      { tipo: "h2", testo: "What the players say" },
      { tipo: "p", testo: "We collected the opinions of about ten ecosystem operators, including founders, fund partners, advisors and accelerator managers, to understand how they are reading the moment. The answers were surprisingly convergent on some points, and divergent on others. Everyone recognises that we are in a transition phase and that some of the business models that grew in recent years need to be rethought. More divided is the judgement on the role of the public sector: some think CDP Venture Capital is playing its anchor function well, while others believe too many public resources are arriving in a poorly selective way." },
      { tipo: "p", testo: "On the talent topic, there is broad convergence. Finding senior profiles with international experience remains the main challenge for Italian startups, especially in product, engineering and go-to-market roles. The brain return, often invoked, is happening but still insufficient compared to the system's real needs. Salaries have grown, but a structural gap remains compared to more mature European centres like London, Berlin and Paris." },
      { tipo: "h2", testo: "The scenario for the coming months" },
      { tipo: "p", testo: "Looking ahead, it is reasonable to expect a stabilisation of the market around current levels, with possible positive surprises in some specific verticals. Generative artificial intelligence will continue to attract significant capital, although the selection between serious projects and opportunistic positioning will become stricter. Fintech, after the difficult years 2022-2023, is showing signs of recovery, especially in the enterprise. Italian insurtech remains an underdeveloped market compared to its potential, and could see interesting movements." },
      { tipo: "p", testo: "On the exit front, attention remains focused on possible IPOs of some mature scaleups and on M&A movements that could involve Italian players as acquirers or targets. For founders at the start of the journey, the main message that emerges from our conversations is one: building solid, focused companies, able to demonstrate real value to customers, is today more important than chasing record valuations. A lesson that, after all, applies to every season of the market." },
      { tipo: "h2", testo: "Further reading" },
      { tipo: "p", testo: "For those who want to continue reading on the topics covered in this article, we point out a related deep dive that broadens many of the points introduced here, with updated data and new interviews from the field." },
      { tipo: "link", testo: "Read also: ", href: relHref, label: related.titolo },
      { tipo: "p", testo: "We will continue to follow the evolution of this topic in the coming months, with interviews, quantitative analyses and case studies. If you are a founder, an investor or an ecosystem operator and you want to tell us your perspective, write to the newsroom: we read every message." },
    ];
  }

  if (locale === "de") {
    return [
      { tipo: "p", testo: `Der Fall ${titolo} kommt zu einem besonderen Zeitpunkt für das italienische Startup-Ökosystem. Nach den Boom-Jahren 2020-2022, in denen die Liquidität unendlich schien und die Bewertungen jedes Quartal zweistellig wuchsen, durchläuft der Markt eine notwendige Phase der Normalisierung. Die Gründer, mit denen wir jede Woche sprechen, beschreiben eine nüchternere Realität, in der Unit Economics wieder im Mittelpunkt stehen, Runways in Monaten und nicht in Jahren gemessen werden und Einstellungen verschoben oder nach unten korrigiert werden. In diesem Kontext gewinnt ${tema} eine Bedeutung, die über die einzelne Geschichte hinausgeht.` },
      { tipo: "h2", testo: "Der Kontext: Was sich auf dem italienischen Markt verändert" },
      { tipo: "p", testo: "Die in den letzten Monaten veröffentlichten Daten des Venture Capital Monitor zeichnen das Bild eines Italiens, das reifer wächst. Die Gesamtzahl der Transaktionen ist leicht gesunken, aber der Durchschnittswert pro Deal ist gestiegen. Internationale Investoren schauen weiterhin mit Interesse auf unser Land, vor allem in spezifischen Verticals wie Fintech, Insurtech, Deep Tech und Agrifood. Gleichzeitig hat sich die durchschnittliche Zeit zum Abschluss einer Runde verlängert, und die Due Diligences sind gründlicher geworden. Gründer, die heute Kapital aufnehmen, müssen nicht nur eine Vision erzählen können, sondern auch einen glaubwürdigen Weg zur Profitabilität." },
      { tipo: "p", testo: "Diese neue Phase ist nicht unbedingt schlecht. Viele Akteure, mit denen wir gesprochen haben, halten sie sogar für gesund. In den Boom-Jahren, sagt ein Partner eines führenden italienischen Fonds, der anonym bleiben möchte, wurden Projekte finanziert, die einen strengeren Filter kaum überstanden hätten. Heute kalibriert der Markt die Erwartungen neu, und das sollte mittelfristig zu einem solideren Ökosystem führen, mit Unternehmen, die wachsen können, ohne unhaltbar Cash zu verbrennen." },
      { tipo: "h2", testo: "Die Zahlen, die zählen" },
      { tipo: "p", testo: "Wenn man über italienische Startups spricht, verliert man sich leicht in wenig aussagekräftigen Kennzahlen. Die Anzahl der Mitarbeiter, die Bewertung, der gesamte Raise sind oft überschätzte Indikatoren. Was wirklich zählt, vor allem in dieser Phase des Zyklus, ist das Verhältnis zwischen wiederkehrenden Erlösen und Betriebskosten, die tatsächliche Runway-Länge, die organische Wachstumsrate ohne den Effekt bezahlten Marketings. Das sind Zahlen, die selten in Pressemitteilungen landen, aber die aufmerksamen Investoren als Erstes erfragen." },
      { tipo: "quote", testo: "Die Unternehmen, die heute nachhaltig wachsen, sind diejenigen, die ein Gleichgewicht zwischen Marktambition und finanzieller Disziplin gefunden haben. Es ist ein schwieriges Gleichgewicht, und man zahlt schnell, wenn es kippt." },
      { tipo: "p", testo: "Ein weiteres oft unterschätztes Element ist die Qualität des Boards. Die erfolgreichen italienischen Startups, die wir in den letzten Jahren verfolgt haben, haben fast immer ein ausgewogenes Board, mit mindestens einem erfahrenen Investor, einem Branchen-Advisor und einem unabhängigen Mitglied, das eine externe Perspektive einbringen kann. Wenn das Board funktioniert, werden schwierige Entscheidungen — ein Pivot, eine Umstrukturierung, eine Down Round — früher getroffen und besser umgesetzt. Wenn das Board nicht funktioniert, riskieren selbst die vielversprechendsten Unternehmen, ihre Chancen zu verspielen." },
      { tipo: "h2", testo: "Was die Akteure sagen" },
      { tipo: "p", testo: "Wir haben die Meinungen von rund zehn Akteuren des Ökosystems gesammelt — Gründer, Fondspartner, Advisor und Acceleratoren-Verantwortliche —, um zu verstehen, wie sie den Moment lesen. Die Antworten waren in einigen Punkten überraschend übereinstimmend und in anderen unterschiedlich. Alle erkennen an, dass wir uns in einer Übergangsphase befinden und dass einige der Geschäftsmodelle, die in den letzten Jahren gewachsen sind, überdacht werden müssen. Geteilter ist das Urteil über die Rolle des öffentlichen Sektors: Einige meinen, CDP Venture Capital erfülle seine Ankerfunktion gut, andere finden, zu viele öffentliche Mittel kämen wenig selektiv an." },
      { tipo: "p", testo: "Beim Thema Talent gibt es hingegen breite Übereinstimmung. Senior-Profile mit internationaler Erfahrung zu finden bleibt die größte Herausforderung für italienische Startups, vor allem in den Bereichen Produkt, Engineering und Go-to-Market. Die Rückkehr der Köpfe, oft beschworen, findet statt, aber noch nicht ausreichend für den realen Bedarf des Systems. Die Gehälter sind gestiegen, aber es bleibt eine strukturelle Lücke im Vergleich zu reiferen europäischen Zentren wie London, Berlin und Paris." },
      { tipo: "h2", testo: "Das Szenario für die kommenden Monate" },
      { tipo: "p", testo: "Mit Blick nach vorn ist mit einer Stabilisierung des Marktes auf dem aktuellen Niveau zu rechnen, mit möglichen positiven Überraschungen in einigen spezifischen Verticals. Generative künstliche Intelligenz wird weiterhin erhebliches Kapital anziehen, auch wenn die Selektion zwischen seriösen Projekten und opportunistischen Positionierungen strenger wird. Fintech zeigt nach den schwierigen Jahren 2022-2023 Anzeichen einer Erholung, vor allem im Enterprise-Bereich. Italienisches Insurtech bleibt ein im Vergleich zum Potenzial unterentwickelter Markt und könnte interessante Bewegungen erleben." },
      { tipo: "p", testo: "An der Exit-Front bleibt die Aufmerksamkeit auf mögliche Börsengänge einiger reifer Scaleups und auf M&A-Bewegungen gerichtet, die italienische Player als Käufer oder Targets betreffen könnten. Für Gründer am Anfang ihres Weges lautet die wichtigste Botschaft aus unseren Gesprächen: solide, fokussierte Unternehmen zu bauen, die ihren Kunden echten Wert bieten, ist heute wichtiger als Rekordbewertungen zu jagen. Eine Lehre, die im Grunde für jede Marktsaison gilt." },
      { tipo: "h2", testo: "Zum Weiterlesen" },
      { tipo: "p", testo: "Für alle, die die in diesem Artikel behandelten Themen vertiefen möchten, weisen wir auf einen verwandten Beitrag hin, der viele der hier eingeführten Punkte mit aktualisierten Daten und neuen Interviews aus dem Feld erweitert." },
      { tipo: "link", testo: "Lies auch: ", href: relHref, label: related.titolo },
      { tipo: "p", testo: "Wir werden die Entwicklung dieses Themas in den kommenden Monaten mit Interviews, quantitativen Analysen und Fallstudien weiterverfolgen. Wenn du Gründer, Investor oder Akteur des Ökosystems bist und uns deine Perspektive erzählen möchtest, schreib der Redaktion: Wir lesen jede Nachricht." },
    ];
  }

  // it
  return [
    { tipo: "p", testo: `Il caso di ${titolo} arriva in un momento particolare per l'ecosistema startup italiano. Dopo gli anni del boom 2020-2022, in cui la liquidità sembrava infinita e le valutazioni crescevano a doppia cifra ogni trimestre, il mercato sta attraversando una fase di necessaria normalizzazione. I founder con cui parliamo ogni settimana raccontano una realtà più sobria, fatta di unit economics che tornano centrali, di runway misurati in mesi e non in anni, di assunzioni rinviate o riviste al ribasso. È in questo contesto che ${tema} acquista un significato che va oltre la singola storia.` },
    { tipo: "h2", testo: "Il contesto: cosa sta cambiando nel mercato italiano" },
    { tipo: "p", testo: "I dati del Venture Capital Monitor pubblicati negli ultimi mesi raccontano un'Italia che sta crescendo in modo più maturo. Il numero totale di operazioni è leggermente calato, ma il valore medio per deal è aumentato. Gli investitori internazionali continuano a guardare al nostro Paese con interesse, soprattutto su verticali specifici come il fintech, l'insurtech, il deep tech e l'agrifood. Allo stesso tempo, però, il tempo medio per chiudere un round si è allungato, e le due diligence sono diventate più approfondite. I founder che oggi raccolgono capitali devono saper raccontare non solo una visione, ma anche un percorso credibile verso la profittabilità." },
    { tipo: "p", testo: "Questa nuova fase non è necessariamente un male. Molti operatori con cui abbiamo parlato la considerano anzi salutare. Negli anni del boom, racconta un partner di un fondo italiano di primo piano che preferisce restare anonimo, si sono finanziati progetti che difficilmente avrebbero superato un filtro più rigoroso. Oggi il mercato sta ricalibrando le aspettative, e questo dovrebbe portare nel medio periodo a un ecosistema più solido, con aziende capaci di crescere senza bruciare cassa in modo insostenibile." },
    { tipo: "h2", testo: "I numeri che contano" },
    { tipo: "p", testo: "Quando si parla di startup italiane è facile perdersi tra metriche poco significative. Il numero di dipendenti, la valutazione, il totale raccolto sono indicatori spesso sopravvalutati. Quello che davvero conta, soprattutto in questa fase del ciclo, è il rapporto tra revenue ricorrenti e costi operativi, la durata effettiva del runway, il tasso di crescita organico al netto degli effetti di marketing pagato. Sono numeri che raramente finiscono nei comunicati stampa, ma che gli investitori più attenti chiedono come prima cosa." },
    { tipo: "quote", testo: "Le aziende che crescono sostenibilmente oggi sono quelle che hanno trovato un equilibrio tra ambizione di mercato e disciplina finanziaria. È un equilibrio difficile, e si paga in fretta quando salta." },
    { tipo: "p", testo: "Un altro elemento spesso sottovalutato è la qualità del board. Le startup italiane di successo che abbiamo seguito negli ultimi anni hanno quasi sempre un board composto, con almeno un investitore di esperienza, un advisor di settore e un independent in grado di portare una prospettiva esterna. Quando il board funziona, le decisioni difficili — un pivot, una ristrutturazione, una down round — si prendono prima e si eseguono meglio. Quando il board non funziona, anche le aziende più promettenti rischiano di consumare le proprie chance." },
    { tipo: "h2", testo: "Cosa dicono i protagonisti" },
    { tipo: "p", testo: "Abbiamo raccolto le opinioni di una decina di operatori dell'ecosistema, tra founder, partner di fondi, advisor e responsabili di acceleratori, per capire come stanno leggendo il momento. Le risposte sono state sorprendentemente convergenti su alcuni punti, e divergenti su altri. Tutti riconoscono che siamo in una fase di transizione e che alcuni dei modelli di business cresciuti negli anni scorsi vanno ripensati. Più diviso il giudizio sul ruolo del pubblico: c'è chi pensa che CDP Venture Capital stia svolgendo bene la sua funzione di àncora del sistema, e chi invece ritiene che troppe risorse pubbliche stiano arrivando in modo poco selettivo." },
    { tipo: "p", testo: "Sul tema del talento, invece, c'è larghissima convergenza. Trovare profili senior con esperienza internazionale rimane la sfida principale per le startup italiane, soprattutto nelle funzioni di prodotto, ingegneria e go-to-market. Il rientro dei cervelli, tema spesso evocato, sta avvenendo ma in misura ancora insufficiente rispetto al fabbisogno reale del sistema. Le retribuzioni sono cresciute, ma rimane un gap strutturale rispetto ai centri europei più maturi come Londra, Berlino e Parigi." },
    { tipo: "h2", testo: "Lo scenario per i prossimi mesi" },
    { tipo: "p", testo: "Guardando avanti, è ragionevole attendersi una stabilizzazione del mercato attorno ai livelli attuali, con possibili sorprese positive in alcuni verticali specifici. L'intelligenza artificiale generativa continuerà ad attrarre capitali significativi, anche se la selezione tra progetti seri e operazioni di posizionamento opportunistico si farà più rigorosa. Il fintech, dopo gli anni difficili del 2022-2023, mostra segnali di ripresa, soprattutto nell'enterprise. L'insurtech italiano resta un mercato sottosviluppato rispetto al potenziale, e potrebbe vedere movimenti interessanti." },
    { tipo: "p", testo: "Sul fronte degli exit, l'attenzione resta concentrata sulle possibili IPO di alcune scaleup mature e sui movimenti di M&A che potrebbero coinvolgere player italiani come acquirer o come target. Per i founder all'inizio del percorso, il messaggio principale che emerge dalle nostre conversazioni è uno: costruire aziende solide, focalizzate, capaci di dimostrare valore reale ai clienti, è oggi più importante che inseguire valutazioni record. Una lezione che, in fondo, vale per ogni stagione del mercato." },
    { tipo: "h2", testo: "Per approfondire" },
    { tipo: "p", testo: "Per chi volesse continuare la lettura sui temi affrontati in questo articolo, segnaliamo un nostro approfondimento collegato che amplia molti degli spunti qui introdotti, con dati aggiornati e nuove interviste sul campo." },
    { tipo: "link", testo: "Leggi anche: ", href: relHref, label: related.titolo },
    { tipo: "p", testo: "Continueremo a seguire l'evoluzione di questo tema nei prossimi mesi, con interviste, analisi quantitative e casi studio. Se sei un founder, un investitore o un operatore dell'ecosistema e vuoi raccontarci la tua prospettiva, scrivici alla redazione: leggiamo ogni messaggio." },
  ];
};

// ---------------- Date formatting ----------------

const MESI = {
  it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
};

function formatData(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split("-").map((s) => parseInt(s, 10));
  const month = MESI[locale][m - 1];
  if (locale === "en") return `${month} ${d}, ${y}`;
  if (locale === "de") return `${d}. ${month} ${y}`;
  return `${d} ${month} ${y}`;
}

// ---------------- Author names mapping ----------------

const autoreNomi: Record<string, string> = {
  "giulia-marchetti": "Giulia Marchetti",
  "marco-de-luca": "Marco De Luca",
  "sara-fontana": "Sara Fontana",
};

// ---------------- Public API ----------------

export function getArticoli(locale: Locale): Articolo[] {
  return baseArticoli.map((b, i) => {
    const next = baseArticoli[(i + 1) % baseArticoli.length];
    const meta = META[locale][b.slug];
    const nextMeta = META[locale][next.slug];
    return {
      slug: b.slug,
      titolo: meta.titolo,
      categoria: categoryLabel(b.categoriaKey, locale),
      categoriaKey: b.categoriaKey,
      autoreSlug: b.autoreSlug,
      autore: autoreNomi[b.autoreSlug],
      data: formatData(b.iso, locale),
      tempoLettura: b.tempoLettura,
      intro: meta.intro,
      immagine: b.immagine,
      body: corpoGenerico(locale, meta.titolo, meta.tema, { slug: next.slug, titolo: nextMeta.titolo }),
    };
  });
}

export function getCategorie(locale: Locale): { key: CategoryKey; label: string }[] {
  return (Object.keys(t[locale].categoryLabels) as CategoryKey[]).map((k) => ({
    key: k,
    label: categoryLabel(k, locale),
  }));
}

export const colorePerCategoriaKey = (key: CategoryKey) => {
  switch (key) {
    case "interviews": return "bg-cat-interviste text-white";
    case "investments": return "bg-cat-investimenti text-white";
    case "guides": return "bg-cat-guide text-white";
    case "trends": return "bg-cat-trend text-white";
    case "case-studies": return "bg-cat-casi text-white";
  }
};

// Slug list (slugs are locale-neutral — same Italian slugs in all languages)
export const articoloSlugs: string[] = baseArticoli.map((a) => a.slug);

export { categorySlug, categoryFromSlug } from "@/i18n";
