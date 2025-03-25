import { ReactNode, FC } from "react";
import cn from "classnames";

import s from "./Button.module.scss";

interface Button {
  type: "submit" | "button";
  variant: "orange" | "white" | "blue";
  text: string;
  onClick: () => void;
  clssName?: string;
}

export const Button: FC<Button> = ({
  type,
  variant,
  text,
  onClick,
  clssName,
}): ReactNode => {
  return (
    <button
      type={type}
      className={cn(
        {
          [s.orange]: variant === "orange",
          [s.white]: variant === "white",
          [s.blue]: variant === "blue",
        },
        s.button,
        clssName
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
