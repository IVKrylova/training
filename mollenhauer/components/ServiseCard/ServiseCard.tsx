import { FC, ReactNode } from "react";

import { PlusIcon } from "../Icons/PlusIcon/PlusIcon";

import s from "./ServiseCard.module.scss";

interface SevriseCard {
  title: string;
}

export const SevriseCard: FC<SevriseCard> = ({ title }): ReactNode => {
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      <PlusIcon />
    </div>
  );
};
