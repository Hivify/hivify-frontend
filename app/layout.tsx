import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SerwistProvider from "./SerwistProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hivefy - Bygg din community",
  description:
    "Plattformen för föreningar som vill samla och strukturera all information på ett ställe. Skapa din community på 5 minuter – utan tekniskt krångel.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hivefy",
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <SerwistProvider />
        {children}
      </body>
    </html>
  );
}
