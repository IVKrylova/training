import type { Metadata } from "next";
import { ReactNode } from "react";
import { Source_Code_Pro } from "next/font/google";
import cn from "classnames";

import { Header } from "@/components/Header/Header";

import "./globals.css";
import s from "./page.module.scss";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["300", "400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Molenhauer",
  description: "Molenhauer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(sourceCodePro.variable, s.body)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
