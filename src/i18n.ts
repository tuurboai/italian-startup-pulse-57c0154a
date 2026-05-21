import { useLocation } from "react-router-dom";

export type Locale = "it" | "en" | "de";
export const LOCALES: Locale[] = ["it", "en", "de"];

export function detectLocale(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  if (seg === "en" || seg === "de") return seg;
  return "it";
}

export function useLocale(): Locale {
  const { pathname } = useLocation();
  return detectLocale(pathname);
}

/** Prefix an app-relative path with the current locale. Pass paths starting with "/". */
export function lp(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "it") return clean;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/** Strip the locale prefix from a pathname (used to translate the current path to another locale). */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (parts[1] === "en" || parts[1] === "de") {
    parts.splice(1, 1);
  }
  const out = parts.join("/") || "/";
  return out;
}

type Dict = {
  htmlLang: string;
  brand: { tagline: string };
  nav: {
    articles: string;
    interviews: string;
    investments: string;
    guides: string;
    authors: string;
    about: string;
    searchPlaceholder: string;
    subscribe: string;
  };
  footer: {
    description: string;
    sectionsTitle: string;
    allArticles: string;
    magazineTitle: string;
    about: string;
    authors: string;
    newsletter: string;
    contact: string;
    privacy: string;
    cookie: string;
    interviews: string;
    investments: string;
    guides: string;
    trends: string;
    caseStudies: string;
    legalLine: string;
  };
  newsletterBanner: {
    eyebrow: string;
    title: string;
    body: string;
    emailPlaceholder: string;
    cta: string;
  };
  home: {
    docTitle: string;
    eyebrow: string;
    title: string;
    intro: string;
    latestEyebrow: string;
    latestTitle: string;
    allArticles: string;
    whyReadEyebrow: string;
    whyReadTitle: string;
    whyReadBody: string;
    pillar1Title: string;
    pillar1Body: string;
    pillar2Title: string;
    pillar2Body: string;
    pillar3Title: string;
    pillar3Body: string;
    exploreTitle: string;
    exploreBody: string;
    seeAll: string;
  };
  article: {
    minRead: string;
    writtenBy: string;
    aboutAuthor: string;
    categories: string;
    popular: string;
    related: string;
  };
  articlesPage: {
    docTitle: string;
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    filter: string;
    all: string;
  };
  category: { eyebrow: string };
  authorsPage: {
    eyebrow: string;
    title: string;
    body: string;
    articlesCount: (n: number) => string;
  };
  authorPage: {
    eyebrow: string;
    articlesPublished: (n: number) => string;
    articlesBy: (first: string) => string;
  };
  about: {
    docTitle: string;
    eyebrow: string;
    title: string;
    lead: string;
    lead2: string;
    statReaders: string;
    statNewsletter: string;
    statYears: string;
    statYearsValue: string;
    missionTitle: string;
    mission1: string;
    mission2: string;
    mission3: string;
    storyTitle: string;
    story1: string;
    story2: string;
    teamTitle: string;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    cta: string;
    done: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  legal: {
    legalDoc: string;
    lastUpdate: string;
    privacy: string;
    cookie: string;
  };
  notFound: {
    code: string;
    title: string;
    body: string;
    home: string;
    archive: string;
  };
  categoryLabels: Record<CategoryKey, string>;
  categoryDescriptions: Record<CategoryKey, string>;
  categorySlugs: Record<CategoryKey, string>;
};

export type CategoryKey = "interviews" | "investments" | "guides" | "trends" | "case-studies";
export const CATEGORY_KEYS: CategoryKey[] = ["interviews", "investments", "guides", "trends", "case-studies"];

import { strings } from "./i18n.strings";
export const t: Record<Locale, Dict> = strings;

export function categoryLabel(key: CategoryKey, locale: Locale): string {
  return t[locale].categoryLabels[key];
}
export function categorySlug(key: CategoryKey, locale: Locale): string {
  return t[locale].categorySlugs[key];
}
export function categoryFromSlug(slug: string, locale: Locale): CategoryKey | undefined {
  return CATEGORY_KEYS.find((k) => t[locale].categorySlugs[k] === slug);
}
