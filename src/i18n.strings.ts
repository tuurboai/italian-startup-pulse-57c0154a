import type { Locale, CategoryKey } from "./i18n";

type Dict = any;

const it: Dict = {
  htmlLang: "it",
  brand: { tagline: "Magazine indipendente sulle startup italiane" },
  nav: {
    articles: "Articoli",
    interviews: "Interviste",
    investments: "Investimenti",
    guides: "Guide",
    authors: "Autori",
    about: "Chi siamo",
    searchPlaceholder: "Cerca un articolo…",
    subscribe: "Iscriviti",
  },
  footer: {
    description:
      "Founders.it è il magazine indipendente sull'ecosistema startup italiano. Storie, dati e analisi sulle aziende che stanno costruendo l'Italia di domani.",
    sectionsTitle: "Sezioni",
    allArticles: "Tutti gli articoli",
    magazineTitle: "Magazine",
    about: "Chi siamo",
    authors: "Autori",
    newsletter: "Newsletter",
    contact: "Contatti",
    privacy: "Privacy",
    cookie: "Cookie",
    interviews: "Interviste",
    investments: "Investimenti",
    guides: "Guide",
    trends: "Trend",
    caseStudies: "Casi Studio",
    legalLine: "Founders Media S.r.l. — Via Tortona 27, 20144 Milano — P.IVA 11894720966",
  },
  newsletterBanner: {
    eyebrow: "Newsletter",
    title: "Le storie delle startup italiane, ogni domenica nella tua inbox.",
    body: "12.400 founder, investitori e operatori dell'ecosistema leggono la nostra newsletter. Senza spam, senza sponsorizzazioni nascoste. Solo i fatti che contano.",
    emailPlaceholder: "La tua email",
    cta: "Iscriviti",
  },
  home: {
    docTitle: "Founders.it — Storie e numeri delle startup italiane",
    eyebrow: "Magazine indipendente · dal 2021",
    title: "Storie e numeri delle startup italiane.",
    intro:
      "Founders.it racconta l'ecosistema dell'innovazione italiana attraverso interviste ai founder, analisi dei round di investimento, guide pratiche per chi costruisce impresa e casi studio sulle aziende che stanno cambiando il modo in cui lavoriamo, paghiamo, viaggiamo, abitiamo. Lavoriamo da Milano con lo sguardo rivolto a tutto il Paese, a Bologna come a Bari, a Torino come a Catania. Ogni settimana pubblichiamo nuovi contenuti, frutto di reporting sul campo e conversazioni dirette con chi quel mercato lo costruisce ogni giorno. Crediamo che parlare di startup significhi prima di tutto parlare di persone, scelte e rischi reali, non solo di valutazioni e comunicati stampa.",
    latestEyebrow: "Ultime pubblicazioni",
    latestTitle: "Cosa leggere questa settimana",
    allArticles: "Tutti gli articoli →",
    whyReadEyebrow: "Perché leggerci",
    whyReadTitle: "Tre principi che guidano la nostra redazione.",
    whyReadBody:
      "Founders.it è un progetto editoriale indipendente. Non riceviamo soldi dalle aziende di cui scriviamo, non vendiamo articoli sponsorizzati e non lavoriamo come ufficio stampa per nessuno. Quello che ci tiene in piedi è il rapporto di fiducia con i nostri lettori e il sostegno della nostra community di abbonati.",
    pillar1Title: "Indipendenza editoriale",
    pillar1Body:
      "Non pubblichiamo contenuti sponsorizzati travestiti da articoli e non scriviamo su aziende solo perché ci vengono raccomandate. Le nostre scelte editoriali sono nostre.",
    pillar2Title: "Reporting sul campo",
    pillar2Body:
      "Ogni inchiesta nasce da incontri di persona, telefonate, dati verificati. Niente riassunti di comunicati stampa: solo storie raccontate dopo averle viste con i nostri occhi.",
    pillar3Title: "Numeri verificati",
    pillar3Body:
      "Quando citiamo un round, una valuation o una metrica, indichiamo sempre la fonte e il contesto. Crediamo che senza dati seri non si possa fare giornalismo serio.",
    exploreTitle: "Esplora per categoria",
    exploreBody: "Cinque sezioni, cinque modi diversi di raccontare l'innovazione italiana.",
    seeAll: "Vedi tutti →",
  },
  article: {
    minRead: "min di lettura",
    writtenBy: "Scritto da",
    aboutAuthor: "Sull'autore",
    categories: "Categorie",
    popular: "Articoli popolari",
    related: "Articoli correlati",
  },
  articlesPage: {
    docTitle: "Tutti gli articoli",
    eyebrow: "Archivio",
    title: "Tutti gli articoli",
    body1:
      "Da quando abbiamo lanciato Founders.it nel 2021, abbiamo pubblicato oltre duecento storie dedicate all'ecosistema startup italiano. Interviste ai founder che stanno costruendo le aziende del futuro, analisi rigorose dei round di investimento, guide pratiche pensate per chi vuole avviare un progetto di impresa, casi studio approfonditi su scaleup italiane di riferimento. Ogni articolo nasce da un lavoro di reporting sul campo: incontri di persona, telefonate con investitori e operatori, dati verificati con le fonti dirette.",
    body2:
      "In questa pagina trovi l'archivio completo, ordinato per data di pubblicazione. Puoi filtrare per categoria usando i tag qui sotto, oppure esplorare tematicamente le nostre rubriche. Buona lettura.",
    filter: "Filtra:",
    all: "Tutte",
  },
  category: { eyebrow: "Categoria" },
  authorsPage: {
    eyebrow: "La redazione",
    title: "Le persone che scrivono Founders.it",
    body:
      "Una redazione piccola ma specializzata. Ogni autore ha una storia professionale alle spalle nel mondo del giornalismo economico, della finanza o dell'innovazione. Conosci chi firma gli articoli che leggi ogni settimana.",
    articlesCount: (n: number) => `${n} articoli pubblicati`,
  },
  authorPage: {
    eyebrow: "Autore",
    articlesPublished: (n: number) => `${n} articoli pubblicati`,
    articlesBy: (first: string) => `Articoli di ${first}`,
  },
  about: {
    docTitle: "Chi siamo — Founders.it",
    eyebrow: "Chi siamo",
    title: "Raccontiamo l'innovazione italiana con il rigore che merita.",
    lead:
      "Founders.it nasce a Milano nel 2021 dall'idea di Giulia Marchetti, ex giornalista del Sole 24 Ore, di costruire un magazine indipendente interamente dedicato all'ecosistema startup italiano.",
    lead2:
      "All'epoca il mercato editoriale italiano dedicato all'innovazione era diviso tra grandi testate generaliste, in cui le startup occupavano qualche colonna ogni tanto, e blog di settore spesso poco indipendenti, finanziati da accordi commerciali con le aziende di cui scrivevano. In mezzo, mancava uno spazio per fare giornalismo serio: con tempo, con metodo, con accesso diretto alle persone, ai numeri, ai documenti. Founders.it è nato per riempire quello spazio.",
    statReaders: "lettori mensili",
    statNewsletter: "iscritti newsletter",
    statYears: "di pubblicazione continua",
    statYearsValue: "4 anni",
    missionTitle: "La nostra mission",
    mission1:
      "Crediamo che l'Italia abbia bisogno di un giornalismo dell'innovazione che sia all'altezza delle aziende che vuole raccontare. Per questo lavoriamo solo con autori specializzati, manteniamo un rapporto diretto con le fonti e ci finanziamo attraverso la nostra community di lettori e le poche collaborazioni pubblicitarie che accettiamo, sempre dichiarate in modo trasparente.",
    mission2:
      "Le aziende di cui parliamo non pagano per essere coperte, e non hanno alcun diritto di prelettura sui nostri articoli. Quando intervistiamo un founder, lo facciamo con domande preparate dalla redazione, non concordate con uffici stampa. Quando analizziamo un round di investimento, lo facciamo con i numeri ufficiali e con il commento di operatori indipendenti del settore.",
    mission3:
      "Pubblichiamo nuovi contenuti tre volte alla settimana, oltre alla newsletter del weekend. Tutto il nostro archivio è e rimarrà liberamente accessibile online: crediamo che la conoscenza sul mondo startup italiano debba essere un bene pubblico, non un servizio premium per pochi.",
    storyTitle: "La nostra storia",
    story1:
      "Il primo articolo di Founders.it è stato pubblicato il 4 ottobre 2021: un'intervista a una founder torinese che aveva appena chiuso il primo seed round della sua carriera. Da allora abbiamo pubblicato oltre duecento articoli, costruito una redazione di tre persone a tempo pieno, lanciato la newsletter settimanale che oggi conta oltre dodicimila iscritti, organizzato eventi a Milano, Roma e Torino, e collaborato con istituzioni come CDP Venture Capital, Italian Tech Alliance e le principali università italiane.",
    story2:
      "Founders.it è oggi una società editoriale a tutti gli effetti, con sede a Milano in via Tortona, che riteniamo il quartiere giusto per chi racconta innovazione. Continuiamo a crescere ascoltando la nostra community: se hai una storia da raccontarci o un suggerimento, scrivi alla redazione.",
    teamTitle: "La redazione",
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "La domenica delle startup italiane.",
    p1:
      "Ogni domenica mattina, dodicimila tra founder, investitori, advisor e operatori dell'ecosistema ricevono nella loro inbox la newsletter di Founders.it. Una sintesi curata di tutto quello che è successo nella settimana sul fronte dell'innovazione italiana: i round chiusi, le interviste più lette, i casi studio del momento, le scadenze delle call pubbliche, gli eventi da segnare in agenda.",
    p2:
      "Non vendiamo il tuo indirizzo a nessuno, non inviamo spam, non sponsorizziamo aziende attraverso la newsletter. La curiamo personalmente in redazione e la consideriamo il nostro filo diretto con chi ci legge. Iscriverti è gratis e puoi cancellarti in qualsiasi momento con un click in fondo a ogni invio.",
    namePlaceholder: "Nome",
    emailPlaceholder: "Email",
    cta: "Iscriviti",
    done: "Grazie! Hai chiesto di iscriverti alla newsletter.",
  },
  contact: {
    eyebrow: "Contatti",
    title: "Scrivici",
    body:
      "Per proposte editoriali, segnalazioni di round, suggerimenti su aziende da raccontare o collaborazioni puoi scrivere alla redazione all'indirizzo redazione@founders.it. Per richieste commerciali e partnership: business@founders.it. La nostra sede è in Via Tortona 27, 20144 Milano. Leggiamo ogni messaggio e rispondiamo normalmente entro tre giorni lavorativi.",
    name: "Nome e cognome",
    email: "Email",
    subject: "Oggetto",
    message: "Il tuo messaggio",
    send: "Invia",
  },
  legal: {
    legalDoc: "Documento legale",
    lastUpdate: "Ultimo aggiornamento: 15 marzo 2025",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
  },
  notFound: {
    code: "Errore 404",
    title: "Pagina non trovata",
    body: "L'articolo che cerchi è stato spostato o non esiste più. Torna in homepage o sfoglia l'archivio.",
    home: "Vai in homepage",
    archive: "Tutti gli articoli",
  },
  categoryLabels: {
    interviews: "Interviste",
    investments: "Investimenti",
    guides: "Guide",
    trends: "Trend",
    "case-studies": "Casi Studio",
  },
  categoryDescriptions: {
    interviews:
      "Le voci dei founder italiani, raccontate in prima persona. In questa sezione raccogliamo le conversazioni che la nostra redazione conduce ogni settimana con le persone che stanno costruendo le aziende più interessanti del Paese. Non interviste promozionali ma dialoghi lunghi, fatti di domande precise e risposte oneste. Parliamo di scelte difficili, di fallimenti e ripartenze, di rapporti con gli investitori, di team e di cultura aziendale. Il filo conduttore è sempre lo stesso: capire come pensano e come decidono le persone che fanno innovazione in Italia.",
    investments:
      "Tutto quello che riguarda il venture capital, gli angel investor, l'equity crowdfunding e le altre forme di capitale che alimentano l'ecosistema startup italiano. Pubblichiamo analisi sui principali round chiusi sul mercato, approfondimenti sui fondi più attivi, interviste a partner e investment manager, guide pratiche per founder in fase di fundraising. L'obiettivo è restituire una fotografia chiara di come si muovono i capitali nel nostro Paese, senza banalizzazioni e con i numeri sempre verificati alla fonte.",
    guides:
      "Le guide pratiche di Founders.it sono pensate per chi sta costruendo o vuole costruire un'azienda. Pitch deck, founder agreement, prime assunzioni, product-market fit, modelli di business, contratti commerciali: ogni guida nasce dall'esperienza diretta di chi ha vissuto quella situazione, integrata da interviste a esperti e operatori del settore. Niente teoria astratta o framework copiati dai blog americani, ma indicazioni concrete adattate al contesto regolatorio, fiscale e culturale italiano.",
    trends:
      "Le grandi tendenze dell'ecosistema, raccontate con dati alla mano. Mappature di settori verticali, confronti tra hub regionali, analisi di fenomeni emergenti come l'intelligenza artificiale, il deep tech, il climate tech. Pubblichiamo solo articoli che si basano su numeri verificati e su un lavoro di ricerca originale: non ci interessa cavalcare l'hype del momento, ma capire dove sta andando davvero il mercato e perché.",
    "case-studies":
      "I casi studio sono la nostra rubrica più approfondita. Raccontiamo per intero la storia di un'azienda italiana, dai primi mesi alla fase attuale, con accesso ai protagonisti, ai numeri e ai documenti. Ogni caso studio richiede settimane di lavoro e diverse interviste, e mira a estrarre lezioni utili per chi sta costruendo qualcosa di nuovo. Successi, fallimenti, pivot, exit: tutte le tappe di un percorso imprenditoriale meritano di essere analizzate senza retorica.",
  },
  categorySlugs: {
    interviews: "interviste",
    investments: "investimenti",
    guides: "guide",
    trends: "trend",
    "case-studies": "casi-studio",
  },
};

const en: Dict = {
  htmlLang: "en",
  brand: { tagline: "Independent magazine on Italian startups" },
  nav: {
    articles: "Articles",
    interviews: "Interviews",
    investments: "Investments",
    guides: "Guides",
    authors: "Authors",
    about: "About",
    searchPlaceholder: "Search an article…",
    subscribe: "Subscribe",
  },
  footer: {
    description:
      "Founders.it is the independent magazine on the Italian startup ecosystem. Stories, numbers and analysis on the companies that are building the Italy of tomorrow.",
    sectionsTitle: "Sections",
    allArticles: "All articles",
    magazineTitle: "Magazine",
    about: "About us",
    authors: "Authors",
    newsletter: "Newsletter",
    contact: "Contact",
    privacy: "Privacy",
    cookie: "Cookies",
    interviews: "Interviews",
    investments: "Investments",
    guides: "Guides",
    trends: "Trends",
    caseStudies: "Case Studies",
    legalLine: "Founders Media S.r.l. — Via Tortona 27, 20144 Milan — VAT IT11894720966",
  },
  newsletterBanner: {
    eyebrow: "Newsletter",
    title: "The stories of Italian startups, every Sunday in your inbox.",
    body: "12,400 founders, investors and ecosystem operators read our newsletter. No spam, no hidden sponsorships. Only the facts that matter.",
    emailPlaceholder: "Your email",
    cta: "Subscribe",
  },
  home: {
    docTitle: "Founders.it — Stories and numbers of Italian startups",
    eyebrow: "Independent magazine · since 2021",
    title: "Stories and numbers of Italian startups.",
    intro:
      "Founders.it covers the Italian innovation ecosystem through interviews with founders, analysis of funding rounds, practical guides for those building companies, and case studies on the businesses changing the way we work, pay, travel and live. We are based in Milan but our eyes are on the whole country, from Bologna to Bari, from Turin to Catania. Every week we publish new content, the result of on-the-ground reporting and direct conversations with the people building that market every day. We believe talking about startups means first of all talking about people, choices and real risks, not just valuations and press releases.",
    latestEyebrow: "Latest stories",
    latestTitle: "What to read this week",
    allArticles: "All articles →",
    whyReadEyebrow: "Why read us",
    whyReadTitle: "Three principles guiding our newsroom.",
    whyReadBody:
      "Founders.it is an independent editorial project. We do not take money from the companies we write about, we do not sell sponsored articles and we do not work as a PR agency for anyone. What keeps us going is the trust of our readers and the support of our community of subscribers.",
    pillar1Title: "Editorial independence",
    pillar1Body:
      "We do not publish sponsored content disguised as articles and we do not write about companies just because they are recommended to us. Our editorial choices are our own.",
    pillar2Title: "On-the-ground reporting",
    pillar2Body:
      "Every investigation comes from in-person meetings, phone calls, verified data. No press-release summaries: only stories told after we have seen them with our own eyes.",
    pillar3Title: "Verified numbers",
    pillar3Body:
      "When we cite a round, a valuation or a metric, we always indicate the source and the context. We believe serious journalism is impossible without serious data.",
    exploreTitle: "Explore by category",
    exploreBody: "Five sections, five different ways to tell the story of Italian innovation.",
    seeAll: "See all →",
  },
  article: {
    minRead: "min read",
    writtenBy: "Written by",
    aboutAuthor: "About the author",
    categories: "Categories",
    popular: "Popular articles",
    related: "Related articles",
  },
  articlesPage: {
    docTitle: "All articles",
    eyebrow: "Archive",
    title: "All articles",
    body1:
      "Since we launched Founders.it in 2021, we have published over two hundred stories on the Italian startup ecosystem. Interviews with founders building the companies of the future, rigorous analyses of funding rounds, practical guides for those who want to start a business, in-depth case studies on leading Italian scaleups. Every article is the result of on-the-ground reporting: in-person meetings, calls with investors and operators, data verified with direct sources.",
    body2:
      "On this page you find the complete archive, sorted by publication date. You can filter by category using the tags below, or browse our sections by topic. Happy reading.",
    filter: "Filter:",
    all: "All",
  },
  category: { eyebrow: "Category" },
  authorsPage: {
    eyebrow: "The newsroom",
    title: "The people who write Founders.it",
    body:
      "A small but specialised newsroom. Every author has a professional background in business journalism, finance or innovation. Get to know the people behind the articles you read every week.",
    articlesCount: (n: number) => `${n} articles published`,
  },
  authorPage: {
    eyebrow: "Author",
    articlesPublished: (n: number) => `${n} articles published`,
    articlesBy: (first: string) => `Articles by ${first}`,
  },
  about: {
    docTitle: "About — Founders.it",
    eyebrow: "About us",
    title: "We cover Italian innovation with the rigour it deserves.",
    lead:
      "Founders.it was born in Milan in 2021 from the idea of Giulia Marchetti, former journalist at Sole 24 Ore, to build an independent magazine entirely dedicated to the Italian startup ecosystem.",
    lead2:
      "At the time, the Italian editorial market dedicated to innovation was split between large generalist outlets, where startups got a column once in a while, and industry blogs that were often not very independent, funded by commercial deals with the companies they covered. In between, there was no space for serious journalism: with time, with method, with direct access to people, numbers and documents. Founders.it was born to fill that space.",
    statReaders: "monthly readers",
    statNewsletter: "newsletter subscribers",
    statYears: "of continuous publishing",
    statYearsValue: "4 years",
    missionTitle: "Our mission",
    mission1:
      "We believe Italy needs innovation journalism that lives up to the companies it covers. That is why we work only with specialised authors, keep a direct relationship with our sources and fund ourselves through our community of readers and the few advertising partnerships we accept, always transparently disclosed.",
    mission2:
      "The companies we write about do not pay to be covered, and have no right to pre-read our articles. When we interview a founder, we use questions prepared by the newsroom, not agreed with PR offices. When we analyse a funding round, we use official numbers and the commentary of independent operators in the sector.",
    mission3:
      "We publish new content three times a week, in addition to the weekend newsletter. All of our archive is and will remain freely accessible online: we believe knowledge about the Italian startup world should be a public good, not a premium service for the few.",
    storyTitle: "Our story",
    story1:
      "The first article on Founders.it was published on October 4th, 2021: an interview with a Turin-based founder who had just closed the first seed round of her career. Since then we have published over two hundred articles, built a newsroom of three full-time people, launched the weekly newsletter that today has over twelve thousand subscribers, organised events in Milan, Rome and Turin, and collaborated with institutions like CDP Venture Capital, Italian Tech Alliance and the main Italian universities.",
    story2:
      "Founders.it is today a fully fledged publishing company, with offices in Milan on Via Tortona, which we consider the right neighbourhood for those who cover innovation. We keep growing by listening to our community: if you have a story to tell us or a suggestion, write to the newsroom.",
    teamTitle: "The newsroom",
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "The Italian startup Sunday.",
    p1:
      "Every Sunday morning, twelve thousand founders, investors, advisors and ecosystem operators receive the Founders.it newsletter in their inbox. A curated summary of everything that happened during the week on the Italian innovation front: closed rounds, most-read interviews, the case studies of the moment, deadlines for public calls, events to add to your calendar.",
    p2:
      "We do not sell your address to anyone, we do not send spam, we do not sponsor companies through the newsletter. We curate it personally in the newsroom and consider it our direct line to our readers. Subscribing is free and you can unsubscribe at any time with one click at the bottom of every email.",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    cta: "Subscribe",
    done: "Thank you! You have requested to subscribe to the newsletter.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Write to us",
    body:
      "For editorial proposals, round tips, suggestions on companies to cover or partnerships, you can write to the newsroom at redazione@founders.it. For commercial requests and partnerships: business@founders.it. Our office is at Via Tortona 27, 20144 Milan. We read every message and normally respond within three working days.",
    name: "Full name",
    email: "Email",
    subject: "Subject",
    message: "Your message",
    send: "Send",
  },
  legal: {
    legalDoc: "Legal document",
    lastUpdate: "Last updated: March 15, 2025",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
  },
  notFound: {
    code: "Error 404",
    title: "Page not found",
    body: "The article you are looking for has been moved or no longer exists. Go back to the homepage or browse the archive.",
    home: "Go to homepage",
    archive: "All articles",
  },
  categoryLabels: {
    interviews: "Interviews",
    investments: "Investments",
    guides: "Guides",
    trends: "Trends",
    "case-studies": "Case Studies",
  },
  categoryDescriptions: {
    interviews:
      "The voices of Italian founders, in the first person. In this section we collect the conversations our newsroom conducts every week with the people building the most interesting companies in the country. Not promotional interviews but long dialogues, with precise questions and honest answers. We talk about hard choices, failures and restarts, relationships with investors, teams and company culture. The common thread is always the same: understanding how the people doing innovation in Italy think and decide.",
    investments:
      "Everything related to venture capital, angel investors, equity crowdfunding and the other forms of capital that fuel the Italian startup ecosystem. We publish analyses of the main rounds closed on the market, deep dives into the most active funds, interviews with partners and investment managers, practical guides for founders in fundraising. The goal is to give a clear picture of how capital moves in our country, without simplification and with numbers always verified at the source.",
    guides:
      "The practical guides of Founders.it are designed for those who are building or want to build a company. Pitch decks, founder agreements, first hires, product-market fit, business models, commercial contracts: every guide comes from the direct experience of those who have lived through that situation, integrated with interviews with experts and industry operators. No abstract theory or frameworks copied from American blogs, but concrete indications adapted to the Italian regulatory, fiscal and cultural context.",
    trends:
      "The major trends of the ecosystem, told with data in hand. Mappings of vertical sectors, comparisons between regional hubs, analyses of emerging phenomena like artificial intelligence, deep tech, climate tech. We publish only articles based on verified numbers and original research: we are not interested in riding the hype of the moment, but in understanding where the market is really heading and why.",
    "case-studies":
      "Case studies are our most in-depth section. We tell the entire story of an Italian company, from its early months to the present day, with access to the protagonists, the numbers and the documents. Every case study requires weeks of work and several interviews, and aims to extract useful lessons for those who are building something new. Successes, failures, pivots, exits: every step of an entrepreneurial journey deserves to be analysed without rhetoric.",
  },
  categorySlugs: {
    interviews: "interviews",
    investments: "investments",
    guides: "guides",
    trends: "trends",
    "case-studies": "case-studies",
  },
};

const de: Dict = {
  htmlLang: "de",
  brand: { tagline: "Unabhängiges Magazin über italienische Startups" },
  nav: {
    articles: "Artikel",
    interviews: "Interviews",
    investments: "Investitionen",
    guides: "Anleitungen",
    authors: "Autoren",
    about: "Über uns",
    searchPlaceholder: "Artikel suchen…",
    subscribe: "Abonnieren",
  },
  footer: {
    description:
      "Founders.it ist das unabhängige Magazin über das italienische Startup-Ökosystem. Geschichten, Daten und Analysen über die Unternehmen, die das Italien von morgen bauen.",
    sectionsTitle: "Rubriken",
    allArticles: "Alle Artikel",
    magazineTitle: "Magazin",
    about: "Über uns",
    authors: "Autoren",
    newsletter: "Newsletter",
    contact: "Kontakt",
    privacy: "Datenschutz",
    cookie: "Cookies",
    interviews: "Interviews",
    investments: "Investitionen",
    guides: "Anleitungen",
    trends: "Trends",
    caseStudies: "Fallstudien",
    legalLine: "Founders Media S.r.l. — Via Tortona 27, 20144 Mailand — USt-IdNr. IT11894720966",
  },
  newsletterBanner: {
    eyebrow: "Newsletter",
    title: "Die Geschichten italienischer Startups, jeden Sonntag in deinem Postfach.",
    body: "12.400 Gründer, Investoren und Akteure des Ökosystems lesen unseren Newsletter. Kein Spam, keine versteckten Sponsorings. Nur die Fakten, die zählen.",
    emailPlaceholder: "Deine E-Mail",
    cta: "Abonnieren",
  },
  home: {
    docTitle: "Founders.it — Geschichten und Zahlen italienischer Startups",
    eyebrow: "Unabhängiges Magazin · seit 2021",
    title: "Geschichten und Zahlen italienischer Startups.",
    intro:
      "Founders.it erzählt vom italienischen Innovations-Ökosystem durch Interviews mit Gründern, Analysen von Finanzierungsrunden, praktische Anleitungen für Unternehmer und Fallstudien über die Firmen, die verändern, wie wir arbeiten, zahlen, reisen und wohnen. Wir arbeiten von Mailand aus mit Blick auf das ganze Land, von Bologna bis Bari, von Turin bis Catania. Jede Woche veröffentlichen wir neue Inhalte, das Ergebnis von Recherchen vor Ort und direkten Gesprächen mit den Menschen, die diesen Markt jeden Tag aufbauen. Wir glauben, dass über Startups zu sprechen vor allem bedeutet, über Menschen, Entscheidungen und reale Risiken zu sprechen, nicht nur über Bewertungen und Pressemitteilungen.",
    latestEyebrow: "Aktuelle Beiträge",
    latestTitle: "Was du diese Woche lesen solltest",
    allArticles: "Alle Artikel →",
    whyReadEyebrow: "Warum uns lesen",
    whyReadTitle: "Drei Prinzipien, die unsere Redaktion leiten.",
    whyReadBody:
      "Founders.it ist ein unabhängiges redaktionelles Projekt. Wir nehmen kein Geld von den Unternehmen, über die wir schreiben, verkaufen keine gesponserten Artikel und arbeiten für niemanden als PR-Büro. Was uns am Leben hält, ist das Vertrauen unserer Leser und die Unterstützung unserer Abonnenten-Community.",
    pillar1Title: "Redaktionelle Unabhängigkeit",
    pillar1Body:
      "Wir veröffentlichen keine als Artikel getarnten gesponserten Inhalte und schreiben nicht über Unternehmen, nur weil sie uns empfohlen werden. Unsere redaktionellen Entscheidungen sind unsere eigenen.",
    pillar2Title: "Recherche vor Ort",
    pillar2Body:
      "Jede Recherche entsteht aus persönlichen Treffen, Telefonaten und überprüften Daten. Keine Zusammenfassungen von Pressemitteilungen: nur Geschichten, die wir mit eigenen Augen gesehen haben.",
    pillar3Title: "Überprüfte Zahlen",
    pillar3Body:
      "Wenn wir eine Runde, eine Bewertung oder eine Kennzahl zitieren, geben wir immer die Quelle und den Kontext an. Wir glauben, dass ohne seriöse Daten kein seriöser Journalismus möglich ist.",
    exploreTitle: "Nach Kategorie entdecken",
    exploreBody: "Fünf Rubriken, fünf verschiedene Arten, italienische Innovation zu erzählen.",
    seeAll: "Alle ansehen →",
  },
  article: {
    minRead: "Min. Lesezeit",
    writtenBy: "Geschrieben von",
    aboutAuthor: "Über den Autor",
    categories: "Kategorien",
    popular: "Beliebte Artikel",
    related: "Verwandte Artikel",
  },
  articlesPage: {
    docTitle: "Alle Artikel",
    eyebrow: "Archiv",
    title: "Alle Artikel",
    body1:
      "Seit dem Start von Founders.it im Jahr 2021 haben wir über zweihundert Geschichten zum italienischen Startup-Ökosystem veröffentlicht. Interviews mit Gründern, die die Unternehmen der Zukunft bauen, gründliche Analysen von Finanzierungsrunden, praktische Anleitungen für angehende Unternehmer, tiefgehende Fallstudien über führende italienische Scaleups. Jeder Artikel ist das Ergebnis von Recherchen vor Ort: persönliche Treffen, Telefonate mit Investoren und Akteuren, mit direkten Quellen überprüfte Daten.",
    body2:
      "Auf dieser Seite findest du das vollständige Archiv, nach Veröffentlichungsdatum sortiert. Du kannst nach Kategorie mit den Tags unten filtern oder thematisch durch unsere Rubriken stöbern. Viel Spaß beim Lesen.",
    filter: "Filter:",
    all: "Alle",
  },
  category: { eyebrow: "Kategorie" },
  authorsPage: {
    eyebrow: "Die Redaktion",
    title: "Die Menschen hinter Founders.it",
    body:
      "Eine kleine, aber spezialisierte Redaktion. Jeder Autor hat einen beruflichen Hintergrund im Wirtschaftsjournalismus, im Finanzwesen oder in der Innovation. Lerne die Personen kennen, die jede Woche die Artikel zeichnen, die du liest.",
    articlesCount: (n: number) => `${n} veröffentlichte Artikel`,
  },
  authorPage: {
    eyebrow: "Autor",
    articlesPublished: (n: number) => `${n} veröffentlichte Artikel`,
    articlesBy: (first: string) => `Artikel von ${first}`,
  },
  about: {
    docTitle: "Über uns — Founders.it",
    eyebrow: "Über uns",
    title: "Wir berichten über italienische Innovation mit der nötigen Sorgfalt.",
    lead:
      "Founders.it entstand 2021 in Mailand aus der Idee von Giulia Marchetti, ehemalige Journalistin bei Sole 24 Ore, ein unabhängiges Magazin aufzubauen, das ganz dem italienischen Startup-Ökosystem gewidmet ist.",
    lead2:
      "Damals war der italienische Medienmarkt zum Thema Innovation aufgeteilt zwischen großen Generalisten-Magazinen, in denen Startups ab und zu ein paar Spalten bekamen, und Branchenblogs, die oft wenig unabhängig waren und durch kommerzielle Vereinbarungen mit den Unternehmen finanziert wurden, über die sie berichteten. Dazwischen fehlte ein Raum für seriösen Journalismus: mit Zeit, Methode und direktem Zugang zu Menschen, Zahlen und Dokumenten. Founders.it wurde gegründet, um diesen Raum zu füllen.",
    statReaders: "monatliche Leser",
    statNewsletter: "Newsletter-Abonnenten",
    statYears: "kontinuierliche Veröffentlichung",
    statYearsValue: "4 Jahre",
    missionTitle: "Unsere Mission",
    mission1:
      "Wir glauben, dass Italien einen Innovationsjournalismus braucht, der den Unternehmen, über die er berichtet, gerecht wird. Deshalb arbeiten wir nur mit spezialisierten Autoren, pflegen direkten Kontakt zu unseren Quellen und finanzieren uns über unsere Leser-Community und die wenigen Werbepartnerschaften, die wir annehmen — immer transparent gekennzeichnet.",
    mission2:
      "Die Unternehmen, über die wir berichten, zahlen nicht dafür, behandelt zu werden, und haben kein Recht, unsere Artikel vorab zu lesen. Wenn wir einen Gründer interviewen, tun wir das mit Fragen, die in der Redaktion vorbereitet wurden, nicht mit PR-Abteilungen abgestimmt. Wenn wir eine Finanzierungsrunde analysieren, tun wir es mit offiziellen Zahlen und mit Kommentaren unabhängiger Akteure der Branche.",
    mission3:
      "Wir veröffentlichen dreimal pro Woche neue Inhalte, zusätzlich zum Wochenend-Newsletter. Unser gesamtes Archiv ist und bleibt online frei zugänglich: Wir glauben, dass Wissen über die italienische Startup-Welt ein öffentliches Gut sein sollte, kein Premium-Dienst für wenige.",
    storyTitle: "Unsere Geschichte",
    story1:
      "Der erste Artikel von Founders.it wurde am 4. Oktober 2021 veröffentlicht: ein Interview mit einer Gründerin aus Turin, die gerade ihre erste Seed-Runde geschlossen hatte. Seitdem haben wir über zweihundert Artikel veröffentlicht, eine Redaktion mit drei Vollzeit-Mitarbeitern aufgebaut, den wöchentlichen Newsletter gestartet, der heute über zwölftausend Abonnenten hat, Veranstaltungen in Mailand, Rom und Turin organisiert und mit Institutionen wie CDP Venture Capital, Italian Tech Alliance und den wichtigsten italienischen Universitäten zusammengearbeitet.",
    story2:
      "Founders.it ist heute ein vollwertiges Verlagsunternehmen mit Sitz in Mailand in der Via Tortona, dem unserer Meinung nach passenden Viertel für alle, die über Innovation berichten. Wir wachsen weiter, indem wir unserer Community zuhören: Wenn du uns eine Geschichte erzählen oder einen Vorschlag machen möchtest, schreib der Redaktion.",
    teamTitle: "Die Redaktion",
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "Der Sonntag der italienischen Startups.",
    p1:
      "Jeden Sonntagmorgen erhalten zwölftausend Gründer, Investoren, Berater und Akteure des Ökosystems den Founders.it-Newsletter in ihrem Postfach. Eine kuratierte Zusammenfassung von allem, was in der Woche an der italienischen Innovationsfront passiert ist: geschlossene Runden, meistgelesene Interviews, die Fallstudien des Moments, Fristen öffentlicher Ausschreibungen, Veranstaltungen für deinen Kalender.",
    p2:
      "Wir verkaufen deine Adresse nicht, wir versenden keinen Spam, wir sponsern keine Unternehmen über den Newsletter. Wir kuratieren ihn persönlich in der Redaktion und betrachten ihn als unsere direkte Verbindung zu unseren Lesern. Das Abonnement ist kostenlos und du kannst dich jederzeit mit einem Klick am Ende jeder E-Mail wieder abmelden.",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    cta: "Abonnieren",
    done: "Danke! Du hast dich für den Newsletter angemeldet.",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Schreib uns",
    body:
      "Für redaktionelle Vorschläge, Tipps zu Runden, Anregungen zu Unternehmen, über die wir berichten sollen, oder Kooperationen kannst du der Redaktion an redazione@founders.it schreiben. Für kommerzielle Anfragen und Partnerschaften: business@founders.it. Unser Büro befindet sich in der Via Tortona 27, 20144 Mailand. Wir lesen jede Nachricht und antworten in der Regel innerhalb von drei Werktagen.",
    name: "Vor- und Nachname",
    email: "E-Mail",
    subject: "Betreff",
    message: "Deine Nachricht",
    send: "Senden",
  },
  legal: {
    legalDoc: "Rechtliches Dokument",
    lastUpdate: "Zuletzt aktualisiert: 15. März 2025",
    privacy: "Datenschutzerklärung",
    cookie: "Cookie-Richtlinie",
  },
  notFound: {
    code: "Fehler 404",
    title: "Seite nicht gefunden",
    body: "Der gesuchte Artikel wurde verschoben oder existiert nicht mehr. Kehre zur Startseite zurück oder durchsuche das Archiv.",
    home: "Zur Startseite",
    archive: "Alle Artikel",
  },
  categoryLabels: {
    interviews: "Interviews",
    investments: "Investitionen",
    guides: "Anleitungen",
    trends: "Trends",
    "case-studies": "Fallstudien",
  },
  categoryDescriptions: {
    interviews:
      "Die Stimmen der italienischen Gründer, aus erster Hand. In dieser Rubrik sammeln wir die Gespräche, die unsere Redaktion jede Woche mit den Menschen führt, die die spannendsten Unternehmen des Landes aufbauen. Keine Werbeinterviews, sondern lange Dialoge mit präzisen Fragen und ehrlichen Antworten. Wir sprechen über schwierige Entscheidungen, Fehlschläge und Neuanfänge, Beziehungen zu Investoren, Teams und Unternehmenskultur. Der rote Faden ist immer derselbe: zu verstehen, wie die Menschen, die in Italien Innovation machen, denken und entscheiden.",
    investments:
      "Alles rund um Venture Capital, Angel-Investoren, Equity-Crowdfunding und die anderen Kapitalformen, die das italienische Startup-Ökosystem speisen. Wir veröffentlichen Analysen zu den wichtigsten Runden auf dem Markt, Hintergründe zu den aktivsten Fonds, Interviews mit Partnern und Investment-Managern, praktische Anleitungen für Gründer in der Fundraising-Phase. Ziel ist es, ein klares Bild davon zu zeichnen, wie sich Kapital in unserem Land bewegt — ohne Vereinfachungen und mit Zahlen, die immer an der Quelle überprüft werden.",
    guides:
      "Die praktischen Anleitungen von Founders.it richten sich an alle, die ein Unternehmen aufbauen oder aufbauen wollen. Pitch Decks, Gründervereinbarungen, erste Einstellungen, Product-Market Fit, Geschäftsmodelle, Handelsverträge: Jede Anleitung entsteht aus der direkten Erfahrung derer, die diese Situation erlebt haben, ergänzt durch Interviews mit Experten und Branchenakteuren. Keine abstrakte Theorie oder von amerikanischen Blogs kopierte Frameworks, sondern konkrete Hinweise, angepasst an den italienischen regulatorischen, steuerlichen und kulturellen Kontext.",
    trends:
      "Die großen Trends des Ökosystems, erzählt mit Daten in der Hand. Übersichten zu vertikalen Sektoren, Vergleiche regionaler Hubs, Analysen zu aufkommenden Phänomenen wie Künstliche Intelligenz, Deep Tech, Climate Tech. Wir veröffentlichen nur Artikel, die auf überprüften Zahlen und eigener Recherche basieren: Wir wollen nicht den Hype des Augenblicks reiten, sondern verstehen, wohin der Markt wirklich geht und warum.",
    "case-studies":
      "Die Fallstudien sind unsere tiefgehendste Rubrik. Wir erzählen die ganze Geschichte eines italienischen Unternehmens, von den ersten Monaten bis heute, mit Zugang zu den Protagonisten, den Zahlen und den Dokumenten. Jede Fallstudie erfordert Wochen Arbeit und mehrere Interviews und zielt darauf ab, nützliche Lehren für alle zu ziehen, die etwas Neues aufbauen. Erfolge, Misserfolge, Pivots, Exits: Jede Etappe eines unternehmerischen Wegs verdient es, ohne Rhetorik analysiert zu werden.",
  },
  categorySlugs: {
    interviews: "interviews",
    investments: "investitionen",
    guides: "anleitungen",
    trends: "trends",
    "case-studies": "fallstudien",
  },
};

export const strings: Record<Locale, Dict> = { it, en, de };
