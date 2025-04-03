"use client";

import { FC, ReactNode } from "react";
// import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { H2 } from "@/components/H2/H2";
import { ExpertiseCard } from "@/components/ExpertiseCard/ExpertiseCard";

import { ExpertiseList } from "@/shared/mocks/content";

import s from "./Expertise.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

export const Expertise: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <H2
        text="Broad expertise based on decades of experience"
        className={s.title}
      />
      <p className={s.text}>
        Our services include all types of construction projects that you
        encounter.
      </p>

      <Swiper
        pagination={{
          clickable: true,
					bulletClass: s.bullet,
					bulletActiveClass: s.activeBullet
        }}
        modules={[Pagination]}
        className={s.swiperWrap}
      >
        {ExpertiseList.map((el) => (
          <SwiperSlide key={el.id}>
            <ExpertiseCard {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
