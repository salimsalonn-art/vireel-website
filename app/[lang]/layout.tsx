import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "../globals.css";
import { getDictionary } from "../../getDictionary";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vireel Agency", 
  description: "We build fast, affordable websites and mobile apps.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  return (
    <html lang={lang || "en"} className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="font-sans min-h-full flex flex-col" suppressHydrationWarning>
        
        <Navbar dict={dict.nav} /> 
        
        <main className="flex-grow">
          {children}
        </main>

        {/* Updated Footer to receive the dictionary and language! */}
        <Footer dict={dict.footer} lang={lang} /> 
        
        <Analytics /> 
      </body>
    </html>
  );
}