import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import s from "./PartnerCard.module.scss";

interface PartnerCardInterface {
  name: string;
  logo: StaticImageData;
}

export const PartnerCard: FC<PartnerCardInterface> = ({
  name,
  logo,
}): ReactNode => {
  return (
    <div className={s.card}>
      <Image alt={name} src={logo} />
    </div>
  );
};
