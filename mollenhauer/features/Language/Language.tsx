"use client";

import { ReactNode, FC, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { languageList } from "@/shared/mocks/languageList";

import s from "./Language.module.scss";

export const Language: FC = (): ReactNode => {
  const [activeLang, setActiveLang] = useState<string>("En");
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        {languageList.map((lang) => (
          <li key={lang.lang} onClick={() => setActiveLang(lang.lang)}>
            <Image
              src={lang.img}
              alt={lang.lang}
              width={12}
              height={12}
              className={s.flag}
            />
            <span
              className={cn(s.lang, { [s.active]: activeLang === lang.lang })}
            >{`${lang.lang}.`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
