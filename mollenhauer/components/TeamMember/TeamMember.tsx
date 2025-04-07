import { FC, ReactNode } from "react";
import Image from "next/image";
import cn from "classnames";

import { ArrowToIcon } from "../Icons/ArrowToIcon/ArrowToIcon";

import { TeamMemberType } from "@/shared/types/content";
import linkedin from "@/public/linkedin.svg";

import s from "./TeamMember.module.scss";

export const TeamMember: FC<TeamMemberType> = ({
  name,
  position,
  link,
  about,
  avatar,
  isBlueBorder,
  isOrangeBorde,
  isAdmin,
}): ReactNode => {
  return (
    <li className={cn(s.member, { [s.admin]: isAdmin })}>
      <div
        className={cn(s.avatarWrap, {
          [s.adminAvatar]: isAdmin,
          [s.orangeBorder]: isOrangeBorde,
          [s.blueBorder]: isBlueBorder,
        })}
      >
        <Image
          src={avatar}
          width={isAdmin ? 140 : 110}
          height={isAdmin ? 169 : 110}
          alt={name}
        />
      </div>
      <div className={cn(s.description, { [s.adminDescription]: isAdmin })}>
        <div className={cn(s.name, { [s.adminName]: isAdmin })}>{name}</div>
        <div className={cn(s.position, { [s.adminPosition]: isAdmin })}>
          <ArrowToIcon className={cn(s.icon, { [s.adminIcon]: isAdmin })} />
          <span>{position}</span>
        </div>
        {about && <p className={s.about}>{about}</p>}
        {link && (
          <a className={s.link} href={link}>
            <Image src={linkedin} alt="linkedin icon" width={20} height={21} />
          </a>
        )}
      </div>
    </li>
  );
};
