import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Lewis - Senior Backend & Platform Engineer",
  description: "Senior backend-focused software engineer with extensive experience designing and delivering secure, cloud-native financial and eligibility platforms in highly regulated environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

