import { ReactNode, FC } from "react";
import cn from "classnames";

import s from "./Button.module.scss";

interface Button {
  type: "submit" | "button";
  variant: "orange" | "white" | "default" | "round";
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
          [s.default]: variant === "default",
          [s.round]: variant === "round",
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
