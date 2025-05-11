import DemoPageIndex from "@/components/demo-layout/Index";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "demo3",
};
export default function Page() {
  return (
    <DemoPageIndex
      imgObj={{ src: "/demo3.jpeg", alt: "demo3 img" }}
      centerText="demo3"
    ></DemoPageIndex>
  );
}
