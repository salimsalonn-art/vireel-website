import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { Analytics } from "@vercel/analytics/next"; // 1. Add the import up here
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vireel Agency", 
  description: "We build fast, affordable websites and mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <Navbar /> 
        
        {/* 2. Wrapped children in main with flex-grow to push footer down */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer /> {/* 3. Added Footer right at the bottom */}
        
        {/* 4. DROP THE COMPONENT HERE! */}
        <Analytics /> 
        
      </body>
    </html>
  );
}