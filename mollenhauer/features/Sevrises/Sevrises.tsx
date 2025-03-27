import { FC, ReactNode } from "react";
import cn from "classnames";

import { H2 } from "@/components/H2/H2";

import { servisesList } from "@/shared/mocks/content";

import s from "./Sevrises.module.scss";
import { SevriseCard } from "@/components/ServiseCard/ServiseCard";

export const Sevrises: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <div className={s.description}>
        <H2
          text="Comprehensive Structural Engineering Services"
          className={s.title}
        />
        <p className={s.text}>
          We accompany you from the first idea of your next construction project
          from the first idea to successful execution.
        </p>
      </div>
      <ul className={s.list}>
        {servisesList.map((item, idx) => (
          <li key={item} className={cn({ [s.offset]: idx % 2 !== 0 })}>
            <SevriseCard title={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
