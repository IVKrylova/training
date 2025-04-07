"use client";

import { FC, ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import { H2 } from "@/components/H2/H2";

import { ClientsList } from "@/shared/mocks/content";
import { ClientCard } from "@/components/ClientCard/ClientCard";
import { CustomNextPrevNavigation } from "@/components/CustomNextPrevNavigation/CustomNextPrevNavigation";

import s from "./Clients.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

export const Clients: FC = (): ReactNode => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={s.section}>
      <div className={s.description}>
        <H2 text="What clients say." className={s.title} />
        <p className={s.text}>
          Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod
          eros, in cursus aliquam.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        loop
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          bulletClass: s.bullet,
          bulletActiveClass: s.activeBullet,
          horizontalClass: s.pagination,
        }}
        modules={[Pagination]}
        className={s.swiperWrap}
        breakpoints={{
          768: {
            spaceBetween: 232,
          },
        }}
      >
        {ClientsList.map((el) => (
          <SwiperSlide key={el.id} className={s.slide}>
            <ClientCard {...el} />
          </SwiperSlide>
        ))}

        <CustomNextPrevNavigation
          className={s.prevNextNavigation}
          swiperRef={swiperRef}
        />
      </Swiper>
    </section>
  );
};
