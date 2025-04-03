import { FC, ReactNode } from "react";
import cn from "classnames";

import s from "./ExpertiseCard.module.scss";
import { PlusIcon } from "../Icons/PlusIcon/PlusIcon";
import { H3 } from "../H3/H3";

interface ExpertiseCard {
  id: string;
  title: string;
}

export const ExpertiseCard: FC<ExpertiseCard> = ({ id, title }): ReactNode => {
  return (
    <div
      className={cn(s.card, {
        [s.bg01]: id === "01",
        [s.bg02]: id === "02",
        [s.bg03]: id === "03",
        [s.bg04]: id === "04",
        [s.bg05]: id === "05",
        [s.bg06]: id === "06",
      })}
    >
      <div className={s.number}>{id}</div>
      <PlusIcon className={s.icon} />
      <H3 text={title} className={s.title} />
    </div>
  );
};
