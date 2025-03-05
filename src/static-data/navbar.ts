import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Charter Engineering",
    href: "charter-engineering",
    external: false,
  },
  {
    id: uuid(),
    title: "Project Management",
    href: "project-management",
    external: false,
  },
  {
    id: uuid(),
    title: "Civil Work",
    href: "civil-work",
    external: false,
  },
  {
    id: uuid(),
    title: "Portfolio",
    submenu: [
      {
        id: uuid(),
        title: "Don Buck Civil",
        href: "don-buck-civil",
        external: false,
      },
      {
        id: uuid(),
        title: "Upper Harbour Drive",
        href: "upper-harbour-drive",
        external: false,
      },
    ],
  },
  {
    id: uuid(),
    title: "About",
    href: "#about",
    external: false,
  },
];
