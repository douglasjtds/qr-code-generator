import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generate Your Own Qr Code",
  description: "This is a simple website for helping you create your Qr Code easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark w-full place-content-center grid h-full">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
