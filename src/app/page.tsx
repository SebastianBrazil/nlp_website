"use client"

import FooterComponent from "@/Components/FooterComponent";
import HeroComponent from "@/Components/HeroComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const goToGallery = () => {
    router.push('/gallery');
  }

  const goToAbout = () => {
    router.push('/about');
  }

  return (
    <>
      <div className="min-h-screen h-full grid">
        <div>
          <NavbarComponent />
          <HeroComponent />

          <main className="">
            <p>page start</p>
          </main>
        </div>

        <div className='inline-block self-end'>
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
