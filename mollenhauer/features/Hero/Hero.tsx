"use client";

import { FC, ReactNode } from "react";

import { Button } from "@/components/Button/Button";

import s from "./Hero.module.scss";
import { H1 } from "@/components/H1/H1";

export const Hero: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <H1
        text={
          <>
            Civil <span className={s.bold}>Engineering Solutions</span> For The{" "}
            <span className={s.bold}>Cement</span> Industry
          </>
        }
        className={s.title}
      />
      <p className={s.text}>
        We are your leading partner for complex brownfield construction projects
        during ongoing operation.
      </p>
      <p className={s.text}>
        Benefit from engineering excellence built on more than 30 years of
        industry experience.
      </p>
      <ul className={s.advanteges}>
        <li>Agil.</li>
        <li>Ganzheitlich.</li>
        <li>Zuverlässig.</li>
      </ul>
      <div className={s.buttons}>
        <Button
          text="How can we serve you"
          onClick={() => {}}
          type="button"
          variant="default"
        />
        <Button
          text="Contact Us"
          onClick={() => {}}
          type="button"
          variant="white"
        />
      </div>
    </section>
  );
};
