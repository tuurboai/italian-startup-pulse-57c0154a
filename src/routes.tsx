import type { RouteRecord } from "vite-react-ssg";
import { articoli, categorie, slugCategoria } from "./data/articoli";
import { autori } from "./data/autori";

const wrap = (loader: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    const m = await loader();
    return { Component: m.default };
  };

export const routes: RouteRecord[] = [
  {
    path: "/",
    lazy: wrap(() => import("./AppShell")),
    children: [
      { index: true, lazy: wrap(() => import("./pages/Index")) },
      { path: "articoli", lazy: wrap(() => import("./pages/Articoli")) },
      {
        path: "articoli/:categoria",
        lazy: wrap(() => import("./pages/ArticoliCategoria")),
        getStaticPaths: () => categorie.map((c) => `/articoli/${slugCategoria(c)}`),
      },
      {
        path: "articolo/:slug",
        lazy: wrap(() => import("./pages/ArticoloSingolo")),
        getStaticPaths: () => articoli.map((a) => `/articolo/${a.slug}`),
      },
      { path: "autori", lazy: wrap(() => import("./pages/Autori")) },
      {
        path: "autore/:slug",
        lazy: wrap(() => import("./pages/AutorePagina")),
        getStaticPaths: () => autori.map((a) => `/autore/${a.slug}`),
      },
      { path: "chi-siamo", lazy: wrap(() => import("./pages/ChiSiamo")) },
      { path: "newsletter", lazy: wrap(() => import("./pages/Newsletter")) },
      { path: "contatti", lazy: wrap(() => import("./pages/Contatti")) },
      { path: "privacy-policy", lazy: wrap(() => import("./pages/PrivacyPolicy")) },
      { path: "cookie-policy", lazy: wrap(() => import("./pages/CookiePolicy")) },
      { path: "*", lazy: wrap(() => import("./pages/NotFound")) },
    ],
  },
];
