import React from "react";

export default function HeroLayoutIndex({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {children}
    </div>
  );
}
