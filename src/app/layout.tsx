import type { Metadata } from "next";
import { Poppins, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

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
  title: "Inspired Events And Tours | Your Gateway to Unforgettable Travel",
  description:
    "Explore a wide range of curated travel experiences with Inspired Events and Tours. Join us for thrilling motorcycle trips, car road trips, track days, and bike adventures across Europe, Morocco, and the UK in 2025 and 2026. Adventure, culture, and scenic beauty await!",
  keywords: [
    "Inspired Events and Tours",
    "travel",
    "tours",
    "motorcycle trips",
    "bike tours",
    "European road trips",
    "2025 Morocco Bike Trip",
    "2025 European Car Road Trips",
    "2025 European Car Track Days Trips",
    "2025 Land Rover Trips",
    "2025 European Motorcycle Track Days Trips",
    "2025 European Motorcycle Road Trips",
    "2025 UK Bike Trips",
    "2026 European Bike Road Trips",
    "2026 European Bike Track Days Trips",
    "2026 Morocco Bike Trips",
    "2026 European Car Road Trips",
    "adventure tours",
    "cultural experiences",
    "scenic journeys",
    "Morocco bike adventures",
    "Land Rover expeditions",
    "track days tours",
    "unforgettable travel experiences",
  ].join(", "),
  applicationName: "Inspired Events And Tours",
  authors: {
    name: "Inspired Events And Tours Team",
    url: "https://inspiredeventsandtours.com",
  },
  creator: "Inspired Events And Tours Team",
  openGraph: {
    type: "website",
    url: "https://inspiredeventsandtours.com",
    title: "Inspired Events And Tours | Your Gateway to Unforgettable Travel",
    description:
      "Join Inspired Events and Tours for exclusive travel experiences. Explore motorcycle and car trips, track days, and bike tours across Europe, Morocco, and the UK in 2025 and 2026. Your next adventure starts here!",
    images: [
      {
        url: "https://inspiredeventsandtours.com/logo.png",
        alt: "Inspired Events And Tours Logo",
      },
    ],
    siteName: "Inspired Events And Tours",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspired Events And Tours | Your Gateway to Unforgettable Travel",
    description:
      "Discover motorcycle and car road trips, bike adventures, and track day tours with Inspired Events and Tours. Embark on unique journeys in 2025 and 2026.",
    images: ["https://inspiredeventsandtours.com/hero.webp"],
  },
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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}
          />
        )}
        <NextTopLoader color="white" />
        <ChatWidget />
        {/* Announcement Component */}
        <main className="pt-32">
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
