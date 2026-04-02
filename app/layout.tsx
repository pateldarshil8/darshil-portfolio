import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Darshil Patel | Cybersecurity & Data Analyst",
  description: "Futuristic portfolio of Darshil Patel, Cybersecurity MS student at GWU.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-blue-500/30">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}