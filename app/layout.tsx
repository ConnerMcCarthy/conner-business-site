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
  title: "Conner McCarthy Websites",
  description: "Professional & personal websites with zero upfront cost.",
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
        url: "https://connermccarthy.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  // ❌ Don't put fb:app_id in `other` — Next will emit name="fb:app_id"
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
