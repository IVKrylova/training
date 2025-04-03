import { Menu, ExpertiseListType } from "../types/content";

export const menu: Menu = [
  {
    id: 1,
    text: "Services",
    link: "/",
  },
  {
    id: 2,
    text: "Know How",
    link: "/",
  },
  {
    id: 3,
    text: "Projects & References",
    link: "/",
  },
  {
    id: 4,
    text: "Our Company",
    link: "/",
  },
  {
    id: 5,
    text: "Our Clients",
    link: "/",
  },
  {
    id: 6,
    text: "Careers",
    link: "/",
  },
];

export const docsList: Menu = [
  {
    id: 1,
    text: "Imprint",
    link: "/",
  },
  {
    id: 2,
    text: "Data Privacy",
    link: "/",
  },
];

export const servisesList: string[] = [
  "Service and Support",
  "Preparation of contract award",
  "Structural design and execution planning",
  "Project consulting",
  "Construction site consulting",
  "Location analysis and feasibility studies",
];

export const ExpertiseList: ExpertiseListType = [
  { id: "01", title: "Civil engineering" },
  { id: "02", title: "Machine and building foundations" },
  { id: "03", title: "Silo and slipform construction" },
  {
    id: "04",
    title: "Assesments, building inspection, concrete maintenance and repair",
  },
  { id: "05", title: "International cement factory construction" },
  { id: "06", title: "Construction in ongoing operations" },
];
