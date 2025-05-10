"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const pathName = usePathname();
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto w-1/2">
      <div className="flex gap-4 font-bold text-lg mb-4">
        <Link
          href="/dashboard/about"
          className={pathName === "/dashboard/about" ? "text-purple-500" : ""}
        >
          about
        </Link>
        <Link
          href="/dashboard/setting"
          className={pathName === "/dashboard/setting" ? "text-purple-500" : ""}
        >
          setting
        </Link>
      </div>
      <h5>dashboard layout: {count}</h5>
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
