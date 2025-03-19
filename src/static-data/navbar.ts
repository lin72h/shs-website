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
        href: "civil-work/projects/don-buck",
        external: false,
      },
      {
        id: uuid(),
        title: "Upper Harbour Drive",
        href: "civil-work/projects/upper-harbour-drive",
        external: false,
      },
      {
        id: uuid(),
        title: "Weranui Road",
        href: "civil-work/projects/weranui-road",
        external: false,
      },
      {
        id: uuid(),
        title: "791 State Highway 16",
        href: "civil-work/projects/state-highway-16",
        external: false,
      },
      {
        id: uuid(),
        title: "88 Cook Street",
        href: "civil-work/projects/cook-street",
        external: false,
      },
    ],
  },
  {
    id: uuid(),
    title: "Building Construction",
    href: "",
    external: false,
    submenu: [
      {
        id: uuid(),
        title: "Overview",
        href: "building-construction",
        external: false,
      },
      {
        id: uuid(),
        title: "347 Pinecrest Dr",
        href: "building-construction/projects/347-pinecrest-dr",
        external: false,
      },
      {
        id: uuid(),
        title: "1 Parkway Drive",
        href: "building-construction/projects/parkway-drive-rosedale",
        external: false,
      },
    ],
  },
];
