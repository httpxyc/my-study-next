"use client";
import CenterLayoutIndex from "@/components/center-layout";
import { Button } from "antd";
import React, { useState } from "react";

export default function Page({ params }: { params: { slug: string[] } }) {
  const [count, setCount] = useState(0);
  return (
    <CenterLayoutIndex>
      <h1 className="text-4xl">
        shop {params?.slug?.[0]} page: {count}
      </h1>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        click me
      </Button>
    </CenterLayoutIndex>
  );
}
