import type { Metadata } from "next";
import { Bebas_Neue, Lora } from "next/font/google";
import "./globals.css";

// Google Fonts Integration
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"], // Regular weight for strong headings
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"], // Regular and Bold weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adventure & Travel Agency",
  description: "Unleash your adventurous spirit with our travel services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
