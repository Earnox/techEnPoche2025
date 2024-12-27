import "./globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <NavBar />
        <main className='min-h-screen pt-16 pb-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}