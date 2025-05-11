"use client";
import Link from "next/link";
import React from "react";
import { links } from "./link-config";
import { usePathname } from "next/navigation";

export default function HeaderLink() {
  const pathName = usePathname();
  // const whitePaths = [...links.map((item) => item.href), "/"] as string[];
  // const isWhite = whitePaths.includes(pathName);
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8">
        <Link href="/" className="text-3xl font-bold ">
          Home
        </Link>
        <div className="flex justify-end gap-2 text-xl">
          {links.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className={pathName === item.href ? "text-yellow-200" : ""}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
