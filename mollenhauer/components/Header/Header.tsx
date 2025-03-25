import { FC, ReactNode } from "react";

import s from "./Header.module.scss";
import { Logo } from "@/components/Logo/Logo";
import { SandwichMenu } from "@/features/SandwichMenu/SandwichMenu";

export const Header: FC = (): ReactNode => {
  return (
    <header className={s.header}>
      <Logo />
      <SandwichMenu />
    </header>
  );
};
