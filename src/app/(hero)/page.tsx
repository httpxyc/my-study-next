import DemoPageIndex from "@/components/demo-layout/Index";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};
export default function Page() {
  return (
    <DemoPageIndex
      imgObj={{ src: "/home.jpeg", alt: "home img" }}
      centerText="Home"
    ></DemoPageIndex>
  );
}
