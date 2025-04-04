"use client";

import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import s from "./BenefitCard.module.scss";
import { H3 } from "../H3/H3";

interface BenefitCard {
  img: StaticImageData;
  title: string;
  text: string;
  id: string;
}

export const BenefitCard: FC<BenefitCard> = ({
  id,
  text,
  title,
  img,
}): ReactNode => {
  return (
    <div className={s.card}>
      <Image src={img} alt={`${id}-${title}`} width={358} height={213} />
      <H3 text={title} className={s.title} />
      <p className={s.text}>{text}</p>
    </div>
  );
};
