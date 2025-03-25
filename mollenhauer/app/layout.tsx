import type { Metadata } from "next";
import { ReactNode } from "react";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";


const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
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
      <body className={sourceCodePro.variable}>
        {children}
      </body>
    </html>
  );
}
