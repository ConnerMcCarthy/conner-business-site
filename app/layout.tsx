import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Design for Small Businesses | Conner McCarthy",
  description: "Custom website design for small businesses. Fast, secure, modern sites with zero upfront cost and ongoing support.",
  icons: {
    icon: "/conner-headshot-v2.png",
  },
  openGraph: {
    title: "Conner McCarthy Websites",
    description: "Professional & personal websites. Zero upfront cost.",
    url: "https://connermccarthy.com",
    siteName: "Conner McCarthy",
    images: [
      {
        url: "https://connermccarthy.com/og-v2.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Conner McCarthy Websites",
    description: "Professional & personal websites. Zero upfront cost.",
    images: ["https://connermccarthy.com/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://connermccarthy.com"),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="theme1" suppressHydrationWarning>
      <head>
        {/* Facebook requires property= (NOT name=) */}
        <meta property="fb:app_id" content="1448812570281584" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
