import { Team } from "@/types/team";
import { v4 as uuid } from "uuid";

export const teamData: Team[] = [
  {
    id: uuid(),
    name: "Vincent Shao",
    designation: "Director & Principal Engineer",
    gradient: {
      from: "#4F46E5",
      to: "#13C296"
    }
  },
  {
    id: uuid(),
    name: "Adam Jones",
    designation: "Chartered Civil Engineer",
    gradient: {
      from: "#FF6B6B",
      to: "#4ECDC4"
    }
  },
  {
    id: uuid(),
    name: "Lin Zhu",
    designation: "Technical Director",
    gradient: {
      from: "#845EC2",
      to: "#D65DB1"
    }
  },
];
