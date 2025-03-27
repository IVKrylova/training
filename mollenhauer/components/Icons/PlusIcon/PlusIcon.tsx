import { ReactNode, FC } from "react";

export const PlusIcon: FC = (): ReactNode => {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 11 11"
      role="img"
      aria-label="Plus icon"
    >
      <path
        d="M10.64 5.62V4.49H6.15V-0.005H5.02V4.49H0.52V5.62H5.02v4.49h1.13V5.62h4.49z"
        fill="#DA5D24"
      />
    </svg>
  );
};
