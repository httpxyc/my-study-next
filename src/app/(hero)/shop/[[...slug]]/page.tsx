import HeroLayoutIndex from "@/components/hero-layout";
import { Button } from "antd";
import React from "react";

export default function Page({ params }: { params: { slug?: string[] } }) {
  return (
    <HeroLayoutIndex>
      <h1>shop {params?.slug?.[0]} page</h1>
      <Button type="primary">click me</Button>
    </HeroLayoutIndex>
  );
}
