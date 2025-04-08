import type { Metadata } from "next";
import { ReactNode } from "react";
import cn from "classnames";
import Head from "next/head";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import "./globals.css";
import s from "./page.module.scss";

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
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/iay1zki.css" />{" "}
      </Head>
      <body className={cn(s.body)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
