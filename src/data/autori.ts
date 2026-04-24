import giulia from "@/assets/aut-giulia.jpg";
import marco from "@/assets/aut-marco.jpg";
import sara from "@/assets/aut-sara.jpg";

export const autori = [
  {
    slug: "giulia-marchetti",
    nome: "Giulia Marchetti",
    ruolo: "Founder & Editor in Chief",
    foto: giulia,
    bio: "Ex giornalista de Il Sole 24 Ore, ha seguito per 8 anni l'ecosistema tech italiano. Ha intervistato oltre 200 founder e investitori. Oggi guida la redazione di Founders.it.",
    bioLunga:
      "Giulia Marchetti è founder e direttore editoriale di Founders.it. Nata a Bergamo nel 1986, si laurea in Scienze della Comunicazione all'Università Cattolica di Milano e frequenta il master in giornalismo Walter Tobagi. Per otto anni firma inchieste sul Sole 24 Ore dedicate a fintech, venture capital e politiche industriali, intervistando oltre duecento founder e investitori italiani ed europei. Nel 2021 lascia la redazione del quotidiano economico per fondare Founders.it, con l'idea di costruire un osservatorio indipendente sull'innovazione italiana che unisca rigore giornalistico e ascolto diretto delle persone che fanno impresa. Ha moderato panel a Web Summit, SuperNova e Italian Tech Week, e cura la newsletter mensile letta da founder, fondi e operatori della filiera.",
    articoli: 94,
    twitter: "giuliamarchetti",
    linkedin: "giulia-marchetti",
  },
  {
    slug: "marco-de-luca",
    nome: "Marco De Luca",
    ruolo: "Senior Writer — Investimenti & Mercati",
    foto: marco,
    bio: "Analista finanziario con background in venture capital. Segue i round di investimento del mercato italiano e scrive di fundraising, valutazioni e strategie di crescita.",
    bioLunga:
      "Marco De Luca, classe 1984, romano di nascita e milanese d'adozione, si è laureato in Economia all'Università Bocconi e ha completato un master in finanza alla London Business School. Ha lavorato per cinque anni come associate in un fondo di venture capital con sede a Londra, occupandosi di investimenti early stage in fintech ed enterprise software. Tornato in Italia nel 2020, ha collaborato con StartupItalia, EconomyUp e diverse testate verticali del settore prima di unirsi a Founders.it nel 2022. Oggi cura settimanalmente l'analisi dei round di investimento sul mercato italiano, con un occhio particolare alle dinamiche europee e ai movimenti dei fondi internazionali nel nostro Paese. È autore di due ebook sul fundraising scaricati da migliaia di founder.",
    articoli: 61,
    twitter: "marcodeluca",
    linkedin: "marco-de-luca",
  },
  {
    slug: "sara-fontana",
    nome: "Sara Fontana",
    ruolo: "Writer — Innovazione & Casi Studio",
    foto: sara,
    bio: "Laurea in economia all'Università Bocconi, MBA a Barcellona. Appassionata di modelli di business innovativi e sostenibilità nel mondo startup.",
    bioLunga:
      "Sara Fontana è writer di Founders.it dal 2023. Cresciuta a Vicenza, dopo la laurea triennale in Economia in Bocconi parte per un MBA all'IESE Business School di Barcellona, dove inizia a collaborare con un acceleratore locale seguendo cohort dedicate al deep tech e alla sostenibilità. Rientrata in Italia, lavora per due anni nel team di marketing di una scaleup B2B SaaS in fase di internazionalizzazione, esperienza che le permette di osservare dall'interno le dinamiche di crescita di un'azienda tech. Oggi su Founders.it cura la rubrica sui casi studio di aziende italiane innovative, con un'attenzione particolare ai modelli di business circolari, alla sostenibilità ambientale e ai temi di diversità e inclusione nei team fondatori.",
    articoli: 38,
    twitter: "sarafontana",
    linkedin: "sara-fontana",
  },
];

export type Autore = (typeof autori)[number];
