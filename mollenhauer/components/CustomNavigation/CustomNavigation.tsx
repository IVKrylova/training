import { ReactNode, RefObject } from "react";
import cn from "classnames";
import { Swiper } from "swiper/types";

import { PlusIcon } from "../Icons/PlusIcon/PlusIcon";

import s from "./CustomNavigation.module.scss";

interface Item {
  id: string;
  title: string;
}

interface CustomNavigationInterface<T extends Item> {
  list: T[];
  className?: string;
  swiperRef: RefObject<Swiper | null>;
  active: number;
  setActive: (idx: number) => void;
}

export const CustomNavigation = <T extends Item>({
  list,
  className,
  swiperRef,
  active,
  setActive,
}: CustomNavigationInterface<T>): ReactNode => {
  return (
    <nav className={cn(s.navigation, className)}>
      <ul className={s.list}>
        {list?.map((el, idx) => (
          <li
            key={el.id}
            className={cn(s.item, {
              [s.active]: active === idx,
            })}
            onClick={() => {
              swiperRef?.current?.slideTo(idx, 0);
              setActive(idx);
            }}
          >
            <span className={s.id}>{el.id}</span>
            <PlusIcon className={s.icon} />
            <span className={s.title}>{el.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
