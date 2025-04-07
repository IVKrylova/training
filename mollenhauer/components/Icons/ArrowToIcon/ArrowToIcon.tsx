import { ReactNode, FC } from "react";

interface ArrowToIcon {
  className?: string;
}

export const ArrowToIcon: FC<ArrowToIcon> = ({ className }): ReactNode => {
  return (
    <svg
    width="37"
    height="23"
    viewBox="0 0 37 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Arrow icon"
    className={className}
  >
    <path
      d="M36.06 12.93a1.5 1.5 0 0 0 0-2.12L26.51 1.27a1.5 1.5 0 1 0-2.12 2.12l8.49 8.49-8.49 8.48a1.5 1.5 0 1 0 2.12 2.12l9.55-9.55ZM0 13.37h35v-3H0v3Z"
      fill="#FF7C40"
    />
  </svg>
  );
};


