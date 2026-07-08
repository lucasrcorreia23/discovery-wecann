import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeCann Care — Discovery",
  description:
    "Documentação viva do Discovery da WeCann Care · Prontuário Inteligente da WeCann.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={inter.variable}
    >
      <body>{children}</body>
    </html>
  );
}
