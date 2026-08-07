// Import typu wpisu z kolekcji Astro.
import type { CollectionEntry } from "astro:content";

// Wykorzystujemy istniejący parser Astroplate.
import { getSinglePage } from "@/lib/contentParser.astro";

// Funkcja sortująca używana już w projekcie.
import { sortByDate } from "@/lib/utils/sortFunctions";

// Skrócona nazwa typu wpisu blogowego.
export type BlogArticle = CollectionEntry<"blog">;

/**
 * Parametry filtrowania artykułów.
 */
export interface ArticleFilters {
  featured?: boolean;

  services?: string[];

  propertyTypes?: string[];

  categories?: string[];

  locations?: string[];

  limit?: number;
}

/**
 * Pobiera artykuły z kolekcji blog
 * i opcjonalnie filtruje wyniki.
 */
export async function getArticles(
  filters: ArticleFilters = {},
): Promise<BlogArticle[]> {

  const {
    featured,
    services = [],
    propertyTypes = [],
    categories = [],
    locations = [],
    limit,
  } = filters;

  let articles = await getSinglePage("blog");

  articles = sortByDate(articles);

  if (featured !== undefined) {
    articles = articles.filter(
      (article) => article.data.featured === featured,
    );
  }

  if (services.length > 0) {
    articles = articles.filter((article) =>
      article.data.services?.some((service) =>
        services.includes(service),
      ),
    );
  }

  if (propertyTypes.length > 0) {
    articles = articles.filter((article) =>
      article.data.property_types?.some((type) =>
        propertyTypes.includes(type),
      ),
    );
  }

  if (categories.length > 0) {
    articles = articles.filter((article) =>
      article.data.categories?.some((category) =>
        categories.includes(category),
      ),
    );
  }

  if (locations.length > 0) {
    articles = articles.filter((article) =>
      article.data.locations?.some((location) =>
        locations.includes(location),
      ),
    );
  }

  if (limit) {
    articles = articles.slice(0, limit);
  }

  return articles;
}