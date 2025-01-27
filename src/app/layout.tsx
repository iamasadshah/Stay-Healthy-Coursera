import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Stay Healthy - Your Health, Our Responsibility",
  description: "Expert medical care and personalized health solutions for a healthier, happier life.",
  keywords: "example, website, products, showcase, demonstration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50 ">
        {children}
      </body>
    </html>
  );
}
