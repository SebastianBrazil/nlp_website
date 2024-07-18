import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import HeroComponent from "@/components/HeroComponent";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="min-h-screen h-full grid">

          <div>
            <NavbarComponent />
            <HeroComponent />

            <div className="flex justify-center my-10">
              <main className="w-[80%]">
                {children}
              </main>
            </div>

          </div>
          
          <div className='inline-block self-end'>
            <FooterComponent />
          </div>

        </div>
      </body>
    </html>
  );
}
