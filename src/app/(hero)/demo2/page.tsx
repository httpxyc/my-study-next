import DemoPageIndex from "@/components/demo-layout/Index";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "demo2",
};
export default function Page() {
  return (
    <DemoPageIndex
      imgObj={{ src: "/demo2.jpg", alt: "demo2 img" }}
      centerText="demo2"
    ></DemoPageIndex>
  );
}
