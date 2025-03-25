"use client";

import { FC, ReactNode, useState } from "react";
import Image from "next/image";

import { SandwichMenuList} from '@/features/SandwichMenuList/SandwichMenuList'

import logoWhite from "../../public/sandwichMenu.svg";
import s from "./SandwichMenu.module.scss";

export const SandwichMenu: FC = (): ReactNode => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => setIsOpenMenu((prev) => !prev);

  return (
    <div className={s.wrap}>
      <Image
        src={logoWhite}
        alt="menu"
        width={45}
        height={26}
        onClick={handleMenuClick}
      />
			<SandwichMenuList isOpen={isOpenMenu} closeMenu={handleMenuClick} />
    </div>
  );
};
