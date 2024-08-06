import { HeroProps } from "@/interfaces/interface";
import Image from "next/image";
import React from "react";

const HeroComponent = (props: HeroProps) => {
  return (
    <>
      <section>
        <div className="z-10 w-full h-[500px] relative">
          <Image
            fill={true}
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
