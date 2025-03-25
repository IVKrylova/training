import { ReactNode, FC } from "react";

import s from "./SandwichIcon.module.scss";

interface SandwichIcon {
  onClick: () => void;
}

export const SandwichIcon: FC<SandwichIcon> = ({ onClick }): ReactNode => {
  return (
    <svg
      width="45"
      height="26"
      viewBox="0 0 45 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="button"
      aria-label="icon sandwich menu"
      onClick={onClick}
      className={s.icon}
    >
      <line
        x1="11"
        y1="5"
        x2="45"
        y2="5"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <line
        x1="0"
        y1="13"
        x2="45"
        y2="13"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="21"
        x2="45"
        y2="21"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
