import type { Metadata } from "next";

import { cn } from "@/utils/cn";

import "./globals.css";

import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  description: "Train Hiragana and Katakana",
  title: "KanaNext",
};
const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(nunito.className, "antialiased")}>{children}</body>
    </html>
  );
}
