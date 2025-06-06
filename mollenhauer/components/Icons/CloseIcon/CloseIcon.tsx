import { ReactNode, FC } from "react";

import s from "./CloseIcon.module.scss";

interface CloseIcon {
  onClick: () => void;
}

export const CloseIcon: FC<CloseIcon> = ({ onClick }): ReactNode => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Close icon"
      onClick={onClick}
      className={s.hovered}
    >
      <path
        d="M21.2897 2.09113L19.1594 0L10.7137 8.29038L2.268 0L0.137695 2.09113L8.58338 10.3815L0.137695 18.6719L2.268 20.763L10.7137 12.4726L19.1594 20.763L21.2897 18.6719L12.844 10.3815L21.2897 2.09113Z"
        fill="white"
      />
    </svg>
  );
};
