import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antigua & Barbuda Travel Guide",
  description: "See the exciting views of Antigua and Barbuda's beaches, cities, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zvb0avf.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
