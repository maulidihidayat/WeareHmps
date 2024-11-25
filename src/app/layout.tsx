import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "@/components/SessionWrapper";

// Load the Inter font from Google Fonts
const inter = Inter({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-inter",
});
// const roboto = Inter({
//   weight: ["400", "500", "700", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-inter",
// });
const Parkinsans = Inter({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-inter",
});

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "Hmps Pendidikan Informatika",
  description: "Kepengurusan Harmonia",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
