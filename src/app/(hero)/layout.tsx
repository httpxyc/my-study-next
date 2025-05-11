import HeaderLink from "@/components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderLink></HeaderLink>
      {children}
    </>
  );
}
