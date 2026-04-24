import { colorePerCategoria } from "@/data/articoli";
import { cn } from "@/lib/utils";

export default function CategoryBadge({ categoria, className }: { categoria: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm",
        colorePerCategoria(categoria),
        className,
      )}
    >
      {categoria}
    </span>
  );
}
