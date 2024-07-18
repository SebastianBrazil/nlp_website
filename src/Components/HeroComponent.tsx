import Image from "next/image";
import React from "react";

const HeroComponent = () => {
  return (
    <>
      <section>
        <div className="w-screen h-[500px] relative">
          <Image
            fill={true}
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII="
            // priority={true}
            className=""
            src={"/assets/heroPlaceholder.png"}
            alt="Hero Image"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
