import { ReactNode, FC } from "react";
import Link from "next/link";
import cn from "classnames";

import s from "./DocList.module.scss";

import { docsList } from "@/shared/mocks/content";

interface DocListInterface {
  className?: string;
}

export const DocList: FC<DocListInterface> = ({ className }): ReactNode => {
  return (
    <ul className={cn(s.docs, className)}>
      {docsList.map((item) => (
        <li key={item.id} className={s.docItem}>
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};
