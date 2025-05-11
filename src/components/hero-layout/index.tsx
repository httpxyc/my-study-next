import React from "react";

export default function HeroLayoutIndex({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {children}
    </div>
  );
}
