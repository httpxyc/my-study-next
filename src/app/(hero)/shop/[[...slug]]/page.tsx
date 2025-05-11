import HeroLayoutIndex from "@/components/hero-layout";
import React from "react";

export default function Page({ params }: { params: { slug?: string[] } }) {
  return <HeroLayoutIndex>shop {params?.slug?.[0]} page</HeroLayoutIndex>;
}
