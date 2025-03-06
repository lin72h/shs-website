import Hero from "@/components/Home/Hero";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "SHS Engineering";

export const metadata: Metadata = {
  title: `SHS Engineering - Civil Engineering Experts | ${siteName}`,
  description: "NZ owned civil engineering design consultancy based in Auckland, specialising in comprehensive land development and infrastructure projects.",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
