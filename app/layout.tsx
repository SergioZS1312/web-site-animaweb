import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const siteUrl = "https://animaweb.vercel.app";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ANIMAWEB | Damos vida a tu marca",
    template: "%s | ANIMAWEB",
  },
  description:
    "Impresion publicitaria, estampado, estrategia digital y produccion de video para emprendedores y pequenas empresas. Convierte visitas en clientes con ANIMAWEB.",
  keywords: [
    "impresion publicitaria",
    "estampado DTF",
    "serigrafia",
    "diseno web",
    "landing pages",
    "automatizacion digital",
    "video corporativo",
    "ANIMAWEB",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "ANIMAWEB",
    title: "ANIMAWEB | Damos vida a tu marca",
    description:
      "Ayudamos a emprendedores y pymes a crecer con impresion, estampado, estrategia digital y produccion de video.",
    images: [
      {
        url: "/images/og-animaweb.jpg",
        width: 1200,
        height: 630,
        alt: "ANIMAWEB - Damos vida a tu marca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANIMAWEB | Damos vida a tu marca",
    description:
      "Servicios creativos y digitales para impulsar tu negocio y generar clientes.",
    images: ["/images/og-animaweb.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ANIMAWEB",
    image: `${siteUrl}/images/og-animaweb.jpg`,
    url: siteUrl,
    telephone: "+56-9-0000-0000",
    email: "contacto@animaweb.com",
    slogan: "Damos vida a tu marca.",
    description:
      "Empresa creativa especializada en impresion publicitaria, estampado, estrategia digital y produccion de video.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
    },
    areaServed: "Chile",
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.facebook.com/",
    ],
  };

  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
