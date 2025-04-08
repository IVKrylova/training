"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import shortLogo from "../../public/shortLogo.svg";

interface ShortLogoInterface {
  className?: string;
}

export const ShortLogo: FC<ShortLogoInterface> = ({ className }): ReactNode => {
  return (
    <Link href={"/"} className={className}>
      <Image src={shortLogo} alt="logo mollenhauer" width={54} height={41} />
    </Link>
  );
};
