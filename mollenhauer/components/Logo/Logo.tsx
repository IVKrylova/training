import { FC, ReactNode } from "react";
import Image from "next/image";

import logoWhite from "../../public/logo_white.svg";
import Link from "next/link";

export const Logo: FC = (): ReactNode => {
  return (
    <Link href={"/"}>
      <Image src={logoWhite} alt="logo mollenhauer" width={218} height={38} />
    </Link>
  );
};
