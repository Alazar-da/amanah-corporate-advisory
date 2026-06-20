import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amanahcorporateadvisory.com"),

  title: {
    default: "Amanah Corporate Advisory | Strategic Business Setup in UAE",
    template: "%s | Amanah Corporate Advisory",
  },

  description:
    "Amanah Corporate Advisory provides expert business setup, company formation, banking assistance, visa services, and corporate advisory solutions across the UAE and international markets.",

  keywords: [
    "UAE business setup",
    "company formation UAE",
    "corporate advisory",
    "business consultancy UAE",
    "banking solutions",
    "residency services",
    "visa services UAE",
    "offshore company setup",
    "free zone company formation",
    "Dubai business setup",
    "international expansion",
  ],

  authors: [
    {
      name: "Amanah Corporate Advisory",
    },
  ],

  creator: "Amanah Corporate Advisory",

  publisher: "Amanah Corporate Advisory",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanahcorporateadvisory.com",
    siteName: "Amanah Corporate Advisory",
    title: "Amanah Corporate Advisory | Strategic Business Setup in UAE",
    description:
      "Expert business setup, corporate advisory, banking solutions, residency services, and international expansion support tailored to your business goals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amanah Corporate Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amanah Corporate Advisory | Strategic Business Setup in UAE",
    description:
      "Expert business setup, company formation, banking assistance, residency services, and corporate advisory solutions in the UAE.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/og-image.png",
    shortcut: "/og-image.png",
    apple: "/og-image.png",
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Amanah Corporate Advisory",
      url: "https://amanahcorporateadvisory.com",
      logo: "https://amanahcorporateadvisory.com/og-image.png",
      email: "info@amanahcorporateadvisory.com",
      telephone: "+971504476610",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
      },
      areaServed: "United Arab Emirates",
      serviceType: [
        "Business Setup",
        "Corporate Advisory",
        "Banking Solutions",
        "Visa Services",
      ],
    }),
  }}
/>