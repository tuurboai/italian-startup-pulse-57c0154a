import { colorePerCategoriaKey } from "@/data/articoli";
import { cn } from "@/lib/utils";
import type { CategoryKey } from "@/i18n";

export default function CategoryBadge({
  categoria,
  categoriaKey,
  className,
}: {
  categoria: string;
  categoriaKey: CategoryKey;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm",
        colorePerCategoriaKey(categoriaKey),
        className,
      )}
    >
      {categoria}
    </span>
  );
}
