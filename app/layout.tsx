import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidhant Singhvi | Embedded Systems & Real-time AI",
  description:
    "Computer Engineering @ UC San Diego. Building real-time software for systems that interact with the physical world. Embedded firmware, real-time pipelines, on-device AI.",
  keywords: [
    "embedded systems",
    "firmware",
    "real-time pipelines",
    "AI hardware",
    "robotics",
    "UCSD",
    "systems engineering",
  ],
  openGraph: {
    title: "Sidhant Singhvi",
    description: "Building real-time software for systems that interact with the physical world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
