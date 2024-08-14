import Image from "next/image";
import LayoutComponent from "@/components/formatting/LayoutComponent";

export default function Home() {
  return (
    <LayoutComponent isHero={true} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
      <div className="flex justify-center my-10">
        <main className="w-[70%]">
          <div className="grid grid-cols-2">
            <p className="col-span-1 text-xl font-gilda mr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className="col-span-1 ml-4">
              <div className="w-full h-full relative">
                <Image
                  fill={true}
                  placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII="
                  loading="lazy"
                  className=""
                  src={"/assets/heroPlaceholder.png"}
                  alt="Home Image"
                // sizes="50vw"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutComponent>
  );
}
