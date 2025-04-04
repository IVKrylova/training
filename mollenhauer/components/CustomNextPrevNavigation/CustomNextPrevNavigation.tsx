import { FC, ReactNode, RefObject } from "react";
import cn from "classnames";
import { Swiper } from "swiper/types";

import s from "./CustomNextPrevNavigation.module.scss";
import { ArrowIcon } from "../Icons/ArrowIcon/ArrowIcon";

interface CustomNextPrevNavigationInterface {
  className?: string;
  swiperRef: RefObject<Swiper | null>;
  setActive: (idx: number) => void;
}

export const CustomNextPrevNavigation: FC<
  CustomNextPrevNavigationInterface
> = ({ className, swiperRef, setActive }): ReactNode => {
  const clickNext = () => {
    swiperRef?.current?.slideNext(0);
    setActive(swiperRef?.current ? swiperRef?.current?.activeIndex : 0);
  };

  const clickPrev = () => {
    swiperRef?.current?.slidePrev(0);
    setActive(swiperRef?.current ? swiperRef?.current?.activeIndex : 0);
  };

  return (
    <div className={cn(s.navigation, className)}>
      <button
        type="button"
        onClick={clickPrev}
        className={cn(s.button, s.prev)}
      >
        <ArrowIcon className={s.icon} />
      </button>
      <button
        type="button"
        onClick={clickNext}
        className={cn(s.button, s.next)}
      >
        <ArrowIcon className={cn(s.icon, s.nextIcon)} />
      </button>
    </div>
  );
};
