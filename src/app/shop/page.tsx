import BackHomeButton from "@/components/back-home";
import { Metadata } from "next";
import React from "react";
import ShopList from "./components/ShopList";

export const metadata: Metadata = {
  title: "shop list",
};

export default function page() {
  return (
    <div>
      <ShopList></ShopList>
      <BackHomeButton></BackHomeButton>
    </div>
  );
}
