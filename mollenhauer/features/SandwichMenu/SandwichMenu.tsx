"use client";

import { FC, ReactNode, useState } from "react";
import cn from "classnames";

import { SandwichMenuList } from "@/features/SandwichMenuList/SandwichMenuList";
import { SandwichIcon } from "@/components/Icons/SandwichIcon/SandwichIcon";

import { useScroll } from "@/shared/hooks/useScroll";
import { HEADER_SCROLL } from "@/shared/constants/styles";

import s from "./SandwichMenu.module.scss";

export const SandwichMenu: FC = (): ReactNode => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const isScrolled = useScroll(HEADER_SCROLL);

  const handleMenuClick = () => setIsOpenMenu((prev) => !prev);

  return (
    <div className={s.wrap}>
      <SandwichIcon
        onClick={handleMenuClick}
        className={cn({ [s.scrolled]: isScrolled })}
      />
      <SandwichMenuList isOpen={isOpenMenu} closeMenu={handleMenuClick} />
    </div>
  );
};
