import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "Chartered Civil Engineering",
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
    href: "",
    external: false,
    submenu: [
      {
        id: uuid(),
        title: "Overview",
        href: "civil-work",
        external: false,
      },
      {
        id: uuid(),
        title: "Don Buck",
        href: "civil-work#don-buck-development",
        external: false,
      },
      {
        id: uuid(),
        title: "Upper Harbour Drive",
        href: "civil-work#upper-harbour-development",
        external: false,
      },
      {
        id: uuid(),
        title: "Weranui Road",
        href: "civil-work#weranui-road",
        external: false,
      },
      {
        id: uuid(),
        title: "791 State Highway 16",
        href: "civil-work#state-highway-16",
        external: false,
      },
      {
        id: uuid(),
        title: "88 Cook Street",
        href: "civil-work#cook-street",
        external: false,
      },
    ],
  },
  {
    id: uuid(),
    title: "Building Construction",
    href: "building-construction",
    external: false,
  },
];
