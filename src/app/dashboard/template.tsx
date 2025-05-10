"use client";
import React, { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-dashed border-black p-4">
      <h5>dashboard Template: {count}</h5>
      <button
        onClick={() => setCount(count + 1)}
        className="my-2 p-2 bg-black text-white rounded-md"
      >
        increment
      </button>
      <div>{children}</div>
    </div>
  );
}
