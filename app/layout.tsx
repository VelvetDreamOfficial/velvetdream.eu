import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "VelvetDream - Maison créative d'univers fantastiques",
    description:
        "VelvetDream est une maison créative née d'une passion pour l'imaginaire et une esthétique fusionnant douceur, diversité et élégance.",
    generator: "v0.dev",
    keywords: [
        "velvetdream",
        "maison",
        "creative",
        "univers",
        "fantastique",
        "imaginaire",
        "esthetique",
        "douceur",
        "diversite",
        "elegence",
        "velvet",
        "dream",
        "diversity",
        "diversy",
        "diversy.co",
        "co",
        "eu",
        "europe",
        "france",
        "fr",
        "fantasy",
        "furry",
        "fandom",
        "nekoniyah",
        "linktr.ee",
        "linktree",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} font-sans`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
