import type { RouteRecord } from "vite-react-ssg";
import { articoloSlugs } from "./data/articoli";
import { LOCALES, categorySlug, type Locale, CATEGORY_KEYS } from "./i18n";

const wrap = (loader: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    const m = await loader();
    return { Component: m.default };
  };

const AUTORE_SLUGS = ["giulia-marchetti", "marco-de-luca", "sara-fontana"];

function buildLocaleChildren(locale: Locale): RouteRecord[] {
  const prefix = locale === "it" ? "" : `${locale}/`;
  const root = locale === "it" ? "/" : `/${locale}`;

  return [
    locale === "it"
      ? { index: true, lazy: wrap(() => import("./pages/Index")) }
      : { path: locale, lazy: wrap(() => import("./pages/Index")) },
    { path: `${prefix}articoli`, lazy: wrap(() => import("./pages/Articoli")) },
    {
      path: `${prefix}articoli/:categoria`,
      lazy: wrap(() => import("./pages/ArticoliCategoria")),
      getStaticPaths: () => CATEGORY_KEYS.map((k) => `${root === "/" ? "" : root}/articoli/${categorySlug(k, locale)}`),
    },
    {
      path: `${prefix}articolo/:slug`,
      lazy: wrap(() => import("./pages/ArticoloSingolo")),
      getStaticPaths: () => articoloSlugs.map((s) => `${root === "/" ? "" : root}/articolo/${s}`),
    },
    { path: `${prefix}autori`, lazy: wrap(() => import("./pages/Autori")) },
    {
      path: `${prefix}autore/:slug`,
      lazy: wrap(() => import("./pages/AutorePagina")),
      getStaticPaths: () => AUTORE_SLUGS.map((s) => `${root === "/" ? "" : root}/autore/${s}`),
    },
    { path: `${prefix}chi-siamo`, lazy: wrap(() => import("./pages/ChiSiamo")) },
    { path: `${prefix}newsletter`, lazy: wrap(() => import("./pages/Newsletter")) },
    { path: `${prefix}contatti`, lazy: wrap(() => import("./pages/Contatti")) },
    { path: `${prefix}privacy-policy`, lazy: wrap(() => import("./pages/PrivacyPolicy")) },
    { path: `${prefix}cookie-policy`, lazy: wrap(() => import("./pages/CookiePolicy")) },
  ];
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    lazy: wrap(() => import("./AppShell")),
    children: [
      ...LOCALES.flatMap(buildLocaleChildren),
      { path: "*", lazy: wrap(() => import("./pages/NotFound")) },
    ],
  },
];
