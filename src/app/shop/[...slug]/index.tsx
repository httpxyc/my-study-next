"use client";

import BackHomeButton from "@/components/back-home";
import { Button } from "antd";
import { useState } from "react";

export const Index = ({ id }: { id: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-4xl">
        shop {id} page: {count}
      </h1>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        click me
      </Button>
      <BackHomeButton></BackHomeButton>
    </div>
  );
};
