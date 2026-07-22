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
  metadataBase: new URL("https://aitoolkithub.in"),

  title: {
    default: "AI Toolkit Hub - Discover the Best AI Tools",
    template: "%s | AI Toolkit Hub",
  },

  description:
    "Discover, compare and explore the world's best AI tools for writing, coding, image generation, video editing, marketing, productivity and more.",

  keywords: [
    "AI Tools",
    "AI Directory",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Midjourney",
    "AI Toolkit Hub",
    "Best AI Tools",
    "AI Software",
    "AI Apps",
  ],

  authors: [
    {
      name: "AI Toolkit Hub",
    },
  ],

  creator: "AI Toolkit Hub",

  publisher: "AI Toolkit Hub",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Toolkit Hub",
    description:
      "Discover and compare the world's best AI tools in one place.",
    url: "https://aitoolkithub.in",
    siteName: "AI Toolkit Hub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Toolkit Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Toolkit Hub",
    description:
      "Discover and compare the world's best AI tools in one place.",
    images: ["/logo/logo.png"],
  },

  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}