import type { Metadata } from "next";
import { Poppins, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import NextTopLoader from "nextjs-toploader";

// Google Fonts Integration
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"], // Regular and Semi-bold
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
  weight: ["400", "700"], // Regular and Bold weights
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing_script",
  weight: ["400"], // Regular weight only (use sparingly)
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
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} ${dancingScript.variable} antialiased`}
      >
        {/* Announcement Component */}
        <main className="pt-32">
          <NextTopLoader color="white" />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
