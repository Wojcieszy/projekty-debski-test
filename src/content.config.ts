import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";



// Kolekcja artykułów
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    // Podstawowe informacje
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    cover_fit: z.boolean().optional(),
    author: z.string().default("Admin"),

    // Kategorie i tagi
    categories: z.array(z.string()).default(() => ["others"]),
    tags: z.array(z.string()).default(() => ["others"]),

    // NOWE POLA

    // Czy artykuł ma być promowany na stronie głównej
    featured: z.boolean().optional(),

    // Powiązanie z usługami
    // np. swiadectwa, projekty, audyty
    services: z.array(z.string()).optional(),

    // Typ nieruchomości
    // np. mieszkanie, dom, lokal
    property_types: z.array(z.string()).optional(),

    // Lokalizacja
    // np. warszawa, piaseczno
    locations: z.array(z.string()).optional(),

    // Opcjonalny czas czytania
    reading_time: z.number().optional(),

    draft: z.boolean().optional(),
  }),
});



// Strona główna
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),

    features: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        bulletpoints: z.array(z.string()),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

// CTA
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// Opinie
const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        designation: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

// Eksport kolekcji
export const collections = {
  homepage: homepageCollection,
  blog: blogCollection,

  ctaSection: ctaSectionCollection,
  testimonialSection: testimonialSectionCollection,
};