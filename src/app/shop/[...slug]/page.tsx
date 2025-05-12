import React from "react";
import { Index } from ".";

interface IParams {
  params: { slug: string[] };
}
export const generateMetadata = ({ params }: IParams) => {
  return {
    title: "shop" + params.slug?.[0],
  };
};
export default function Page({ params }: IParams) {
  return <Index id={params?.slug?.[0]}></Index>;
}
