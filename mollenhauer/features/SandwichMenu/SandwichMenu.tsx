"use client";

import { FC, ReactNode, useState } from "react";

import { SandwichMenuList } from "@/features/SandwichMenuList/SandwichMenuList";
import { SandwichIcon } from "@/components/Icons/SandwichIcon/SandwichIcon";

import s from "./SandwichMenu.module.scss";

export const SandwichMenu: FC = (): ReactNode => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => setIsOpenMenu((prev) => !prev);

  return (
    <div className={s.wrap}>
      <SandwichIcon onClick={handleMenuClick} />
      <SandwichMenuList isOpen={isOpenMenu} closeMenu={handleMenuClick} />
    </div>
  );
};
