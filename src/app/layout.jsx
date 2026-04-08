import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export as required by Next.js 14+
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#3b82f6",
};

export const metadata = {
  metadataBase: new URL("https://tutorhub.com"),
  title: {
    default: "TutorHub | Personalized Online Tutoring & Academic Excellence",
    template: "%s | TutorHub",
  },
  description:
    "TutorHub connects students with expert tutors for personalized one-on-one online tutoring. Get academic support, exam preparation, and learning guidance across all subjects.",
  keywords: [
    "online tutoring",
    "personalized education",
    "home tutoring",
    "academic support",
    "exam preparation",
    "one-on-one tutoring",
    "subject experts",
    "learning assistance",
  ],
  authors: [{ name: "TutorHub" }],
  creator: "TutorHub",
  publisher: "TutorHub",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tutorhub.com",
    siteName: "TutorHub",
    title: "Tutor Hub | Personalized Online Tutoring & Academic Excellence",
    description:
      "Expert one-on-one online tutoring for all subjects. Personalized learning for academic success.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TutorHub - Online Tutoring Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TutorHub | Personalized Online Tutoring",
    description: "Expert one-on-one online tutoring for all subjects.",
    images: ["/twitter-image.png"],
    creator: "@tutorhub",
  },
  alternates: {
    canonical: "https://tutorhub.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
  appleWebApp: {
    capable: true,
    title: "TutorHub",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "TutorHub",
              url: "https://tutorhub.com",
              logo: "https://tutorhub.com/logo.png",
              description:
                "Online tutoring platform connecting students with expert tutors for personalized learning.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-341-4133395",
                contactType: "customer service",
                email: "tutorhubofficial@gmail.com",
                availableLanguage: "en",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <noscript>
          <div className="p-4 text-center bg-yellow-100 text-yellow-800">
            JavaScript is disabled in your browser. Some features of TutorHub
            may not work properly.
          </div>
        </noscript>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TutorHub",
              url: "https://tutorhub.com",
              logo: "https://tutorhub.com/logo.png",
              description: "Personalized online tutoring platform",
              founder: {
                "@type": "Person",
                name: "TutorHub Team",
              },
              foundingDate: "2024",
            }),
          }}
        />
      </body>
    </html>
  );
}
