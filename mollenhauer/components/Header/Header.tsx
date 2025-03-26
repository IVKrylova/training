"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";

import { Logo } from "@/components/Logo/Logo";
import { SandwichMenu } from "@/features/SandwichMenu/SandwichMenu";
import { Language } from "@/features/Language/Language";
import { Button } from "../Button/Button";

import { useScroll } from "@/shared/hooks/useScroll";
import { menu } from "@/shared/mocks/menuList";
import { HEADER_SCROLL } from "@/shared/constants/styles";

import s from "./Header.module.scss";

export const Header: FC = (): ReactNode => {
  const isScrolled = useScroll(HEADER_SCROLL);

  return (
    <header className={cn(s.header, { [s.scrolled]: isScrolled })}>
      <Logo />
      <div className={s.menuWrap}>
        <ul className={s.list}>
          {menu.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={() => {}}
        type="button"
        text="Contact Us"
        variant="orange"
        clssName={s.button}
      />
      <div className={s.langWrap}>
        <Language />
      </div>
      <SandwichMenu />
    </header>
  );
};
