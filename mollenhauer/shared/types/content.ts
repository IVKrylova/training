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
