import Image from "next/image";
import React from "react";

interface IProps {
  imgObj: { src: string; alt: string };
  centerText?: string;
}
export default function DemoPageIndex({ imgObj, centerText }: IProps) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full absolute -z-10">
        {imgObj ? (
          <Image
            src={imgObj?.src}
            alt={imgObj?.alt}
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
      </div>
      <h1 className="text-5xl">{centerText ?? ""}</h1>
    </div>
  );
}
