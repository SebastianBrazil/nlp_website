import Image from "next/image";
import LayoutComponent from "@/components/formatting/LayoutComponent";

export default function Home() {
  return (
    <LayoutComponent isHero={true} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
      <div className="flex justify-center my-10">
        <main className="w-[70%] max-w-[1344px]">
          <div className="grid grid-cols-2">
            <div className="col-span-1 mr-4">
              <div className="relative w-full h-40">
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

            <p className="col-span-1 text-xl font-gilda mr-4">No Limits Painting is a company that specializes in cabinet stains and paint finishes. Based in Stockton, CA, we have served central California, the Bay Area, and beyond for over 15 years. We also finish doors and other furniture as well. If you need a job done right, feel free to contact us.</p>
          </div>
        </main>
      </div>
    </LayoutComponent>
  );
}
