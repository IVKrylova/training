import { FC, ReactNode } from "react";
import cn from "classnames";

import s from "./H2.module.scss";

interface H2 {
  text: string | ReactNode;
  className?: string;
}

export const H2: FC<H2> = ({ text, className }): ReactNode => {
  return <h2 className={cn(s.title, className)}>{text}</h2>;
};
