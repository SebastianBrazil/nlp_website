import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "No Limits Painting",
  description: "Painting Company Specializing in Cabinets - Located in Stockton California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
