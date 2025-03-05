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
    href: "#project-management",
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
        title: "Home Page",
        href: "/",
        external: false,
      },
      {
        id: uuid(),
        title: "Services Page",
        href: "/service",
        external: false,
      },
      {
        id: uuid(),
        title: "Portfolio Page",
        href: "/portfolio",
      },
      {
        id: uuid(),
        title: "Blog Page",
        href: "/blog",
        external: false,
      },
      {
        id: uuid(),
        title: "Contact Page",
        href: "/contact",
      },
      {
        id: uuid(),
        title: "Docs",
        href: "/docs",
        external: false,
      },
      {
        id: uuid(),
        title: "Sign in",
        href: "/auth/signin",
        external: false,
      },
      {
        id: uuid(),
        title: "Sign up",
        href: "/auth/signup",
        external: false,
      },
      {
        id: uuid(),
        title: "Error 404",
        href: "/404",
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
