import DemoPageIndex from "@/components/demo-layout/Index";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "demo1",
};
export default function Page() {
  return (
    <DemoPageIndex
      imgObj={{ src: "/demo1.jpg", alt: "demo1 img" }}
      centerText="demo1"
    ></DemoPageIndex>
  );
}
