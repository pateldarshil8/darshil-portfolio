import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darshil Patel | Security, AI & Software",
  description:
    "Portfolio of Darshil Patel — MS Cybersecurity candidate at GWU working across security, AI, data, and software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased selection:bg-indigo-500/30 font-[family-name:var(--font-body)]">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
