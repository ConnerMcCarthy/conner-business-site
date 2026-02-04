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
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="theme1" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

