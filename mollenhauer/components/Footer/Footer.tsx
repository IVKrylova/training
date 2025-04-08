import { FC, ReactNode } from "react";

import { DocList } from "../DocList/DocList";

import s from "./Footer.module.scss";

export const Footer: FC = (): ReactNode => {
  return (
    <footer className={s.footer}>
      <DocList className={s.list} />
      <div>Copyright : mbp | Mollenhauer Beraten & Planen GmbH</div>
      <div>Consulting & Structural Engineering Design</div>
    </footer>
  );
};
