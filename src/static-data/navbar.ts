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
    title: "Civil Works",
    href: "#civil-works",
    external: false,
  },
  {
    id: uuid(),
    title: "Portfolio",
    submenu: [
      {
        id: uuid(),
        title: "Project 1",
        href: "/project-1",
        external: false,
      },
      {
        id: uuid(),
        title: "Project 2",
        href: "/project-2",
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
