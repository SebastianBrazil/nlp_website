import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

export const metadata: Metadata = {
  title: "No Limits Painting",
  description: "Painting Company Specializing in Cabinets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen h-full grid">
          <div>
            <NavbarComponent />
            {children}
          </div>

          <div className='inline-block self-end'>
            <FooterComponent />
          </div>
        </div>
      </body>
    </html>
  );
}
