"use client";

import { FC, ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import { BenefitCard } from "@/components/BenefitCard/BenefitCard";
import { H2 } from "@/components/H2/H2";
import { CustomNavigation } from "@/components/CustomNavigation/CustomNavigation";

import { BenefitList } from "@/shared/mocks/content";

import s from "./Benefits.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";

export const Benefits: FC = (): ReactNode => {
  const [active, setActive] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={s.section}>
      <div className={s.description}>
        <H2
          text="Benefit from Decades of Life Cycle Know How"
          className={s.title}
        />
        <p className={s.text}>
          Our decade-long permanent presence on cement plants helps us to design
          buildings today that will be ready for whatever tomorrow brings. With
          our comprehensive planning methodology and building life cycle
          experience we anticipate use changes, unexpected utilisation and
          lifetime expositions early on during planning. This allows us to
          design buildings that are flexible, long-lasting, and economically
          efficient.
        </p>
      </div>
      <CustomNavigation
        list={BenefitList}
        className={s.navigation}
        swiperRef={swiperRef}
        active={active}
        setActive={setActive}
      />
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
				loop
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
						loop: false
          },
        }}
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          bulletClass: s.bullet,
          bulletActiveClass: s.activeBullet,
          horizontalClass: s.pagination,
        }}
        modules={[Pagination]}
        className={s.swiperWrap}
      >
        {BenefitList.map((el) => (
          <SwiperSlide key={el.id} className={s.slide}>
            <BenefitCard {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
