import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { Crimson_Text, Mulish } from "next/font/google";
import cn from "classnames";

import s from "./ClientCard.module.scss";

interface ClientCardInterface {
  name: string;
  logo: StaticImageData;
  companyName: string;
  text: string;
  job: string;
}

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const ClientCard: FC<ClientCardInterface> = ({
  name,
  logo,
  companyName,
  text,
  job,
}): ReactNode => {
  return (
    <div className={s.card}>
      <Image
        alt={companyName}
        src={logo}
        width={125}
        height={38}
        className={s.logo}
      />
      <p className={cn(s.text, crimsonText.className)}>{`"${text}"`}</p>
      <div className={cn(s.name, mulish.className)}>{name}</div>
      <div className={cn(s.job, mulish.className)}>{job}</div>
    </div>
  );
};
