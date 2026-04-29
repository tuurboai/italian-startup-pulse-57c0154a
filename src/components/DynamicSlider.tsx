import { useEffect, useState } from "react";
import { articoli } from "@/data/articoli";

export default function DynamicSlider() {
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = articoli.slice(0, 5);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, [loaded, slides.length]);

  if (!loaded) {
    // No reserved space → causes CLS when slider appears
    return null;
  }

  const current = slides[index];

  return (
    <section className="w-full bg-foreground text-background">
      <div className="relative w-full overflow-hidden">
        {/* No fixed dimensions on the image → LCP and CLS suffer */}
        <img
          src={current.immagine}
          alt=""
          className="w-full object-cover"
          style={{ maxHeight: "70vh" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container pb-10">
          <p className="text-xs uppercase tracking-widest text-background/80 mb-3">
            In primo piano
          </p>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-background max-w-3xl">
            {current.titolo}
          </h2>
          <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  i === index ? "bg-background" : "bg-background/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
