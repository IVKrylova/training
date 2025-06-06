import { ReactNode, FC } from "react";
import cn from "classnames";
import Link from "next/link";

import { CloseIcon } from "@/components/Icons/CloseIcon/CloseIcon";
import { Language } from "@/features/Language/Language";
import { Button } from "@/components/Button/Button";
import { DocList } from "@/components/DocList/DocList";

import s from "./SandwichMenuList.module.scss";

import { menu } from "@/shared/mocks/content";
interface SandwichMenuList {
  isOpen: boolean;
  closeMenu: () => void;
}

export const SandwichMenuList: FC<SandwichMenuList> = ({
  isOpen,
  closeMenu,
}): ReactNode => {
  return (
    <div className={cn({ [s.visible]: isOpen }, s.wrap)}>
      <div className={s.header}>
        <Language />
        <CloseIcon onClick={closeMenu} />
      </div>
      <ul className={s.list}>
        {menu.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <Button
        onClick={() => {}}
        type="button"
        text="Contact Us"
        variant="orange"
      />
      <DocList />
    </div>
  );
};
