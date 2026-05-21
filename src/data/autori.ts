import giulia from "@/assets/aut-giulia.jpg";
import marco from "@/assets/aut-marco.jpg";
import sara from "@/assets/aut-sara.jpg";
import type { Locale } from "@/i18n";

export type Autore = {
  slug: string;
  nome: string;
  ruolo: string;
  foto: string;
  bio: string;
  bioLunga: string;
  articoli: number;
  twitter: string;
  linkedin: string;
};

type AutoreBase = {
  slug: string;
  nome: string;
  foto: string;
  articoli: number;
  twitter: string;
  linkedin: string;
};

const base: AutoreBase[] = [
  { slug: "giulia-marchetti", nome: "Giulia Marchetti", foto: giulia, articoli: 94, twitter: "giuliamarchetti", linkedin: "giulia-marchetti" },
  { slug: "marco-de-luca", nome: "Marco De Luca", foto: marco, articoli: 61, twitter: "marcodeluca", linkedin: "marco-de-luca" },
  { slug: "sara-fontana", nome: "Sara Fontana", foto: sara, articoli: 38, twitter: "sarafontana", linkedin: "sara-fontana" },
];

type Loc = { ruolo: string; bio: string; bioLunga: string };

const LOC: Record<Locale, Record<string, Loc>> = {
  it: {
    "giulia-marchetti": {
      ruolo: "Founder & Editor in Chief",
      bio: "Ex giornalista de Il Sole 24 Ore, ha seguito per 8 anni l'ecosistema tech italiano. Ha intervistato oltre 200 founder e investitori. Oggi guida la redazione di Founders.it.",
      bioLunga: "Giulia Marchetti è founder e direttore editoriale di Founders.it. Nata a Bergamo nel 1986, si laurea in Scienze della Comunicazione all'Università Cattolica di Milano e frequenta il master in giornalismo Walter Tobagi. Per otto anni firma inchieste sul Sole 24 Ore dedicate a fintech, venture capital e politiche industriali, intervistando oltre duecento founder e investitori italiani ed europei. Nel 2021 lascia la redazione del quotidiano economico per fondare Founders.it, con l'idea di costruire un osservatorio indipendente sull'innovazione italiana che unisca rigore giornalistico e ascolto diretto delle persone che fanno impresa. Ha moderato panel a Web Summit, SuperNova e Italian Tech Week, e cura la newsletter mensile letta da founder, fondi e operatori della filiera.",
    },
    "marco-de-luca": {
      ruolo: "Senior Writer — Investimenti & Mercati",
      bio: "Analista finanziario con background in venture capital. Segue i round di investimento del mercato italiano e scrive di fundraising, valutazioni e strategie di crescita.",
      bioLunga: "Marco De Luca, classe 1984, romano di nascita e milanese d'adozione, si è laureato in Economia all'Università Bocconi e ha completato un master in finanza alla London Business School. Ha lavorato per cinque anni come associate in un fondo di venture capital con sede a Londra, occupandosi di investimenti early stage in fintech ed enterprise software. Tornato in Italia nel 2020, ha collaborato con StartupItalia, EconomyUp e diverse testate verticali del settore prima di unirsi a Founders.it nel 2022. Oggi cura settimanalmente l'analisi dei round di investimento sul mercato italiano, con un occhio particolare alle dinamiche europee e ai movimenti dei fondi internazionali nel nostro Paese. È autore di due ebook sul fundraising scaricati da migliaia di founder.",
    },
    "sara-fontana": {
      ruolo: "Writer — Innovazione & Casi Studio",
      bio: "Laurea in economia all'Università Bocconi, MBA a Barcellona. Appassionata di modelli di business innovativi e sostenibilità nel mondo startup.",
      bioLunga: "Sara Fontana è writer di Founders.it dal 2023. Cresciuta a Vicenza, dopo la laurea triennale in Economia in Bocconi parte per un MBA all'IESE Business School di Barcellona, dove inizia a collaborare con un acceleratore locale seguendo cohort dedicate al deep tech e alla sostenibilità. Rientrata in Italia, lavora per due anni nel team di marketing di una scaleup B2B SaaS in fase di internazionalizzazione, esperienza che le permette di osservare dall'interno le dinamiche di crescita di un'azienda tech. Oggi su Founders.it cura la rubrica sui casi studio di aziende italiane innovative, con un'attenzione particolare ai modelli di business circolari, alla sostenibilità ambientale e ai temi di diversità e inclusione nei team fondatori.",
    },
  },
  en: {
    "giulia-marchetti": {
      ruolo: "Founder & Editor in Chief",
      bio: "Former Il Sole 24 Ore journalist, she has covered the Italian tech ecosystem for 8 years. She has interviewed over 200 founders and investors. Today she leads the Founders.it newsroom.",
      bioLunga: "Giulia Marchetti is founder and editor-in-chief of Founders.it. Born in Bergamo in 1986, she graduated in Communication Sciences at the Catholic University of Milan and attended the Walter Tobagi journalism master's programme. For eight years she wrote investigations for Il Sole 24 Ore on fintech, venture capital and industrial policies, interviewing over two hundred Italian and European founders and investors. In 2021 she left the financial daily to found Founders.it, with the idea of building an independent observatory on Italian innovation combining journalistic rigour and direct listening to the people doing business. She has moderated panels at Web Summit, SuperNova and Italian Tech Week, and edits the monthly newsletter read by founders, funds and ecosystem operators.",
    },
    "marco-de-luca": {
      ruolo: "Senior Writer — Investments & Markets",
      bio: "Financial analyst with a background in venture capital. He follows funding rounds in the Italian market and writes about fundraising, valuations and growth strategies.",
      bioLunga: "Marco De Luca, born in 1984, Roman by birth and Milanese by adoption, graduated in Economics at Bocconi University and completed a master's in finance at London Business School. He worked for five years as an associate at a London-based venture capital fund, focusing on early-stage investments in fintech and enterprise software. Back in Italy in 2020, he collaborated with StartupItalia, EconomyUp and several vertical industry outlets before joining Founders.it in 2022. Today he writes the weekly analysis of funding rounds on the Italian market, with a particular eye on European dynamics and the movements of international funds in our country. He is the author of two fundraising ebooks downloaded by thousands of founders.",
    },
    "sara-fontana": {
      ruolo: "Writer — Innovation & Case Studies",
      bio: "Bachelor in Economics from Bocconi University, MBA in Barcelona. Passionate about innovative business models and sustainability in the startup world.",
      bioLunga: "Sara Fontana has been a writer at Founders.it since 2023. Raised in Vicenza, after her bachelor's degree in Economics at Bocconi she moved to an MBA at IESE Business School in Barcelona, where she began collaborating with a local accelerator following cohorts dedicated to deep tech and sustainability. Back in Italy, she worked for two years in the marketing team of a B2B SaaS scaleup going international, an experience that allowed her to observe the growth dynamics of a tech company from the inside. Today on Founders.it she edits the column on case studies of innovative Italian companies, with particular attention to circular business models, environmental sustainability and diversity and inclusion topics in founding teams.",
    },
  },
  de: {
    "giulia-marchetti": {
      ruolo: "Gründerin & Chefredakteurin",
      bio: "Ehemalige Journalistin bei Il Sole 24 Ore, hat acht Jahre lang das italienische Tech-Ökosystem begleitet. Sie hat über 200 Gründer und Investoren interviewt. Heute leitet sie die Redaktion von Founders.it.",
      bioLunga: "Giulia Marchetti ist Gründerin und Chefredakteurin von Founders.it. Geboren 1986 in Bergamo, schloss sie ihr Studium der Kommunikationswissenschaften an der Katholischen Universität Mailand ab und absolvierte den Walter-Tobagi-Master in Journalismus. Acht Jahre lang schrieb sie für Il Sole 24 Ore Recherchen zu Fintech, Venture Capital und Industriepolitik und interviewte über zweihundert italienische und europäische Gründer und Investoren. 2021 verließ sie die Wirtschaftszeitung, um Founders.it zu gründen, mit der Idee, eine unabhängige Beobachtungsstelle für italienische Innovation zu schaffen, die journalistische Sorgfalt und direktes Zuhören mit den Menschen, die Unternehmen aufbauen, verbindet. Sie moderierte Panels beim Web Summit, SuperNova und der Italian Tech Week und kuratiert den monatlichen Newsletter, den Gründer, Fonds und Akteure der Branche lesen.",
    },
    "marco-de-luca": {
      ruolo: "Senior Writer — Investitionen & Märkte",
      bio: "Finanzanalyst mit Hintergrund im Venture Capital. Er verfolgt die Finanzierungsrunden auf dem italienischen Markt und schreibt über Fundraising, Bewertungen und Wachstumsstrategien.",
      bioLunga: "Marco De Luca, Jahrgang 1984, gebürtiger Römer und Mailänder durch Adoption, studierte Wirtschaftswissenschaften an der Bocconi-Universität und absolvierte einen Master in Finance an der London Business School. Fünf Jahre lang arbeitete er als Associate bei einem in London ansässigen Venture-Capital-Fonds und betreute Early-Stage-Investitionen in Fintech und Enterprise Software. 2020 nach Italien zurückgekehrt, arbeitete er mit StartupItalia, EconomyUp und verschiedenen Branchenmagazinen zusammen, bevor er 2022 zu Founders.it stieß. Heute kuratiert er wöchentlich die Analyse der Finanzierungsrunden auf dem italienischen Markt, mit besonderem Blick auf die europäische Dynamik und die Bewegungen internationaler Fonds in unserem Land. Er ist Autor von zwei Fundraising-Ebooks, die von Tausenden Gründern heruntergeladen wurden.",
    },
    "sara-fontana": {
      ruolo: "Writer — Innovation & Fallstudien",
      bio: "Bachelor in Wirtschaftswissenschaften an der Bocconi-Universität, MBA in Barcelona. Begeistert von innovativen Geschäftsmodellen und Nachhaltigkeit in der Startup-Welt.",
      bioLunga: "Sara Fontana ist seit 2023 Writer bei Founders.it. Aufgewachsen in Vicenza, ging sie nach ihrem Bachelor in Wirtschaftswissenschaften an der Bocconi zu einem MBA an der IESE Business School in Barcelona, wo sie mit einem lokalen Accelerator zusammenarbeitete und Cohorten zu Deep Tech und Nachhaltigkeit betreute. Zurück in Italien arbeitete sie zwei Jahre im Marketing-Team eines B2B-SaaS-Scaleups in der Internationalisierungsphase — eine Erfahrung, die ihr erlaubte, die Wachstumsdynamik eines Tech-Unternehmens von innen zu beobachten. Heute kuratiert sie auf Founders.it die Rubrik zu Fallstudien innovativer italienischer Unternehmen, mit besonderem Augenmerk auf zirkuläre Geschäftsmodelle, ökologische Nachhaltigkeit und Diversitäts- und Inklusionsthemen in Gründerteams.",
    },
  },
};

export function getAutori(locale: Locale): Autore[] {
  return base.map((b) => {
    const l = LOC[locale][b.slug];
    return { ...b, ruolo: l.ruolo, bio: l.bio, bioLunga: l.bioLunga };
  });
}
