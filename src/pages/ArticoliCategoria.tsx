import { useParams } from "react-router-dom";
import { articoli, categoriaDaSlug } from "@/data/articoli";
import ArticleCard from "@/components/ArticleCard";
import NotFound from "./NotFound";

const descrizioni: Record<string, string> = {
  "Interviste": "Le voci dei founder italiani, raccontate in prima persona. In questa sezione raccogliamo le conversazioni che la nostra redazione conduce ogni settimana con le persone che stanno costruendo le aziende più interessanti del Paese. Non interviste promozionali ma dialoghi lunghi, fatti di domande precise e risposte oneste. Parliamo di scelte difficili, di fallimenti e ripartenze, di rapporti con gli investitori, di team e di cultura aziendale. Il filo conduttore è sempre lo stesso: capire come pensano e come decidono le persone che fanno innovazione in Italia.",
  "Investimenti": "Tutto quello che riguarda il venture capital, gli angel investor, l'equity crowdfunding e le altre forme di capitale che alimentano l'ecosistema startup italiano. Pubblichiamo analisi sui principali round chiusi sul mercato, approfondimenti sui fondi più attivi, interviste a partner e investment manager, guide pratiche per founder in fase di fundraising. L'obiettivo è restituire una fotografia chiara di come si muovono i capitali nel nostro Paese, senza banalizzazioni e con i numeri sempre verificati alla fonte.",
  "Guide": "Le guide pratiche di Founders.it sono pensate per chi sta costruendo o vuole costruire un'azienda. Pitch deck, founder agreement, prime assunzioni, product-market fit, modelli di business, contratti commerciali: ogni guida nasce dall'esperienza diretta di chi ha vissuto quella situazione, integrata da interviste a esperti e operatori del settore. Niente teoria astratta o framework copiati dai blog americani, ma indicazioni concrete adattate al contesto regolatorio, fiscale e culturale italiano.",
  "Trend": "Le grandi tendenze dell'ecosistema, raccontate con dati alla mano. Mappature di settori verticali, confronti tra hub regionali, analisi di fenomeni emergenti come l'intelligenza artificiale, il deep tech, il climate tech. Pubblichiamo solo articoli che si basano su numeri verificati e su un lavoro di ricerca originale: non ci interessa cavalcare l'hype del momento, ma capire dove sta andando davvero il mercato e perché.",
  "Casi Studio": "I casi studio sono la nostra rubrica più approfondita. Raccontiamo per intero la storia di un'azienda italiana, dai primi mesi alla fase attuale, con accesso ai protagonisti, ai numeri e ai documenti. Ogni caso studio richiede settimane di lavoro e diverse interviste, e mira a estrarre lezioni utili per chi sta costruendo qualcosa di nuovo. Successi, fallimenti, pivot, exit: tutte le tappe di un percorso imprenditoriale meritano di essere analizzate senza retorica.",
};

export default function ArticoliCategoria() {
  const { categoria } = useParams<{ categoria: string }>();
  const cat = categoriaDaSlug(categoria || "");

  if (!cat) return <NotFound />;

  const items = articoli.filter((a) => a.categoria === cat);

  return (
    <div className="container py-14">
      <header className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Categoria</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">{cat}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{descrizioni[cat]}</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((a) => <ArticleCard key={a.slug} articolo={a} />)}
      </div>
    </div>
  );
}
