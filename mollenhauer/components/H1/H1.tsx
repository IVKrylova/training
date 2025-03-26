import { FC, ReactNode } from "react";
import cn from "classnames";

import s from "./H1.module.scss";

interface H1 {
  text: string | ReactNode;
  className?: string;
}

export const H1: FC<H1> = ({ text, className }): ReactNode => {
  return <h1 className={cn(s.title, className)}>{text}</h1>;
};
