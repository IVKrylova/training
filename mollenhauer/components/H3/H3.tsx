import { FC, ReactNode } from "react";
import cn from "classnames";

import s from "./H3.module.scss";

interface H3 {
  text: string | ReactNode;
  className?: string;
}

export const H3: FC<H3> = ({ text, className }): ReactNode => {
  return <h3 className={cn(s.title, className)}>{text}</h3>;
};
