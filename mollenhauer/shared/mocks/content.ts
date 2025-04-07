import {
  Menu,
  ExpertiseListType,
  BenefitListType,
  PartnerListType,
  ClientsListType,
  TeamListType,
} from "../types/content";

import benefitImg from "@/public/benefits.png";
import cemex from "@/public/cemexLogo.svg";
import zemetwerkLubeck from "@/public/zlLogo.svg";
import buzziUnicem from "@/public/buLogo.svg";
import thomasGruppe from "@/public/thomasGruppeLogo.svg";
import wittekind from "@/public/wittekindLogo.svg";
import spenner from "@/public/spennerLogo.svg";
import interCem from "@/public/InterCemLogo.svg";
import heidelbergCemen from "@/public/heidelbergLogo.svg";
import lafergeHolcim from "@/public/lafargeHolcimLogo.svg";
import timNicolas from "@/public/timNicolas.png";
import klausDieter from "@/public/klausDieter.png";
import bernhardMeyer from "@/public/bernhardMeyer.png";
import alexanderJung from "@/public/alexanderJung.png";
import stefanSchniedermeier from "@/public/stefanSchniedermeier.png";
import stefanWiek from "@/public/stefanWiek.png";
import defaultAvatar from "@/public/defaultAvatar.png";
import domenikSchmidt from "@/public/domenikSchmidt.png";
import manuelaSonntag from "@/public/manuelaSonntag.png";

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

export const BenefitList: BenefitListType = [
  {
    id: "01",
    img: benefitImg,
    title: "Comprehensive planning methodology includes life-cycle know how",
    text: "Our decade-long permanent presence on cement plants allows us to anticipate use changes, unexpected utilisation and lifetime expositions early on during planning. This allows us to design buildings that are flexible, long-lasting and economically efficient.",
  },
  {
    id: "02",
    img: benefitImg,
    title: "Greenfield. Brownfield. Ongoing Operation",
    text: "Our decade-long permanent presence on cement plants allows us to anticipate use changes, unexpected utilisation and lifetime expositions early on during planning. This allows us to design buildings that are flexible, long-lasting and economically efficient.",
  },
  {
    id: "03",
    img: benefitImg,
    title: "Reuse, rebuild, extend",
    text: "Our decade-long permanent presence on cement plants allows us to anticipate use changes, unexpected utilisation and lifetime expositions early on during planning. This allows us to design buildings that are flexible, long-lasting and economically efficient.",
  },
  {
    id: "04",
    img: benefitImg,
    title: "Renovate, refurbish, revamp",
    text: "Our decade-long permanent presence on cement plants allows us to anticipate use changes, unexpected utilisation and lifetime expositions early on during planning. This allows us to design buildings that are flexible, long-lasting and economically efficient.",
  },
  {
    id: "05",
    img: benefitImg,
    title: "Demolition",
    text: "Our decade-long permanent presence on cement plants allows us to anticipate use changes, unexpected utilisation and lifetime expositions early on during planning. This allows us to design buildings that are flexible, long-lasting and economically efficient.",
  },
];

export const PartnerList: PartnerListType = [
  {
    id: 1,
    name: "Cemex",
    logo: cemex,
  },
  {
    id: 2,
    name: "Zemetwerk Lubeck",
    logo: zemetwerkLubeck,
  },
  {
    id: 3,
    name: "Buzzi Unicem",
    logo: buzziUnicem,
  },
  {
    id: 4,
    name: "Thomas gruppe",
    logo: thomasGruppe,
  },
  {
    id: 5,
    name: "Wittekind",
    logo: wittekind,
  },
  {
    id: 6,
    name: "Spenner",
    logo: spenner,
  },
  {
    id: 7,
    name: "InterCem",
    logo: interCem,
  },
  {
    id: 8,
    name: "HeidelbergCemen",
    logo: heidelbergCemen,
  },
  {
    id: 9,
    name: "LafergeHolcim",
    logo: lafergeHolcim,
  },
  {
    id: 11,
    name: "Cemex",
    logo: cemex,
  },
  {
    id: 12,
    name: "Zemetwerk Lubeck",
    logo: zemetwerkLubeck,
  },
  {
    id: 13,
    name: "Buzzi Unicem",
    logo: buzziUnicem,
  },
  {
    id: 14,
    name: "Thomas gruppe",
    logo: thomasGruppe,
  },
  {
    id: 15,
    name: "Wittekind",
    logo: wittekind,
  },
  {
    id: 16,
    name: "Spenner",
    logo: spenner,
  },
  {
    id: 17,
    name: "InterCem",
    logo: interCem,
  },
  {
    id: 18,
    name: "HeidelbergCemen",
    logo: heidelbergCemen,
  },
  {
    id: 19,
    name: "LafergeHolcim",
    logo: lafergeHolcim,
  },
  {
    id: 21,
    name: "Cemex",
    logo: cemex,
  },
  {
    id: 22,
    name: "Zemetwerk Lubeck",
    logo: zemetwerkLubeck,
  },
  {
    id: 23,
    name: "Buzzi Unicem",
    logo: buzziUnicem,
  },
  {
    id: 24,
    name: "Thomas gruppe",
    logo: thomasGruppe,
  },
  {
    id: 25,
    name: "Wittekind",
    logo: wittekind,
  },
  {
    id: 26,
    name: "Spenner",
    logo: spenner,
  },
  {
    id: 27,
    name: "InterCem",
    logo: interCem,
  },
  {
    id: 28,
    name: "HeidelbergCemen",
    logo: heidelbergCemen,
  },
  {
    id: 29,
    name: "LafergeHolcim",
    logo: lafergeHolcim,
  },
];

export const ClientsList: ClientsListType = [
  {
    id: 1,
    companyName: "Cemex",
    logo: cemex,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 2,
    companyName: "Zemetwerk Lubeck",
    logo: zemetwerkLubeck,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 3,
    companyName: "Buzzi Unicem",
    logo: buzziUnicem,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 4,
    companyName: "Thomas gruppe",
    logo: thomasGruppe,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 5,
    companyName: "Wittekind",
    logo: wittekind,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 6,
    companyName: "Spenner",
    logo: spenner,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 7,
    companyName: "InterCem",
    logo: interCem,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 8,
    companyName: "HeidelbergCemen",
    logo: heidelbergCemen,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
  {
    id: 9,
    companyName: "LafergeHolcim",
    logo: lafergeHolcim,
    text: "Pulvinar nisl nulla elit integer diam maecenas. Mauris nunc at arcu urna. Erat quisque neque, a augue lectus vitae faucibus facilisi. Aenean mauris duis sed congue magna scelerisque dolor eget in. Euismod eros, in cursus aliquam. Suspendisse odio est nullam vulputate quis nam ultricies.",
    name: "Jack Carty",
    job: "SEO",
  },
];

export const teamList: TeamListType = [
  {
    department: "Leadership Team",
    team: [
      {
        id: 1,
        name: "Tim-Nicolas Mollenhauer",
        position: "CEO",
        link: "#",
        about:
          "Viverra in turpis vitae tincidunt. Odio nunc netus consectetur libero duis. Est quis vitae, sed egestas vehicula.",
        avatar: timNicolas,
        isOrangeBorde: true,
        isAdmin: true
      },
      {
        id: 2,
        name: "Klaus-Dieter Mollenhauer",
        position: "Creative Director",
        link: "#",
        about:
          "Duis aenean ultricies ullamcorper neque cras vel. Quam sem turpis est morbi nunc odio feugiat pellentesque. Eget risus lectus donec tempus cras. Amet amet, auctor habitasse tristique pellentesque id velit.",
        avatar: klausDieter,
        isBlueBorder: true,
        isAdmin: true
      },
    ],
  },
  {
    department: "Engineers",
    team: [
      {
        id: 3,
        name: "Bernhard Meyer",
        position: "Senior Steel Structures Engineer",
        avatar: bernhardMeyer,
      },
      {
        id: 4,
        name: "Alexander Jung",
        position: "Project Engineer",
        avatar: alexanderJung,
      },
      {
        id: 5,
        name: "Stefan Schniedermeier",
        position: "Project Engineer",
        avatar: stefanSchniedermeier,
      },
      {
        id: 6,
        name: "Stefan Wiek",
        position: "Project Engineer",
        avatar: stefanWiek,
      },
      {
        id: 7,
        name: "vacancy",
        position: "Senior Engineer Concrete",
        avatar: defaultAvatar,
      },
    ],
  },
  {
    department: "Technical staff",
    team: [
      {
        id: 8,
        name: "Domenik Schmidt",
        position: "Head of Layout & Design",
        avatar: domenikSchmidt,
      },
      {
        id: 9,
        name: "Manuela Sonntag",
        position: "Reinforcement Technician",
        avatar: manuelaSonntag,
      },
      {
        id: 10,
        name: "Mark Peters",
        position: "Planning Permission Design",
        avatar: bernhardMeyer,
      },
      {
        id: 11,
        name: "Katarina Maslanova",
        position: "Structural Drawings",
        avatar: alexanderJung,
      },
      {
        id: 12,
        name: "Benedikt Schröder-Schlüter",
        position: "Structural Drawings",
        avatar: stefanSchniedermeier,
      },
      {
        id: 13,
        name: "Michael Dick",
        position: "Structural Drawings",
        avatar: stefanWiek,
      },
    ],
  },
  {
    department: "Engineering Trainees",
    team: [
      {
        id: 14,
        name: "Najwa Hasan",
        position: "Position",
        avatar: stefanSchniedermeier,
      },
      {
        id: 15,
        name: "Leonie Kahr",
        position: "Position",
        avatar: stefanWiek,
      },
    ],
  },
  {
    department: "Other Team Members",
    team: [
      {
        id: 16,
        name: "Michelle Michalik",
        position: "Assistent to the Management",
        avatar: manuelaSonntag,
        isOrangeBorde: true,
      },
    ],
  },
];
