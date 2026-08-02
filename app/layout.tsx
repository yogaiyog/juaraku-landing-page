import type { Metadata } from "next";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Display face: rounded and friendly for headlines — carries the "future
// champion" energy of the brand without tipping into childish.
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body face: a clean, premium grotesque for long-form and UI copy.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JuaraKu — Build the Skills That Will Define the Next Generation",
  description:
    "JuaraKu helps children become creators of technology through an enjoyable, structured, project-based journey across coding, Scratch, Python, web development, and AI.",
  keywords: [
    "coding for kids",
    "AI education for children",
    "JuaraKu",
    "kids programming class",
    "Scratch Python course",
  ],
  openGraph: {
    title: "JuaraKu — Build the Skills That Will Define the Next Generation",
    description:
      "From your child's first line of code to becoming an AI creator. Structured, project-based coding and AI education for kids.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
