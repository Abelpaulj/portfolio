import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Abel Paul John | Embedded & FPGA Engineer",
    description: "Portfolio of Abel Paul John. Embedded & FPGA-focused engineer bridging the gap between circuit design and software tooling.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
            <body className="min-h-screen flex flex-col antialiased">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
