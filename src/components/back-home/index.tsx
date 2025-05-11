import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function BackHomeButton() {
  return (
    <Button className="mt-4">
      <Link href="/">Back Home</Link>
    </Button>
  );
}
