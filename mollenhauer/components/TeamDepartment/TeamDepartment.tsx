import { FC, ReactNode } from "react";
import cn from "classnames"

import { H3 } from "@/components/H3/H3";

import s from "./TeamDepartment.module.scss";

interface TeamDepartmentInterface {
  department: string;
  children: ReactNode;
	isAdmin?: boolean
}

export const TeamDepartment: FC<TeamDepartmentInterface> = ({
  department,
  children,
	isAdmin
}): ReactNode => {
  return (
    <div className={s.wrap}>
      <H3 className={s.title} text={department}></H3>
      <ul className={cn(s.list, {[s.isAdmin]: isAdmin})}>{children}</ul>
    </div>
  );
};
