import { SITE_CONTACT, SERVICES_DATA, COURSES_DATA, FAQ_ITEMS } from "./siteContent";

export const siteMetadata = {
  title: "CREATIVES — Digital Agency & Technology Training Institute",
  description: "Creatives Digital Agency & Institute builds bespoke digital solutions for scaling businesses and trains aspiring individuals in high-demand technology, 3D design, web development, and freelancing from zero.",
  url: "https://creativesdigitalagency.com",
  siteName: "Creatives Digital Agency & Institute",
  locale: "en_US",
  type: "website",
};

export function getStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Creatives Digital Agency & Institute",
    url: "https://creativesdigitalagency.com",
    logo: "https://creativesdigitalagency.com/images/hero-tech.webp",
    description: "International digital agency providing web development, SEO, 3D design, video marketing, and practical technology career training.",
    telephone: SITE_CONTACT.phoneInternational,
    email: SITE_CONTACT.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      SITE_CONTACT.whatsAppUrl,
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@type": "Organization",
          name: "Creatives Digital Agency",
        },
      },
    })),
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: COURSES_DATA.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.summary,
        provider: {
          "@type": "EducationalOrganization",
          name: "Creatives Training Institute",
          sameAs: "https://creativesdigitalagency.com#institute",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return {
    organizationSchema,
    servicesSchema,
    coursesSchema,
    faqSchema,
  };
}
