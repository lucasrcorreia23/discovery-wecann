import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
      className={jetbrainsMono.variable}
    >
      <body>{children}</body>
    </html>
  );
}
