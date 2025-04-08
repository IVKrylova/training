"use client";

import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";

import { H2 } from "@/components/H2/H2";
import { PartnerCard } from "@/components/PartnerCard/PartnerCard";

import { PartnerList } from "@/shared/mocks/content";

import s from "./Partners.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";

export const Partners: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <H2
        text="Key Players in the cement industry trust us."
        className={s.title}
      />
      <div className={s.slider}>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 3,
            fill: "row",
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
            bulletClass: s.bullet,
            bulletActiveClass: s.activeBullet,
            horizontalClass: s.pagination,
          }}
          modules={[Pagination, Grid, Navigation]}
          className={s.swiperWrap}
          slidesPerGroup={3}
          loop
          navigation
          breakpoints={{
            834: {
              grid: {
                rows: 1,
              },
            },
            1728: {
              slidesPerView: 4,
              grid: {
                rows: 1,
              },
              slidesPerGroup: 4,
            },
          }}
        >
          {PartnerList.map((el) => (
            <SwiperSlide key={el.id} className={s.slide}>
              <PartnerCard {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
