import HeaderLink from "@/components/header/Header";
import classes from "./global.module.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.container}>
      <HeaderLink></HeaderLink>
      {children}
    </div>
  );
}
