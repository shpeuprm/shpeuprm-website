import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SHPE UPRM - Society of Hispanic Professional Engineers",
    template: "%s | SHPE UPRM",
  },
  description:
    "Society of Hispanic Professional Engineers at University of Puerto Rico, Mayagüez Campus. Join us in empowering Hispanic engineers and promoting diversity in STEM.",
  keywords: [
    "SHPE",
    "Hispanic Engineers",
    "UPRM",
    "University of Puerto Rico",
    "Engineering",
    "STEM",
    "Professional Development",
  ],
  authors: [{ name: "SHPE UPRM" }],
  icons: {
    icon: "/PNG/SHPE_logo_vert_University of Puerto Rico_DKBG.png",
    shortcut: "/PNG/SHPE_logo_vert_University of Puerto Rico_DKBG.png",
    apple: "/PNG/SHPE_logo_vert_University of Puerto Rico_DKBG.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SHPE UPRM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
