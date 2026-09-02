import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteMetadata, getStructuredData } from "@/data/seoMetadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: [
    "Digital Marketing Agency",
    "SEO Services",
    "Web Development",
    "Next.js Development",
    "React Development",
    "3D Brand Design",
    "3D Logo Design",
    "YouTube Marketing",
    "Social Media Marketing",
    "UI/UX Design",
    "E-Commerce Stores",
    "Commercial Vehicle Marketing",
    "Digital Marketing Courses",
    "Graphic Design Courses",
    "Web Development Courses",
    "Technology Training Institute",
    "Freelancing Course",
    "Creatives Digital Agency",
  ],
  authors: [{ name: "Creatives Digital Agency & Institute" }],
  creator: "Creatives Digital Agency",
  publisher: "Creatives Digital Agency & Institute",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: "/images/hero-tech.webp",
        width: 1200,
        height: 630,
        alt: "Creatives Digital Agency & Institute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/images/hero-tech.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { organizationSchema, servicesSchema, coursesSchema, faqSchema } = getStructuredData();

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#080B11] text-[#94A3B8] antialiased selection:bg-[#8B5CF6]/30 selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
