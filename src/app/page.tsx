"use client"

import FooterComponent from "@/Components/FooterComponent";
import HeroComponent from "@/Components/HeroComponent";
import NavbarComponent from "@/Components/NavbarComponent";

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full grid">

        <div>

          <NavbarComponent />
          <HeroComponent />

          <div className="flex justify-center my-10">
            <main className="w-[80%]">
              <p>page start</p>
            </main>
          </div>

        </div>

        <div className='inline-block self-end'>
          <FooterComponent />
        </div>

      </div>
    </>
  );
}
