import { ReactNode, FC } from "react";

interface ArrowIcon {
  className?: string;
}

export const ArrowIcon: FC<ArrowIcon> = ({ className }): ReactNode => {
  return (
    <svg
      aria-label="Arrow icon"
      className={className}
      width="10"
      height="17"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.6L1 8.5L9 15.6"
        stroke="#F7F9FC"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
