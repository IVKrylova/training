"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { useScroll } from "@/shared/hooks/useScroll";
import { HEADER_SCROLL } from "@/shared/constants/styles";

import s from "./Logo.module.scss";
import logoWhite from "../../public/logo_white.svg";
import logoBlue from "../../public/logoBlue.svg";

export const Logo: FC = (): ReactNode => {
  const isScrolled = useScroll(HEADER_SCROLL);

  return (
    <Link href={"/"}>
      <Image
        className={s.logo}
        src={isScrolled ? logoBlue : logoWhite}
        alt="logo mollenhauer"
        width={218}
        height={38}
      />
    </Link>
  );
};
