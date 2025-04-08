"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { socialMediaList } from "@/shared/mocks/content";

import { H2 } from "@/components/H2/H2";
import { ShortLogo } from "@/components/ShortLogo/ShortLogo";

const Map = dynamic(() => import("@/features/Map/Map"), {
  ssr: false,
});

import s from "./Contacts.module.scss";
import "leaflet/dist/leaflet.css";

export const Contacts: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <Map />

      <div className={s.contacts}>
        <ShortLogo className={s.logo} />
        <div className={s.data}>
          <H2 text="Contacts:" className={s.title} />
          <address className={s.address}>
            Erwitter Str. 40, 59590 Geseke GERMANY
          </address>
          <a href="tel:+492942" className={s.tel}>
            +49 29 42 / 97 83 71
          </a>
          <a href="email:info@m-bp.de" className={s.email}>
            info@m-bp.de
          </a>
          <div className={s.socialMedia}>
            <div>Our Social Media:</div>
            <ul className={s.list}>
              {socialMediaList.map((el) => (
                <li key={el.name}>
                  <a href={el.link}>
                    <Image
                      className={s.socislLogo}
                      src={el.logo}
                      alt={el.name}
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
