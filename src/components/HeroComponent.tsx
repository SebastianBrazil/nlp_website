"use client"

import { HeroProps } from "@/interfaces/interface";
import Image from "next/image";
import React from "react";

const HeroComponent = (props: HeroProps) => {
  return (
    <>
      <section>
        <div className="z-10 w-screen h-[500px] relative">
          <Image
            fill={true}
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII="
            priority={true}
            className={props.classTags}
            src={props.src}
            alt={props.alt}
            sizes={"100vw"}
          />
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
