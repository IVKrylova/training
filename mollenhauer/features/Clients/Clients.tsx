"use client";

import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { H2 } from "@/components/H2/H2";

import { ClientsList } from "@/shared/mocks/content";
import { ClientCard } from "@/components/ClientCard/ClientCard";

import s from "./Clients.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

export const Clients: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <H2 text="What clients say." className={s.title} />
      <p className={s.text}>
        Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod
        eros, in cursus aliquam.
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        loop
        pagination={{
          clickable: true,
          bulletClass: s.bullet,
          bulletActiveClass: s.activeBullet,
          horizontalClass: s.pagination,
        }}
        modules={[Pagination]}
        className={s.swiperWrap}
      >
        {ClientsList.map((el) => (
          <SwiperSlide key={el.id} className={s.slide}>
            <ClientCard {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
