import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/Team";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "SHS Engineering";

export const metadata: Metadata = {
  title: `SHS Engineering - Civil Engineering Experts | ${siteName}`,
  description: "New Zealand owned civil engineering consultancy specializing in land development, infrastructure design, and technical engineering solutions with precision and quality.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
    </>
  );
}
