import { StaticImageData } from "next/image";

export type MenuItem = {
  id: number;
  text: string;
  link: string;
};

export type Menu = MenuItem[];

export type ExpertiseItemType = {
  id: string;
  title: string;
};

export type ExpertiseListType = ExpertiseItemType[];

export type BenefitItemType = {
  id: string;
  title: string;
  text: string;
  img: StaticImageData;
};

export type BenefitListType = BenefitItemType[];

export type PartnerItemType = {
  id: number;
  name: string;
  logo: StaticImageData;
};

export type PartnerListType = PartnerItemType[];

export type ClientItemType = {
  id: number;
  companyName: string;
  logo: StaticImageData;
  text: string;
  name: string;
  job: string;
};

export type ClientsListType = ClientItemType[];

export type TeamMemberType = {
  id: number;
  name: string | "vacancy";
  position: string;
  link?: string;
  about?: string;
  avatar: StaticImageData;
  isBlueBorder?: boolean;
  isOrangeBorde?: boolean;
  isAdmin?: boolean;
};

export type TeamType = {
  department: string;
  team: TeamMemberType[];
};

export type TeamListType = TeamType[];

export type socialMediaItem = {
  name: string;
  logo: StaticImageData;
  link: string;
};

export type socialMediaListType = socialMediaItem[];
